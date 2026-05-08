"use client";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { navLinks } from "../navbar/navLinks";

const Footer = () => {
  return (
    <footer
      className="
        bg-[var(--primary-bg)]
        border-t
        border-dashed
        border-pink-300
        mt-20
      "
    >
      {/* TOP TITLE */}

      {/* <div
        className="
          overflow-hidden
          border-b
          border-dashed
          border-pink-300
        "
      >
        <h2
          className="
            text-[120px]
            md:text-[180px]
            lg:text-[240px]
            font-bold
            leading-none
            text-[var(--secondary-bg)]
            opacity-95
            whitespace-nowrap
            text-center
          "
        >
          Stakflo
        </h2>
      </div> */}
      <div
        className="
    relative
    overflow-hidden
    border-b
    border-dashed
    border-pink-300
    py-10
  "
      >
        {/* BACKGROUND GLOW */}

        <div
          className="
      absolute
      inset-0
      bg-green-400/20
      blur-3xl
      opacity-60
    "
        />

        {/* TEXT */}

        <h2
          className="
      relative
      z-10

      w-full

      text-center

      text-[90px]
      sm:text-[140px]
      md:text-[200px]
      lg:text-[260px]
      xl:text-[320px]

      font-black

      leading-[0.9]

      tracking-[-0.06em]

      text-[var(--secondary-bg)]

      opacity-95

      whitespace-nowrap

      drop-shadow-[0px_0px_20px_rgba(60,0,80,0.45)]

      select-none
    "
        >
          Stakflo
        </h2>
      </div>

      {/* FOOTER CONTENT */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
          px-6
          md:px-10
          lg:px-16
          py-12
        "
      >
        {/* LEFT */}

        <div>
          <div
            className="
              flex
              items-center
              gap-3
              mb-5
            "
          >
            {/* <div
              className="
                w-12
                h-12
                rounded-xl
                bg-[var(--primary-color)]
              "
            /> */}
            <Image
              src="/images/product-stakflo.webp"
              alt="Stakflo Logo"
              width={60}
              height={60}
              priority
              className="object-contain"
            />

            <h3
              className="
                text-2xl
                font-bold
                text-[var(--secondary-bg)]
              "
            >
              Stakflo
            </h3>
          </div>

          <p
            className="
              text-[var(--primary-text-light)]
              leading-relaxed
              max-w-[300px]
            "
          >
            AI-powered compliance workflows that help teams stay audit-ready,
            improve collaboration, and scale efficiently.
          </p>

          {/* SOCIALS */}

          {/* <div
            className="
              flex
              items-center
              gap-4
              mt-8
            "
          >
            <Link
              href="/"
              className="
                w-10
                h-10
                rounded-lg
                border
                border-pink-300
                flex
                items-center
                justify-center
                text-pink-500
                hover:bg-pink-500
                hover:text-white
                transition-all
              "
            >
              <FaLinkedin />
            </Link>

            <Link
              href="/"
              className="
                w-10
                h-10
                rounded-lg
                border
                border-pink-300
                flex
                items-center
                justify-center
                text-pink-500
                hover:bg-pink-500
                hover:text-white
                transition-all
              "
            >
              <FaXTwitter />
            </Link>

            <Link
              href="/"
              className="
                w-10
                h-10
                rounded-lg
                border
                border-pink-300
                flex
                items-center
                justify-center
                text-pink-500
                hover:bg-pink-500
                hover:text-white
                transition-all
              "
            >
              <FaInstagram />
            </Link>
          </div> */}
        </div>

        {/* CENTER */}

        <div
          className="
            md:border-x
            border-dashed
            border-pink-300
            md:px-10
          "
        >
          <h3
            className="
              text-xl
              font-semibold
              mb-6
              text-[var(--secondary-bg)]
            "
          >
            Quick Pages
          </h3>

          <ul className="space-y-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="
                    text-md
                    font-medium
                    text-[var(--primary-text-light)]
                  "
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}

        <div>
          <h3
            className="
              text-xl
              font-semibold
              mb-6
              text-[var(--secondary-bg)]
            "
          >
            Contact Links
          </h3>

          <ul className="space-y-4">
            <li>+91 98765-43210</li>

            <li>contact@stakflo.com</li>

            <li>Suite 210, California, NY</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}

      <div
        className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
          px-6
          md:px-10
          lg:px-16
          py-5
          border-t
          border-dashed
          border-pink-300
          text-sm
          text-[var(--primary-text-light)]
        "
      >
        <p>© 2026 Stakflo. All rights reserved.</p>

        <p>Designed with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
