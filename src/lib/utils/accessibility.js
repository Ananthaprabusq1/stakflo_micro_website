export function readPage() {
    if (typeof window === "undefined") return;

    window.speechSynthesis.cancel();

    const source =
        document.getElementById("main-content") ||
        document.getElementById("site-shell") ||
        document.body;

    const text = source.innerText;

    if (!text.trim()) return;

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang =
        document.documentElement.lang || "en-US";

    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}

export function stopReading() {
    if (typeof window === "undefined") return;

    window.speechSynthesis.cancel();
}

export const applyProfile = (
    profile,
    setSettings
) => {
    if (!setSettings) return;

    if (profile === "lowVision") {
        setSettings((prev) => ({
            ...prev,
            contrast: true,
            highlightLinks: true,
            bigCursor: true,
        }));
    }

    if (profile === "dyslexia") {
        setSettings((prev) => ({
            ...prev,
            dyslexia: true,
        }));
    }

    if (profile === "elderly") {
        setSettings((prev) => ({
            ...prev,
            bigCursor: true,
        }));
    }
};