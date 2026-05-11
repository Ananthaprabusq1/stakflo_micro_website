"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { navLinks } from "./navLinks";
import AnimatedButton from "../ui/AnimatedButton";

const DesktopNavbar = () => {
  const [hideSideItems, setHideSideItems] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldHide = window.scrollY > 1200;

      setHideSideItems((prev) => (prev !== shouldHide ? shouldHide : prev));
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="
        hidden
        lg:block
        mt-4
        z-[999]
      "
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="relative">
          {/* NAVBAR CONTAINER */}

          <div
            className="
              relative
              flex
              items-center
              justify-between
              px-10
              py-6
            "
          >
            {/* LEFT LOGO */}

            <Link
              href="/"
              className={`
                flex
                items-center
                gap-4
                z-10

                transition-all
                duration-500

                ${
                  hideSideItems
                    ? "opacity-0 -translate-x-10 pointer-events-none"
                    : "opacity-100 translate-x-0"
                }
              `}
            >
              <Image
                src="/images/product-stakflo.webp"
                alt="Stakflo Logo"
                width={40}
                height={40}
                priority
                className="object-contain"
              />

              <h3
                className="
                  text-5xl
                  font-bold
                  tracking-tight
                  text-[var(--secondary-bg)]
                "
              >
                Stakflo
              </h3>
            </Link>

            {/* CENTER NAV */}

            <nav
              className="
                fixed
                left-1/2
                top-5
                z-[999]
                -translate-x-1/2
              "
            >
              <ul
                className="
                  flex
                  items-center
                  gap-10
                  rounded-full
                  border
                  border-white/30
                  bg-white/70
                  backdrop-blur-2xl
                  px-10
                  py-3
                  shadow-lg
                  mt-5
                "
              >
                {navLinks
                  .filter((item) => !item.hideDesktop)
                  .map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="
                          relative
                          flex
                          h-6
                          items-center
                          overflow-hidden
                        "
                      >
                        <motion.div
                          initial="rest"
                          whileHover="hover"
                          animate="rest"
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
                              text-[17px]
                              font-medium
                              text-[var(--secondary-bg)]
                            "
                          >
                            {item.label}
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
                              text-[17px]
                              font-medium
                              text-[var(--primary-color)]
                            "
                          >
                            {item.label}
                          </motion.span>
                        </motion.div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>

            {/* RIGHT BUTTON */}

            <div
              className={`
                transition-all
                duration-500

                ${
                  hideSideItems
                    ? "opacity-0 translate-x-10 pointer-events-none"
                    : "opacity-100 translate-x-0"
                }
              `}
            >
              <AnimatedButton
                text="Contact Us"
                href="/contact-us"
                className="btn-glow btn-dark-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopNavbar;
