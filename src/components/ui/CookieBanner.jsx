"use client";

import { useState, useSyncExternalStore } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { FaCookieBite } from "react-icons/fa";

const COOKIE_NAME = "user_cookie_consent";
const emptySubscribe = () => () => {};

export default function CookieBanner() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isManuallyOpen, setIsManuallyOpen] = useState(false);
  const consentValue = useSyncExternalStore(
    emptySubscribe,
    () => getCookieConsentValue(COOKIE_NAME),
    () => null,
  );
  const isHydrated = consentValue !== null;
  const isBannerOpen =
    isHydrated &&
    !isDismissed &&
    (isManuallyOpen || consentValue === undefined);

  if (!isHydrated) {
    return null;
  }
  return (
    <div className="pointer-events-none fixed bottom-5 left-5 z-50 flex items-end gap-3">
      <button
        onClick={() => {
          setIsDismissed(false);
          setIsManuallyOpen((prev) => !prev || consentValue === undefined);
        }}
        aria-label="Open cookie settings"
        aria-expanded={isBannerOpen}
        aria-controls="cookie-banner-panel"
        className="micro-press pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white bg-[#12C951]  shadow-[0_18px_40px_rgba(17,24,39,0.28)] transition-colors focus:outline-none focus:ring-2 focus:ring-[#12C951] focus:ring-offset-2 cursor-pointer"
      >
        <FaCookieBite size={20} />
      </button>

      <CookieConsent
        visible={isBannerOpen ? "show" : "hidden"}
        location="bottom"
        buttonText="Accept All"
        declineButtonText="Reject All"
        enableDeclineButton
        cookieName={COOKIE_NAME}
        expires={365}
        onAccept={() => {
          setIsManuallyOpen(false);
          setIsDismissed(true);
        }}
        onDecline={() => {
          setIsManuallyOpen(false);
          setIsDismissed(true);
        }}
        containerClasses="pointer-events-auto"
        buttonWrapperClasses="mt-4 flex flex-wrap gap-2"
        contentClasses="pr-8 text-[16px] leading-6"
        customContainerAttributes={{
          id: "cookie-banner-panel",
        }}
        style={{
          background: "#F8F9FA",
          color: "#111827",
          padding: "16px 20px",
          maxWidth: "420px",
          width: "min(420px, calc(100vw - 100px))",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
          position: "relative",
          right: "auto",
          bottom: "auto",
          left: "auto",
          border: "1px solid #e5e7eb",
          boxShadow: "0 20px 45px rgba(15, 23, 42, 0.14)",
        }}
        contentStyle={{
          margin: 0,
          flex: "none",
        }}
        buttonStyle={{
          background: "#12C951",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "8px",
          padding: "5px 12px",
          margin: 0,
        }}
        declineButtonStyle={{
          background: "#6B7280",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "8px",
          padding: "5px 12px",
          margin: 0,
        }}
      >
        <button
          onClick={() => {
            setIsManuallyOpen(false);
            setIsDismissed(true);
          }}
          aria-label="Close cookie banner"
          className="absolute top-1 right-5 text-red-600 text-lg font-bold z-55 cursor-pointer"
        >
          ✕
        </button>
        This website uses cookies to improve your experience. You can accept or
        reject cookies.
      </CookieConsent>
    </div>
  );
}
