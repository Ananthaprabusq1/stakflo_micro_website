"use client";

import { useEffect, useRef, useState } from "react";
import {
  LuEye,
  LuLanguages,
  LuRotateCcw,
  LuVolume2,
  LuVolumeX,
} from "react-icons/lu";
import {
  applyProfile,
  readPage,
  stopReading,
} from "../../../lib/utils/accessibility";
import useAccessibility, {
  defaultAccessibilitySettings,
} from "./useAccessibility";
import { FaUniversalAccess } from "react-icons/fa6";

export default function AccessibilityToolbar() {
  const { settings, setSettings } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);
  const panelId = "accessibility-settings-panel";
  const containerRef = useRef(null);

  function toggleBooleanSetting(key) {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  useEffect(() => {
    if (typeof document === "undefined") return;

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  return (
    <div ref={containerRef}>
      <button
        type="button"
        className="a11y-button micro-press"
        aria-label="Open accessibility settings"
        title="Accessibility settings"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <FaUniversalAccess aria-hidden="true" />
      </button>

      {isOpen ? (
        <section
          id={panelId}
          className="a11y-panel"
          aria-label="Accessibility settings"
        >
          <div className="a11y-panel__header">
            <h2>Accessibility</h2>
            <button
              type="button"
              className="a11y-icon-button"
              aria-label="Reset accessibility settings"
              onClick={() => setSettings(defaultAccessibilitySettings)}
            >
              <LuRotateCcw aria-hidden="true" />
            </button>
          </div>

          <div className="a11y-panel__section">
            <p className="a11y-panel__label">Text size</p>
            <div className="a11y-zoom-row">
              <button
                type="button"
                className="a11y-control"
                onClick={() =>
                  setSettings((prev) => ({ ...prev, zoom: prev.zoom - 0.1 }))
                }
              >
                A-
              </button>
              <span className="a11y-zoom-value">
                {Math.round(settings.zoom * 100)}%
              </span>
              <button
                type="button"
                className="a11y-control "
                onClick={() =>
                  setSettings((prev) => ({ ...prev, zoom: prev.zoom + 0.1 }))
                }
              >
                A+
              </button>
            </div>
          </div>

          <div className="a11y-panel__section">
            <p className="a11y-panel__label">Display</p>
            <div className="a11y-grid">
              <button
                type="button"
                className="a11y-control"
                aria-pressed={settings.contrast}
                onClick={() => toggleBooleanSetting("contrast")}
              >
                High contrast
              </button>
              <button
                type="button"
                className="a11y-control"
                aria-pressed={settings.grayscale}
                onClick={() => toggleBooleanSetting("grayscale")}
              >
                Grayscale
              </button>
              <button
                type="button"
                className="a11y-control"
                aria-pressed={settings.dyslexia}
                onClick={() => toggleBooleanSetting("dyslexia")}
              >
                Reading font
              </button>
              <button
                type="button"
                className="a11y-control responsive-lg-only"
                aria-pressed={settings.bigCursor}
                onClick={() => toggleBooleanSetting("bigCursor")}
              >
                Large cursor
              </button>
              <button
                type="button"
                className="a11y-control"
                aria-pressed={settings.highlightLinks}
                onClick={() => toggleBooleanSetting("highlightLinks")}
              >
                Highlight links
              </button>
            </div>
          </div>

          <div className="a11y-panel__section">
            <p className="a11y-panel__label">Profiles</p>
            <div className="a11y-grid a11y-grid--profiles">
              <button
                type="button"
                className="a11y-control"
                onClick={() => applyProfile("lowVision", setSettings)}
              >
                <LuEye aria-hidden="true" />
                <span>Low vision</span>
              </button>
              <button
                type="button"
                className="a11y-control"
                onClick={() => applyProfile("dyslexia", setSettings)}
              >
                <LuLanguages aria-hidden="true" />
                <span>Dyslexia</span>
              </button>
            </div>
          </div>

          <div className="a11y-panel__section">
            <p className="a11y-panel__label">Read aloud</p>
            <div className="a11y-grid a11y-grid--profiles">
              <button type="button" className="a11y-control" onClick={readPage}>
                <LuVolume2 aria-hidden="true" />
                <span>Read page</span>
              </button>
              <button
                type="button"
                className="a11y-control"
                onClick={stopReading}
              >
                <LuVolumeX aria-hidden="true" />
                <span>Stop</span>
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
