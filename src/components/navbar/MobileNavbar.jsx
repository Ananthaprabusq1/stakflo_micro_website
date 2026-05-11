"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import { navLinks } from "./navLinks";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="lg:hidden relative z-[9999]">
      {/* TOP BAR */}

      <div
        className="
          relative
          z-[10000]

          flex
          items-center
          justify-between

          px-5
          py-5

          bg-[#f5fff7]

          overflow-hidden
        "
      >
        {/* LOGO */}

        <Link
          href="/"
          className="
            flex
            items-center
            gap-2

            text-[32px]
            leading-none
            font-bold
          "
        >
          <Image
            src="/images/product-stakflo.webp"
            alt="Stakflo Logo"
            width={35}
            height={35}
            priority
            className="object-contain shrink-0"
          />

          <span className="text-[var(--secondary-bg)]">Stakflo</span>
        </Link>

        {/* MENU BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="
            shrink-0

            w-14
            h-14

            rounded-[18px]

            bg-[var(--secondary-bg)]

            text-white
            text-3xl

            flex
            items-center
            justify-center
          "
        >
          {open ? <IoClose /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE MENU */}

      {open && (
        <div
          className="
            fixed
            inset-0

            z-[9998]

            px-5
            pt-32
            pb-10

            min-h-screen

            bg-[#f5fff7]

            overflow-y-auto
          "
        >
          <ul className=" flex flex-col gap-2">
            {navLinks.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="
          group

          flex
          items-center
          justify-between

          rounded-[10px]

          border
          border-[#e7f5ea]

          bg-white/70

          px-6
          py-2

          backdrop-blur-xl

          transition-all
          duration-300

          hover:border-green-300
          hover:bg-white
          hover:shadow-[0_10px_30px_rgba(34,197,94,0.08)]
        "
                >
                  <span
                    className="
            text-[18px]
            font-semibold
            tracking-[-0.03em]

            text-[#071019]

            transition-colors
            duration-300

            group-hover:text-green-600
          "
                  >
                    {item.label}
                  </span>

                  <div
                    className="
            flex
            items-center
            justify-center

            w-10
            h-10

            rounded-full

            bg-[#f3fff5]

            text-green-500

            transition-all
            duration-300

            group-hover:translate-x-1
            group-hover:bg-green-500
            group-hover:text-white
          "
                  >
                    →
                  </div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default MobileNavbar;
