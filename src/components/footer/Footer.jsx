"use client";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { navLinks } from "../navbar/navLinks";

const Footer = () => {
  return (
    <footer
      className="
        bg-[linear-gradient(180deg,#FFFFFF_9%,#ECFDF3_41.3996%,#D1FAE5_82%)]
      "
      id="delivers"
    >
      {/* TOP TITLE */}

      <div className="mx-auto w-full max-w-[1400px]">
        <div
          className="
    relative
    overflow-hidden
    border-b
    border-dashed
    border-green-500
    py-10
  "
        >
          {/* TEXT */}

          <h2
            className="
      relative
      z-10

      w-full

      text-center

      text-[70px]
      md:text-[200px]
      lg:text-[260px]
      xl:text-[320px]

      font-black

      leading-[0.9]

      tracking-[7.5]

      text-[var(--secondary-bg)]

      opacity-95

      whitespace-nowrap


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
          </div>

          {/* CENTER */}

          <div
            className="
            md:border-x
            border-dashed
            border-green-500
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
          border-green-500
          text-sm
          text-[var(--primary-text-light)]
        "
        >
          <p>&copy; {new Date().getFullYear()} Stakflo. All rights reserved.</p>

          <p>Terms & Conditions.Privacy Policy.Cookie Settings.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
