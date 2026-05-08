"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { navLinks } from "./navLinks";
import Image from "next/image";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="lg:hidden">
      {/* TOP BAR */}

      <div
        className="
          flex
          items-center
          justify-between
          px-5
          py-5
        "
      >
        <Link
          href="/"
          className="
            text-3xl
            font-bold
            flex items-center gap-2
          "
        >
          <Image
            src="/images/product-stakflo.webp"
            alt="Stakflo Logo"
            width={45}
            height={45}
            priority
            className="object-contain"
          />
          Stakflo
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="
            w-14
            h-14
            rounded-2xl
            bg-[var(--secondary-bg)]
            text-white
            flex
            items-center
            justify-center
            text-3xl
          "
        >
          {open ? <IoClose /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE MENU */}

      {open && (
        <div
          className="
            px-5
            py-10
            min-h-screen
            bg-[var(--primary-bg)]
          "
        >
          <ul
            className="
                space-y-8
              "
          >
            {navLinks.map((item) => (
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
          {/* <button
            className="
              mt-10
             
              py-2
              px-4
              rounded-[20]
              bg-[var(--secondary-bg)]
              text-white
              text-xl
              font-semibold
              mx-auto
            "
          >
            Contact Us
          </button> */}
        </div>
      )}
    </header>
  );
};

export default MobileNavbar;
