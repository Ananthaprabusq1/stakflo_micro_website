"use client";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
export default function AnimationCard({
  children,

  animation = "fade-up",

  duration = 0.8,

  delay = 0,

  className = "",

  desktopAnimationOnly = false,
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
    "fade-left-side": {
      initial: {
        opacity: 0,
        x: 0,
        y: -250,
      },

      whileInView: {
        opacity: 1,
        x: -350,
        y: -250,
      },
    },

    "fade-right-side": {
      initial: {
        opacity: 0,
        x: 0,
        y: -280,
      },

      whileInView: {
        opacity: 1,
        x: 350,
        y: -280,
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const isDesktop = useMediaQuery({
    minWidth: 1024,
  });

  const disableAnimation = desktopAnimationOnly && !isDesktop;

  // const selected = animations[animation] || animations["fade-up"];
  const selected = disableAnimation
    ? {
        initial: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        },

        whileInView: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        },
      }
    : animations[animation] || animations["fade-up"];
  return (
    <motion.div
      initial={mounted ? selected.initial : false}
      whileInView={selected.whileInView}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 90,
        damping: 18,
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
