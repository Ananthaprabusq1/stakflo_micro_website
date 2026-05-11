"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { FaAnglesUp } from "react-icons/fa6";

const emptySubscribe = () => () => {};

export default function ScrollToTopButton() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const [visible, setVisible] = useState(false);
  const [accessibilityMode, setAccessibilityMode] = useState({
    contrast: false,
    grayscale: false,
  });

  useEffect(() => {
    if (!isClient) return undefined;

    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    const frameId = window.requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return undefined;

    const siteShell = document.getElementById("site-shell");
    if (!siteShell) return undefined;

    const syncAccessibilityMode = () => {
      setAccessibilityMode({
        contrast: siteShell.classList.contains("high-contrast"),
        grayscale: siteShell.classList.contains("grayscale"),
      });
    };

    const frameId = window.requestAnimationFrame(syncAccessibilityMode);
    const observer = new MutationObserver(syncAccessibilityMode);
    observer.observe(siteShell, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
    };
  }, [isClient]);

  const scrollToTop = () => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  if (!isClient) return null;

  const buttonClass = accessibilityMode.contrast
    ? "bg-[#111111] text-[#ffff00] border border-[#ffff00] shadow-none"
    : accessibilityMode.grayscale
      ? "bg-white text-black border border-black shadow-lg"
      : "bg-[#145834] text-white border border-transparent shadow-lg";

  return createPortal(
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`micro-press fixed bottom-6 right-6 z-[9998] flex h-12 w-12 items-center justify-center rounded-full  cursor-pointer ${buttonClass}
         ${
           visible
             ? "opacity-100 translate-y-0"
             : "opacity-0 translate-y-6 pointer-events-none"
         }`}
    >
      <FaAnglesUp size={18} aria-hidden="true" />
    </button>,
    document.body,
  );
}
