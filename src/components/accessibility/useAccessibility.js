"use client";

import { useState, useEffect } from "react";

const ACCESSIBILITY_STORAGE_KEY = "a11y-settings-v2";

export const defaultAccessibilitySettings = {
    zoom: 1,
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

    const zoom = Number(next.zoom);
    next.zoom = Number.isFinite(zoom) ? Math.min(1.6, Math.max(0.7, zoom)) : 1;
    next.contrast = Boolean(next.contrast);
    next.grayscale = Boolean(next.grayscale);
    next.dyslexia = Boolean(next.dyslexia);
    next.bigCursor = Boolean(next.bigCursor);
    next.highlightLinks = Boolean(next.highlightLinks);
    return next;
}

export default function useAccessibility() {
    const [settings, setSettings] = useState(() => {
        if (typeof window === "undefined") return defaultAccessibilitySettings;

        try {
            const saved = localStorage.getItem(ACCESSIBILITY_STORAGE_KEY);
            return saved
                ? sanitizeSettings(JSON.parse(saved))
                : defaultAccessibilitySettings;
        } catch {
            return defaultAccessibilitySettings;
        }
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        const siteShell = document.getElementById("site-shell");
        const root = document.documentElement;

        localStorage.setItem(ACCESSIBILITY_STORAGE_KEY, JSON.stringify(settings));

        if (siteShell) {
            siteShell.style.zoom = String(settings.zoom);
        }
        root.style.fontSize = "";

        siteShell?.classList.toggle("high-contrast", settings.contrast);
        siteShell?.classList.toggle("grayscale", settings.grayscale);
        siteShell?.classList.toggle("dyslexia-font", settings.dyslexia);
        root.classList.toggle("big-cursor", settings.bigCursor);
        document.body.classList.toggle("big-cursor", settings.bigCursor);
        siteShell?.classList.toggle("highlight-links", settings.highlightLinks);
    }, [settings]);

    return {
        settings,
        setSettings: (value) =>
            setSettings((current) =>
                sanitizeSettings(typeof value === "function" ? value(current) : value),
            ),
    };
}
