import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AosProvider from "@/components/animations/AosProvider";
import "aos/dist/aos.css";
// import Navbar from "@/components/navbar/Navbar";
// import Footer from "@/components/footer/Footer";

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

export default function RootLayout({
  children,
}) {
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
      > <AosProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </AosProvider>
      </body>
    </html >
  );
}