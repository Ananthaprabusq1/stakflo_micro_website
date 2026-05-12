"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxSection({
  children,
  bgImage,
  speed = 0.3,
  className = "",
}) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ["0%", `${speed * -100}%`]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {bgImage && (
        <motion.div
          style={{
            y,
            backgroundImage: `url(${bgImage})`,
          }}
          className="absolute inset-0 -z-10 bg-cover bg-center"
        />
      )}

      <div className="relative z-10">{children}</div>
    </section>
  );
}
