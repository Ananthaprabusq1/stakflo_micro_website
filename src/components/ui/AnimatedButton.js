"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa6";

export default function AnimatedButton({
    href,
    text,
    className = "",
    style,
    ...props
}) {
    const baseStyle = `
    group
    relative
    inline-flex
    items-center
    justify-center
    overflow-hidden
    rounded-full
    px-6
    py-3
    font-medium
    transition-all
    duration-300
  `;

    const content = (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="
        flex
        items-center
        gap-2
      "
        >
            {/* TEXT ANIMATION */}

            <div
                className="
          relative
          h-6
          overflow-hidden
        "
            >
                {/* DEFAULT TEXT */}

                <motion.span
                    variants={{
                        rest: {
                            y: 0,
                            opacity: 1,
                        },

                        hover: {
                            y: "-100%",
                            opacity: 0,
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className="
            block
            whitespace-nowrap
          "
                >
                    {text}
                </motion.span>

                {/* HOVER TEXT */}

                <motion.span
                    variants={{
                        rest: {
                            y: "100%",
                            opacity: 0,
                        },

                        hover: {
                            y: 0,
                            opacity: 1,
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className="
            absolute
            left-0
            top-0
            block
            whitespace-nowrap
          "
                >
                    {text}
                </motion.span>
            </div>

            {/* ARROW ANIMATION */}

            <motion.div
                variants={{
                    rest: {
                        x: 0,
                    },

                    hover: {
                        x: 6,
                    },
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="
          flex
          items-center
          justify-center
        "
            >
                <FaArrowRight
                    className="
            text-lg
          "
                />
            </motion.div>
        </motion.div>
    );

    if (href) {
        return (
            <Link
                href={href}
                className={`${baseStyle} ${className}`}
                style={style}
                {...props}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            className={`${baseStyle} ${className}`}
            style={style}
            {...props}
        >
            {content}
        </button>
    );
}