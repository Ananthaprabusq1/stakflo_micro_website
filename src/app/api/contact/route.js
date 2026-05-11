import { NextResponse } from "next/server";
import { createContactEmailTemplate } from "../../lib/emailTemplates/contactTemplate";
import { sendEmail } from "@/app/lib/mailer";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 6;
const MAX_REQUEST_BODY_BYTES = 12 * 1024;

const ipRateStore = new Map();

function secureJson(body, init) {
  const response = NextResponse.json(body, init);
  response.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");
  response.headers.set("X-Content-Type-Options", "nosniff");
  return response;
}

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ipAddress) {
  const now = Date.now();
  const entry = ipRateStore.get(ipAddress);

  if (!entry || entry.resetAt <= now) {
    ipRateStore.set(ipAddress, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) return true;

  entry.count += 1;
  return false;
}

function hasHeaderInjectionChars(value) {
  return /[\r\n]/.test(value);
}

function isAllowedOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  let originUrl;
  try {
    originUrl = new URL(origin);
  } catch {
    return false;
  }

  const allowedOrigins = [
    process.env.NEXT_PUBLIC_APP_ORIGIN,
    ...(process.env.ALLOWED_ORIGINS || "").split(","),
  ]
    .map((value) => (value || "").trim().replace(/\/+$/, ""))
    .filter(Boolean);

  if (allowedOrigins.length > 0) {
    return allowedOrigins.includes(originUrl.origin);
  }

  const host = request.headers.get("host");
  return Boolean(host && originUrl.host === host);
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object") return "Invalid request payload";

  const firstName = String(payload.firstName || "").trim();
  const lastName = String(payload.lastName || "").trim();
  const email = String(payload.email || "").trim();
  const company = String(payload.company || "").trim();
  const message = String(payload.message || "").trim();
  const formName = String(payload.formName || "Contact Form").trim();
  const recaptchaToken = String(payload.recaptchaToken || "").trim();
  const website = String(payload.website || "").trim();

  if (website) return "Spam detected";
  if (!firstName || !email) {
    return "Please fill all required fields.";
  }
  if (!EMAIL_REGEX.test(email) || hasHeaderInjectionChars(email))
    return "Please enter a valid email.";

  if (
    hasHeaderInjectionChars(firstName) ||
    hasHeaderInjectionChars(lastName) ||
    hasHeaderInjectionChars(company) ||
    hasHeaderInjectionChars(formName)
  ) {
    return "Invalid input.";
  }

  if (
    firstName.length > 80 ||
    lastName.length > 80 ||
    email.length > 254 ||
    company.length > 120 ||
    formName.length > 120 ||
    message.length > 3000
  ) {
    return "Input is too long.";
  }

  return {
    firstName,
    lastName,
    email,
    company,
    message,
    formName,
    recaptchaToken,
  };
}

function resolveExpectedRecaptchaHost(request) {
  const configuredHost = (process.env.RECAPTCHA_EXPECTED_HOST || "").trim();
  if (configuredHost) return configuredHost;

  const host = request.headers.get("host") || "";
  return host.split(":")[0].trim();
}

async function verifyRecaptcha(token, remoteIp, expectedHost) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret || !token) return false;

  const formData = new URLSearchParams({
    secret,
    response: token,
    remoteip: remoteIp,
  });

  const verifyResponse = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
      cache: "no-store",
    },
  );

  if (!verifyResponse.ok) return false;

  const verifyResult = await verifyResponse.json();
  if (!verifyResult.success) return false;
  if (!verifyResult.hostname || !expectedHost) return false;

  return verifyResult.hostname === expectedHost;
}

async function parseJsonBody(request) {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return { error: "Unsupported content type.", status: 415 };
  }

  const contentLengthHeader = request.headers.get("content-length") || "";
  if (contentLengthHeader) {
    const contentLength = Number(contentLengthHeader);
    if (
      Number.isFinite(contentLength) &&
      contentLength > MAX_REQUEST_BODY_BYTES
    ) {
      return { error: "Request payload too large.", status: 413 };
    }
  }

  const rawBody = await request.text();
  const bodySize = new TextEncoder().encode(rawBody).length;
  if (bodySize > MAX_REQUEST_BODY_BYTES) {
    return { error: "Request payload too large.", status: 413 };
  }

  try {
    return { payload: JSON.parse(rawBody) };
  } catch {
    return { error: "Invalid request payload", status: 400 };
  }
}

export async function POST(request) {
  if (!isAllowedOrigin(request)) {
    return secureJson(
      { success: false, error: "Forbidden origin." },
      { status: 403 },
    );
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return secureJson(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  try {
    const bodyResult = await parseJsonBody(request);
    if (bodyResult.error) {
      return secureJson(
        { success: false, error: bodyResult.error },
        { status: bodyResult.status },
      );
    }

    const parsedPayload = validatePayload(bodyResult.payload);
    if (typeof parsedPayload === "string") {
      return secureJson(
        { success: false, error: parsedPayload },
        { status: 400 },
      );
    }

    const expectedRecaptchaHost = resolveExpectedRecaptchaHost(request);
    const recaptchaValid = await verifyRecaptcha(
      parsedPayload.recaptchaToken,
      clientIp,
      expectedRecaptchaHost,
    );
    if (!recaptchaValid) {
      return secureJson(
        { success: false, error: "Captcha verification failed." },
        { status: 400 },
      );
    }

    const toEmail = process.env.TO_EMAIL || process.env.EMAIL_USER;
    if (!toEmail) throw new Error("Missing recipient email configuration");

    await sendEmail({
      to: toEmail,
      replyTo: parsedPayload.email,
      subject: `New message from ${parsedPayload.formName}`,
      html: createContactEmailTemplate(parsedPayload),
    });

    return secureJson({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return secureJson(
      { success: false, error: "Unable to send message at the moment." },
      { status: 500 },
    );
  }
}
