"use client";

import { motion } from "framer-motion";

export default function AnimationCard({
  children,

  animation = "fade-up",

  duration = 0.8,

  delay = 0,

  className = "",
}) {
  const animations = {
    "fade-up": {
      initial: {
        opacity: 0,
        y: 80,
      },

      whileInView: {
        opacity: 1,
        y: 0,
      },
    },

    "fade-down": {
      initial: {
        opacity: 0,
        y: -80,
      },

      whileInView: {
        opacity: 1,
        y: 0,
      },
    },

    "fade-left": {
      initial: {
        opacity: 0,
        x: -80,
      },

      whileInView: {
        opacity: 1,
        x: 0,
      },
    },

    "fade-right": {
      initial: {
        opacity: 0,
        x: 80,
      },

      whileInView: {
        opacity: 1,
        x: 0,
      },
    },

    "zoom-in": {
      initial: {
        opacity: 0,
        scale: 0.7,
      },

      whileInView: {
        opacity: 1,
        scale: 1,
      },
    },

    "zoom-out": {
      initial: {
        opacity: 0,
        scale: 1.3,
      },

      whileInView: {
        opacity: 1,
        scale: 1,
      },
    },
  };

  const selected = animations[animation] || animations["fade-up"];

  return (
    <motion.div
      initial={selected.initial}
      whileInView={selected.whileInView}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
// card animation use this

// fade-up
// fade-down
// fade-left
// fade-right

// zoom-in
// zoom-out

// flip-left
// flip-right
// flip-up
// flip-down

// slide-up
// slide-left
// slide-right
