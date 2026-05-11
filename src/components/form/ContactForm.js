"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { FiChevronDown } from "react-icons/fi";
// import AppModal from "../ui/Modal";
import { HiOutlineX } from "react-icons/hi";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: "",
};

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContactForm({
  onSuccess,
  endpoint = "/api/contact",
  formName = "Default Form",
}) {
  const [formData, setFormData] = useState(initialFormState);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [captchaScriptFailed, setCaptchaScriptFailed] = useState(false);
  const recaptchaContainerRef = useRef(null);
  const recaptchaWidgetIdRef = useRef(null);
  const recaptchaInitAttemptsRef = useRef(0);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    const cleanValue = value;

    setFormData((prev) => ({
      ...prev,
      [name]: cleanValue,
    }));

    const fieldError = validateField(name, cleanValue);

    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const getRenderMethod = useCallback(() => {
    if (!window.grecaptcha) {
      return null;
    }

    if (typeof window.grecaptcha.render === "function") {
      return window.grecaptcha.render.bind(window.grecaptcha);
    }

    if (
      window.grecaptcha.enterprise &&
      typeof window.grecaptcha.enterprise.render === "function"
    ) {
      return window.grecaptcha.enterprise.render.bind(
        window.grecaptcha.enterprise,
      );
    }

    return null;
  }, []);

  const resetRecaptchaWidget = useCallback(() => {
    if (recaptchaWidgetIdRef.current === null || !window.grecaptcha) {
      return;
    }

    if (typeof window.grecaptcha.reset === "function") {
      window.grecaptcha.reset(recaptchaWidgetIdRef.current);
      return;
    }

    if (
      window.grecaptcha.enterprise &&
      typeof window.grecaptcha.enterprise.reset === "function"
    ) {
      window.grecaptcha.enterprise.reset(recaptchaWidgetIdRef.current);
    }
  }, []);

  const renderRecaptcha = useCallback(() => {
    if (
      !recaptchaSiteKey ||
      !recaptchaContainerRef.current ||
      recaptchaWidgetIdRef.current !== null
    ) {
      return;
    }

    const render = getRenderMethod();
    if (!render) {
      if (recaptchaInitAttemptsRef.current >= 10) {
        setCaptchaScriptFailed(true);
        return;
      }

      recaptchaInitAttemptsRef.current += 1;
      window.setTimeout(renderRecaptcha, 150);
      return;
    }

    recaptchaWidgetIdRef.current = render(recaptchaContainerRef.current, {
      sitekey: recaptchaSiteKey,
      callback: (token) => setRecaptchaToken(token || ""),
      "expired-callback": () => setRecaptchaToken(""),
      "error-callback": () => setRecaptchaToken(""),
    });
  }, [getRenderMethod]);

  useEffect(() => {
    if (!window.grecaptcha) {
      return;
    }

    if (typeof window.grecaptcha.ready === "function") {
      window.grecaptcha.ready(() => {
        renderRecaptcha();
      });
    } else {
      renderRecaptcha();
    }
  }, [renderRecaptcha]);

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");

    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitting(false);
      return;
    }

    if (recaptchaSiteKey && !recaptchaToken) {
      setSubmitting(false);
      if (captchaScriptFailed) {
        setError(
          "Captcha failed to load. Disable blockers and refresh the page.",
        );
        return;
      }
      setError("Please complete the captcha.");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formName, recaptchaToken }),
      });

      const payload = await response.json();
      if (!response.ok || !payload.success) {
        throw new Error(payload.error || "Failed to send message");
      }
      const successMessage =
        "Our team will contact you shortly to assist you further.";
      setFormData(initialFormState);
      setRecaptchaToken("");
      resetRecaptchaWidget();
      setSuccess(successMessage);
      setOpen(true);
      onSuccess?.(payload);
    } catch (err) {
      setError(err.message || "Error sending message");
    } finally {
      setSubmitting(false);
    }
  }

  /* ---------------- VALIDATION ---------------- */
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
        if (!value.trim()) {
          error = "First name is required";
        } else if (!/^[A-Za-z. ]+$/.test(value)) {
          error = "Only letters, spaces and '.' allowed";
        } else if (/^0+$/.test(value.replace(/\s/g, ""))) {
          error = "Name cannot be all zeros";
        } else if (value.length < 3) {
          error = "Minimum 3 characters required";
        } else if (value.length > 30) {
          error = "Maximum 30 characters allowed";
        }
        break;

      case "lastName":
        if (value && !/^[A-Za-z. ]+$/.test(value)) {
          error = "Only letters, spaces and '.' allowed";
        } else if (value && value.length > 30) {
          error = "Maximum 30 characters allowed";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Enter a valid email address";
        }
        break;

      case "company":
        if (value && !/^[A-Za-z0-9. ]+$/.test(value)) {
          error = "Company name cannot contain special characters";
        } else if (value && value.length < 2) {
          error = "Company name too short";
        } else if (value && value.length > 30) {
          error = "Maximum 30 characters allowed";
        }
        break;

      case "message":
        if (value.length > 500) {
          error = "Maximum 500 characters allowed";
        }
        break;

      default:
        break;
    }

    return error;
  };

  return (
    <>
      {recaptchaSiteKey && (
        <Script
          src="https://www.google.com/recaptcha/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={renderRecaptcha}
          onError={() => setCaptchaScriptFailed(true)}
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InputField
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            required
          />
          <InputField
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InputField
            label="Work Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          <InputField
            label="Company Name"
            name="company"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
          />
        </div>

        <div>
          <label className="mb-2 block text-[14px] font-medium text-[#707178]">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            maxLength={3000}
            onWheel={(e) => e.stopPropagation()}
            className="min-h-[45px] max-h-[220px] w-full resize-y overflow-y-auto rounded-[10px] border border-[#bfc0c5] px-4 py-3 text-[16px] text-black outline-none transition focus:border-[var(--pink-600)]"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {recaptchaSiteKey && (
          <div>
            <div ref={recaptchaContainerRef} />
            {captchaScriptFailed && (
              <p className="mt-2 text-sm font-medium text-red-600">
                Captcha failed to load. Disable blockers and refresh.
              </p>
            )}
          </div>
        )}

        <p className="text-[14px] leading-[1]  font-normal text-[#7a7b82]">
          By submitting this form, you agree to our terms and privacy policy.
        </p>

        {error && <p className="text-base font-medium text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className={`w-full rounded-[10px] py-2 text-[16px] font-semibold text-white transition ${
            submitting
              ? "cursor-not-allowed bg-[#5f6064]"
              : "cursor-pointer bg-black hover:bg-[#111216]"
          }`}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      {/* <AppModal isOpen={open} onClose={() => setOpen(false)}>
        <div className="relative text-center py-8 px-6">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
          >
            <HiOutlineX />
          </button>

          <h2 className="text-2xl font-bold mb-3 text-pink-600">
            Thank you for reaching out to us!
          </h2>

          <h3 className="text-xl mb-3">{success}</h3>

          <button
            onClick={() => setOpen(false)}
            className="mt-6 px-6 py-2 bg-black text-white rounded-lg cursor-pointer transition hover:opacity-90"
          >
            Close
          </button>
        </div>
      </AppModal> */}
    </>
  );
}

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  maxLength,
}) {
  return (
    <div>
      <label className="mb-2 block text-[14px] font-medium text-[#707178]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        autoComplete="off"
        className="h-[40px] w-full rounded-[10px] border border-[#bfc0c5]  px-4 text-[16px] text-black outline-none transition focus:border-[var(--pink-600)]"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  options,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <label className="mb-2 block text-[14px] font-medium text-[#707178]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsMenuOpen(true)}
          onBlur={() => setIsMenuOpen(false)}
          required={required}
          className="h-[40px] w-full appearance-none rounded-[10px] border border-[#bfc0c5] bg-white px-4 pr-10 text-[16px] text-black outline-none transition focus:border-[var(--pink-600)]"
        >
          <option value="">Select Enquiry Type</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <FiChevronDown
          className={`pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-700 transition-transform duration-200 ${
            isMenuOpen ? "rotate-180" : "rotate-0"
          }`}
          size={18}
        />
      </div>

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
