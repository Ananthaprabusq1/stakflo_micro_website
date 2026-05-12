"use client";

import { useState, useEffect } from "react";

const ACCESSIBILITY_STORAGE_KEY = "a11y-settings-v2";

export const defaultAccessibilitySettings = {
    zoom: 100,
    contrast: false,
    grayscale: false,
    dyslexia: false,
    bigCursor: false,
    highlightLinks: false,
};

function sanitizeSettings(value) {
    const next = {
        ...defaultAccessibilitySettings,
        ...(value && typeof value === "object" ? value : {}),
    };

    next.zoom = Math.min(
        130,
        Math.max(90, Number(next.zoom) || 100)
    );

    next.contrast = Boolean(next.contrast);
    next.grayscale = Boolean(next.grayscale);
    next.dyslexia = Boolean(next.dyslexia);
    next.bigCursor = Boolean(next.bigCursor);
    next.highlightLinks = Boolean(next.highlightLinks);

    return next;
}

export default function useAccessibility() {
    const [settings, setSettings] = useState(() => {
        if (typeof window === "undefined") {
            return defaultAccessibilitySettings;
        }

        try {
            const saved = localStorage.getItem(
                ACCESSIBILITY_STORAGE_KEY
            );

            return saved
                ? sanitizeSettings(JSON.parse(saved))
                : defaultAccessibilitySettings;
        } catch {
            return defaultAccessibilitySettings;
        }
    });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const siteShell =
            document.getElementById("site-shell");

        localStorage.setItem(
            ACCESSIBILITY_STORAGE_KEY,
            JSON.stringify(settings)
        );

        /* SAFE ZOOM */
        document.documentElement.style.fontSize = `${settings.zoom}%`;

        siteShell?.classList.toggle(
            "high-contrast",
            settings.contrast
        );

        siteShell?.classList.toggle(
            "grayscale",
            settings.grayscale
        );

        siteShell?.classList.toggle(
            "dyslexia-font",
            settings.dyslexia
        );

        document.body.classList.toggle(
            "big-cursor",
            settings.bigCursor
        );

        siteShell?.classList.toggle(
            "highlight-links",
            settings.highlightLinks
        );
    }, [settings]);

    return {
        settings,

        setSettings: (value) =>
            setSettings((current) =>
                sanitizeSettings(
                    typeof value === "function"
                        ? value(current)
                        : value
                )
            ),
    };
}