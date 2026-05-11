"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { navLinks } from "./navLinks";
import AnimatedButton from "../ui/AnimatedButton";

const DesktopNavbar = () => {
  return (
    <header
      className="
        hidden
        lg:block
        sticky
        top-0
        z-50

      "
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div
          className="
          relative
          overflow-hidden
          bg-[var(--primary-bg)]
        "
        >
          {/* BACKGROUND GLOW */}

          {/* <div
            className="
            absolute
            left-0
            top-0
            h-full
            w-[320px]
            bg-green-400/30
            blur-3xl
          "
          /> */}

          {/* <div
            className="
            absolute
            right-0
            top-0
            h-full
            w-[320px]
            bg-green-400/30
            blur-3xl
          "
          /> */}

          {/* NAVBAR CONTAINER */}

          <div
            className="
            relative
            flex
            items-center
            justify-between
            px-10
            py-9
          "
          >
            {/* LEFT LOGO */}

            <Link
              href="/"
              className="
              flex
              items-center
              gap-4
              z-10
            "
            >
              <Image
                src="/images/product-stakflo.webp"
                alt="Stakflo Logo"
                width={60}
                height={60}
                priority
                className="object-contain"
              />

              <h2
                className="
                text-5xl
                font-bold
                tracking-tight
                text-[var(--secondary-bg)]
              "
              >
                Stakflo
              </h2>
            </Link>

            {/* CENTER NAV */}

            <nav
              className="
              absolute
              left-1/2
              -translate-x-1/2
            "
            >
              <ul
                className="
                flex
                items-center
                gap-12
                rounded-full
                border
                border-white/30
                bg-green-50
                backdrop-blur-2xl
                px-10
                py-4
                shadow-lg

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
    overflow-hidden
    h-6
    flex
    items-center
  "
                      >
                        <motion.div
                          initial="rest"
                          whileHover="hover"
                          animate="rest"
                          className="
      relative
      overflow-hidden
      h-6
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

            {/* <button
            className="
              flex
              items-center
              gap-3
              rounded-full
              bg-[var(--secondary-bg)]
             px-3 py-2
              text-lg
              font-semibold
              text-white
              shadow-[0px_10px_40px_rgba(20,0,30,0.45)]
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Contact Us
            <FiArrowUpRight className="text-3xl" />
          </button> */}
            <AnimatedButton
              text="Contact Us"
              href="/contact-us"
              className="
    px-3
    py-1
    text-lg
    font-semibold
    text-white



    bg-gradient-to-b
    from-[#2a093d]
    to-[#14001f]

    shadow-[0px_10px_30px_rgba(0,0,0,0.35)]

    hover:from-green-300

    hover:to-green-500

    hover:shadow-[0px_0px_50px_rgba(255,0,200,0.45)]


  "
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopNavbar;
