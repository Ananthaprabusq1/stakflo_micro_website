import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AosProvider from "@/components/animations/AosProvider";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import CookieBanner from "@/components/ui/CookieBanner";
import AccessibilityToolbar from "@/components/accessibility/AccessibilityToolbar";
import "aos/dist/aos.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Stakflo",
    template: "%s | Stakflo",
  },

  description:
    "AI-powered continuous compliance platform that helps organizations stay audit-ready through intelligent automation and continuous monitoring.",

  keywords: [
    "AI compliance",
    "SOC 2",
    "ISO 27001",
    "Compliance automation",
    "Audit readiness",
    "Security platform",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        h-full
        antialiased
      `}
    >
      <body
        suppressHydrationWarning
        className="
          min-h-full
          flex
          flex-col
        "
      >
        <SmoothScrollProvider>
          <AosProvider>
            {/* Accessibility Wrapper */}
            <div id="site-shell">
              <Navbar />

              <main id="main-content" className="flex-1">
                {children}
              </main>

              <CookieBanner />

              <ScrollToTopButton />

              <Footer />
            </div>
            <AccessibilityToolbar />
          </AosProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
