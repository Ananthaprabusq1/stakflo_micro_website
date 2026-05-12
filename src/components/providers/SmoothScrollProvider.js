"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith("/blogs")) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      prevent: (node) => node.closest("[data-native-scroll]") !== null,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [pathname]);

  return children;
}
