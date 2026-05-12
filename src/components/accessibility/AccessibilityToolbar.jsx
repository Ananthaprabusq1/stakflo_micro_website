"use client";

import { useEffect, useRef, useState } from "react";

import {
  LuEye,
  LuLanguages,
  LuRotateCcw,
  LuVolume2,
  LuVolumeX,
} from "react-icons/lu";

import { FaUniversalAccess } from "react-icons/fa6";

import { applyProfile, readPage, stopReading } from "@/lib/utils/accessibility";

import useAccessibility, {
  defaultAccessibilitySettings,
} from "./useAccessibility";

const ACTIVE_STYLE = `
  border-[#155836]
  bg-[#155836]
  text-white
  shadow-md
`;

const INACTIVE_STYLE = `
  border-gray-300
  bg-white
  text-[#222]

  hover:border-[#155836]
  hover:bg-[#edf7f1]
  hover:text-[#155836]
`;

export default function AccessibilityToolbar() {
  const { settings, setSettings } = useAccessibility();

  const [isOpen, setIsOpen] = useState(false);

  const panelId = "accessibility-settings-panel";

  const containerRef = useRef(null);

  function toggleBooleanSetting(key) {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }

  function toggleButtonClass(active) {
    return `
      rounded-[18px]
      border

      px-4
      py-3

      text-[15px]
      font-semibold

      cursor-pointer

      transition-all
      duration-300

      ${active ? ACTIVE_STYLE : INACTIVE_STYLE}
    `;
  }

  useEffect(() => {
    if (typeof document === "undefined") return;

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        fixed
        right-4
        top-1/2
        -translate-y-1/2
        z-[9999]
      "
    >
      {/* FLOATING BUTTON */}

      <button
        type="button"
        aria-label="Open accessibility settings"
        title="Accessibility settings"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
        className="
          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-full

          bg-[#155836]

          text-white

          shadow-[0_10px_25px_rgba(21,88,54,0.28)]

          transition-all
          duration-300

          hover:scale-105
          hover:bg-[#0f472c]
        "
      >
        <FaUniversalAccess className="text-xl" />
      </button>

      {/* PANEL */}

      {isOpen ? (
        <section
          id={panelId}
          aria-label="Accessibility settings"
          className="
            absolute
            right-18
            top-1/2
            -translate-y-1/2

            w-[340px]

            rounded-[28px]

            border
            border-gray-200

            bg-white/95
            backdrop-blur-xl

            p-5

            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          "
        >
          {/* HEADER */}

          <div
            className="
              mb-5
              flex
              items-center
              justify-between
            "
          >
            <h2
              className="
                text-[1.8rem]
                font-bold
                text-[#1f1f1f]
              "
            >
              Accessibility
            </h2>

            <button
              type="button"
              aria-label="Reset accessibility settings"
              onClick={() => setSettings(defaultAccessibilitySettings)}
              className="
                group

                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-xl

                border
                border-gray-200

                bg-white

                text-gray-700

                transition-all
                duration-300

                hover:border-[#155836]
                hover:bg-[#155836]
                hover:text-white
              "
            >
              <LuRotateCcw
                className="
                  text-lg
                  transition-transform
                  duration-500
                  group-hover:-rotate-270
                "
              />
            </button>
          </div>

          {/* TEXT SIZE */}

          <div className="mb-6">
            <p
              className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-gray-500
              "
            >
              Text Size
            </p>

            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <button
                type="button"
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    zoom: prev.zoom - 5,
                  }))
                }
                className="
                  flex
                  h-13
                  w-13
                  items-center
                  justify-center

                  rounded-[18px]

                  border
                  border-gray-300

                  bg-white

                  text-lg
                  font-bold

                  text-[#155836]

                  transition-all
                  duration-300

                  hover:border-[#155836]
                  hover:bg-[#155836]
                  hover:text-white
                "
              >
                A-
              </button>

              <span
                className="
                  text-2xl
                  font-bold
                  text-[#155836]
                "
              >
                {settings.zoom}%
              </span>

              <button
                type="button"
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    zoom: prev.zoom + 5,
                  }))
                }
                className="
                  flex
                  h-13
                  w-13
                  items-center
                  justify-center

                  rounded-[18px]

                  border
                  border-gray-300

                  bg-white

                  text-lg
                  font-bold

                  text-[#155836]

                  transition-all
                  duration-300

                  hover:border-[#155836]
                  hover:bg-[#155836]
                  hover:text-white
                "
              >
                A+
              </button>
            </div>
          </div>

          {/* DISPLAY */}

          <div className="mb-6">
            <p
              className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-gray-500
              "
            >
              Display
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className={toggleButtonClass(settings.contrast)}
                onClick={() => toggleBooleanSetting("contrast")}
              >
                High Contrast
              </button>

              <button
                type="button"
                className={toggleButtonClass(settings.grayscale)}
                onClick={() => toggleBooleanSetting("grayscale")}
              >
                Grayscale
              </button>

              <button
                type="button"
                className={toggleButtonClass(settings.dyslexia)}
                onClick={() => toggleBooleanSetting("dyslexia")}
              >
                Reading Font
              </button>

              <button
                type="button"
                className={toggleButtonClass(settings.bigCursor)}
                onClick={() => toggleBooleanSetting("bigCursor")}
              >
                Large Cursor
              </button>

              <button
                type="button"
                className={toggleButtonClass(settings.highlightLinks)}
                onClick={() => toggleBooleanSetting("highlightLinks")}
              >
                Highlight Links
              </button>
            </div>
          </div>

          {/* PROFILES */}

          <div className="mb-6">
            <p
              className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-gray-500
              "
            >
              Profiles
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => applyProfile("lowVision", setSettings)}
                className={toggleButtonClass(false)}
              >
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <LuEye />
                  Low Vision
                </span>
              </button>

              <button
                type="button"
                onClick={() => applyProfile("dyslexia", setSettings)}
                className={toggleButtonClass(false)}
              >
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <LuLanguages />
                  Dyslexia
                </span>
              </button>
            </div>
          </div>

          {/* READ ALOUD */}

          <div>
            <p
              className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-gray-500
              "
            >
              Read Aloud
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={readPage}
                className={toggleButtonClass(false)}
              >
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <LuVolume2 />
                  Read
                </span>
              </button>

              <button
                type="button"
                onClick={stopReading}
                className={toggleButtonClass(false)}
              >
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <LuVolumeX />
                  Stop
                </span>
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
