"use client";

import { useEffect } from "react";

import AOS from "aos";

import "aos/dist/aos.css";

export default function AosProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,

      once: false,

      mirror: true,

      offset: 120,

      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      AOS.refreshHard();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return children;
}
