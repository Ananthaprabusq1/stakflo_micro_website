"use client";
import Image from "next/image";
import { useState } from "react";
import AnimationCard from "@/components/animations/AnimationCard";
import ActivityStackCards from "@/components/ui/ActivityStackCards";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ScrollText from "@/components/ui/ScrollText";
import PortalRingCard from "@/components/ui/PortalRingCard";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCircleCheck } from "react-icons/lu";
import { motion } from "framer-motion";

import {
  FaSlack,
  FaJira,
  FaGithub,
  FaHubspot,
  FaDropbox,
} from "react-icons/fa";

import { SiNotion, SiZendesk } from "react-icons/si";
import ParallaxSection from "@/components/ui/ParallaxSection";

const cards = [
  {
    id: 1,
    title: "Operational Clarity",
    description:
      "Gain clear visibility and control across workflows with transparency.",
  },

  {
    id: 2,
    title: "Accelerated Execution",
    description: "Execute projects faster with streamlined automation systems.",
  },

  {
    id: 3,
    title: "Scalable Performance",
    description: "Scale infrastructure efficiently without losing performance.",
  },
];

const floatingCards = [
  {
    title: "AI Policy Intelligence  ",
    className: "left-[2%] top-[18%]",
  },
  {
    title: "Smart Vendor Assessments",
    className: "left-[2%] bottom-[15%]",
  },
  {
    title: "Automated Evidence Collection",
    className: "right-[2%] top-[18%]",
  },
  {
    title: "Continuous Audit Readiness ",
    className: "right-[2%] bottom-[15%]",
  },
];
export default function Home() {
  const [active, setActive] = useState(0);

  return (
    <main>
      {/* herosection */}
      <ParallaxSection>
        <section className="  relative isolate min-h-screen overflow-hidden bg-[#fbfffa] px-2  sm:px-8 sm:py-12 lg:px-10   lg:py-0 ">
          {/* BACKGROUND GLOW */}
          <div className="absolute  left-0  top-0  h-full  w-[320px]  bg-green-400/30  blur-3xl z-50" />

          <div className="absolute  right-0  top-0  h-full  w-[320px]  bg-green-400/30  blur-3xl  z-50" />
          <div
            className=" pointer-events-none absolute inset-0 z-0 overflow-hidden "
            aria-hidden="true"
          >
            <Image
              src="/images/leftside.png"
              alt=""
              width={840}
              height={900}
              priority
              className=" absolute bottom-[-9%] left-[-62%] h-[58%] w-auto max-w-none object-contain opacity-95 sm:left-[-38%] sm:h-[72%] md:left-[-24%] md:h-[82%] lg:bottom-[-16%] lg:left-[-11%] lg:h-[118%] xl:left-[-2%] 2xl:left-0 "
            />

            <Image
              src="/images/rightside.png"
              alt=""
              width={840}
              height={900}
              priority
              className=" absolute bottom-[-9%] right-[-62%] h-[58%] w-auto max-w-none object-contain opacity-95 sm:right-[-38%] sm:h-[72%] md:right-[-24%] md:h-[82%] lg:bottom-[-16%] lg:right-[-11%] lg:h-[118%] xl:right-[-2%] 2xl:right-0 "
            />

            <div className=" absolute inset-x-[6%] top-0 h-32 rounded-full lg:bg-white/80 bg-green-200 blur-3xl sm:h-44 " />
          </div>

          <div className=" relative z-10 mx-auto flex min-h-[inherit] max-w-[1120px] flex-col items-center justify-center text-center lg:pt-[140px] lg:pb-20 ">
            <div className="lg:mt-[30px] mb-8 flex w-full max-w-[300px] items-center overflow-hidden rounded-full border border-[#edf2eb] bg-white/75  text-xs font-bold uppercase text-[#7f7b85] shadow-[0_12px_35px_rgba(18,5,28,0.06)] backdrop-blur-xl sm:text-sm lg:mb-10 ">
              <span className="text-md rounded-full btn-green-light pointer-events-none  px-3 py-[6px]  text-white font-medium ">
                AI
              </span>
              <ScrollText
                items={[
                  "INTELLIGENT .",
                  "AUTOMATED .",
                  "CONTINUOUS .",
                  "WITH STAKFLO .",
                ]}
                speed="10s"
                direction="left"
                containerClassName=" w-[min(17rem,calc(100vw-8rem))] sm:w-80 "
                className=" items-center text-black font-semibold"
              ></ScrollText>
            </div>

            <h1 className="max-w-[900px] font-[600] lg:text-[65px] md:text-[40px] text-[25px] lg:text-center lg:leading-[86px] tracking-tight text-[#16071B]">
              The AI Native Compliance Infrastructure Built for Scale.
            </h1>

            <p className=" mt-8 max-w-[600px] text-base font-medium leading-[2] text-[#5C4F5E] lg:text-lg text-md ">
              Manual evidence chasing. Scattered policies. Last-minute audit
              scrambles. Multiple frameworks pulling your team in every
              direction.
            </p>

            <AnimatedButton
              href="/contact-us"
              text="Stakflo eliminates it"
              className="  mt-12 min-w-[230px]  px-8 py-4 text-lg font-bold text-white    sm:min-w-[250px] sm:text-xl  btn-green-glow btn-green-light "
            />
          </div>
        </section>
      </ParallaxSection>

      {/* dashboard section */}
      <ParallaxSection>
        <section className="  relative isolate overflow-hidden bg-[#fbfffa] px-5   lg:px-10 lg:py-20 py-10 ">
          <div
            className="
            relative
            z-10
            mx-auto
            max-w-[1320px]
          "
          >
            <PortalRingCard
              className="
    w-full
    max-w-[1200px]
    mx-auto
  "
              innerClassName=""
            >
              <div
                className="
  mx-auto
  overflow-hidden
  rounded-[24px]

  border-[10px]
  border-[#c8f0cf]

  bg-white

  shadow-[0_30px_90px_rgba(57,181,74,0.22)]

  sm:rounded-[30px]
  sm:border-[14px]

  lg:rounded-[36px]
  lg:border-[22px]

  max-w-[1300px]
"
              >
                <Image
                  src="/images/Stakflo-Dashboard.webp"
                  alt="Stakflo dashboard interface"
                  width={1920}
                  height={900}
                  priority
                  className="
                block
                h-auto
                w-full
              "
                />
              </div>
            </PortalRingCard>
          </div>
        </section>
      </ParallaxSection>

      {/* activity card section */}
      <ParallaxSection>
        <section className="bg-[#fbfffa]  overflow-x-hidden mb-10" id="company">
          <div className="w-full overflow-hidden isolate lg:max-w-[1300px] mx-auto  grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 p-5 ">
            {/* LEFT CARD */}
            <AnimationCard animation="fade-right" className="h-full ">
              <div className=" relative overflow-hidden rounded-[20px] border border-dashed   border-green-500 bg-green-50 p-8  md:p-10  min-h-[560px] ">
                {/* BACKGROUND GLOW */}
                <div className="  absolut  right-[-120px  top-[100px]  h-[420px  w-[420px]  rounded-full  bg-green-300/20  blur-3xl " />
                {/* ICON */}

                <div
                  className="
          relative
          z-10

          mb-10

          flex
          items-center
          justify-center

          h-16
          w-16

          rounded-[20px]

         bg-white
        "
                >
                  <IoSettingsOutline className="text-4xl text-green-400" />
                </div>

                {/* CONTENT */}

                <div className="relative z-10">
                  <h2
                    className="
            mb-5

            text-2xl
            md:text-3xl
            lg:text-[38px]

            font-bold


            text-[#1a0826]
          "
                  >
                    AI-Powered Everything
                  </h2>

                  <p
                    className="
            max-w-[620px]

            text-base
            md:text-lg

            leading-[1.8]

            text-[#655b69]
          "
                  >
                    From risk scoring and policy generation to vendor
                    assessments and evidence collection, every workflow is
                    intelligent, automated, and continuously improving.
                  </p>
                </div>

                {/* INNER CARD */}
                <div className=" relative ">
                  <AnimationCard
                    animation="fade-up"
                    delay={0.2}
                    className="
          absolute top-19
          left-0
          right-0
        "
                  >
                    <ActivityStackCards
                      cards={[
                        {
                          activities: [
                            {
                              time: "09:46",

                              text: "Payment received from John Doe",

                              dotColor: "border-blue-400",
                            },
                          ],
                        },

                        {
                          activities: [
                            {
                              time: "10:12",

                              text: "New sale recorded",

                              tag: "#ML-3467",

                              highlight: true,

                              dotColor: "border-cyan-400",
                            },
                          ],
                        },

                        {
                          activities: [
                            {
                              time: "11:20",

                              text: "Invoice generated",

                              tag: "#INV-920",

                              dotColor: "border-purple-400",
                            },
                          ],
                        },
                      ]}
                    />
                  </AnimationCard>
                </div>
              </div>
            </AnimationCard>
            {/* RIGHT CARD */}
            <AnimationCard animation="fade-left" className="h-full">
              <div
                className="
        relative
        overflow-hidden

        rounded-[20px]

        border
        border-dashed
        border-green-500 bg-green-50

        p-8
        md:p-10

        min-h-[560px]
      "
              >
                {/* GLOW */}

                <div
                  className="
          absolute
          bottom-[-80px]
          right-[-80px]

          h-[280px]
          w-[280px]

          rounded-full

          bg-green-300/20

          blur-3xl
        "
                />

                {/* CONTENT */}

                <div className="relative z-10">
                  <h2
                    className="
            mb-8

            text-[38px]
            md:text-[40px]
            lg:text-[60px]

            font-bold

            leading-none


            text-[#18041f]
          "
                  >
                    2x Faster
                  </h2>

                  <h3
                    className="
            mb-6

            text-xl
            md:text-2xl

            font-bold


            text-[#1f1026]
          "
                  >
                    Compliance Management, Centralized
                  </h3>

                  <p
                    className="
            mb-12

            text-base
            md:text-lg

            leading-[1.8]

            text-[#6c6170]
          "
                  >
                    Stakflo brings all your compliance evidence under one roof
                    organized, mapped to controls, and ready to share the moment
                    your audit begins.
                  </p>

                  {/* LIST */}

                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <LuCircleCheck
                        className="
                flex
                h-7
                w-7
                items-center
                justify-center
                font-thin
              "
                      />

                      <p
                        className="
                text-base
                text-[#352a39]
              "
                      >
                        Evidence mapped to controls and frameworks
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <LuCircleCheck
                        className="
                flex
                h-7
                w-7
                items-center
                justify-center
                font-thin
              "
                      />

                      <p
                        className="
                text-base


                text-[#352a39]
              "
                      >
                        Policies, logs, screenshots, reports and access reviews
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <LuCircleCheck
                        className="
                flex
                h-7
                w-7
                items-center
                justify-center
                font-thin
              "
                      />

                      <p
                        className="
                text-base


                text-[#352a39]
              "
                      >
                        Secure auditor access with built in collaboration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationCard>
          </div>
        </section>
      </ParallaxSection>

      {/* result card section */}
      <ParallaxSection>
        <section className="w-full bg-green-50 py-24 overflow-hidden mb-10">
          <div className="lg:max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT CONTENT */}
              <div>
                <h1 className="text-[52px] leading-[1.05] font-bold text-[#130018] max-w-[580px]">
                  Drive Better Results
                  <br />
                  with Zenvique.
                </h1>

                <p className="mt-8 text-[20px] leading-[38px] text-[#5f5664] max-w-[620px]">
                  Zenvique empowers teams to simplify operations, accelerate
                  execution, and consistently high-impact results.
                </p>

                {/* FEATURES */}
                <div className="mt-10 space-y-5" id="features">
                  {cards.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setActive(index)}
                      className="
    group
    relative

    flex
    items-center
    gap-4

    w-full

    rounded-[18px]

    px-4
    py-3

    transition-all
    duration-500

    hover:bg-white/70
  "
                    >
                      {/* ACTIVE BACKGROUND */}

                      <div
                        className={`
      absolute
      inset-0

      rounded-[18px]

      transition-all
      duration-500

      ${
        active === index
          ? "bg-white shadow-[0_8px_30px_rgba(34,197,94,0.08)] border border-[#dcfce7]"
          : "bg-transparent border border-transparent"
      }
    `}
                      />

                      {/* LEFT LINE */}

                      <div
                        className={`
      relative
      z-10

      w-[3px]

      rounded-full

      transition-all
      duration-500

      ${
        active === index
          ? "h-12 bg-gradient-to-b from-[#22c55e] to-[#16a34a]"
          : "h-8 bg-[#dcfce7]"
      }
    `}
                      />

                      {/* ICON */}

                      <div
                        className={`
      relative
      z-10

      flex
      items-center
      justify-center

      w-12
      h-12

      rounded-[14px]

      transition-all
      duration-500

      ${
        active === index
          ? `
            bg-gradient-to-br
            from-[#22c55e]
            to-[#16a34a]

            text-white

            scale-105

            shadow-[0_8px_20px_rgba(34,197,94,0.22)]
          `
          : `
            bg-[#f0fdf4]

            text-[#22c55e]

            group-hover:bg-[#dcfce7]
          `
      }
    `}
                      >
                        <span className="text-sm font-semibold">
                          {index + 1}
                        </span>
                      </div>

                      {/* TEXT */}

                      <div className="relative z-10">
                        <h3
                          className={`
        text-[17px]
        font-semibold

        tracking-[-0.02em]

        transition-all
        duration-500

        ${active === index ? "text-[#052e16]" : "text-[#4b6353]"}
      `}
                        >
                          {item.title}
                        </h3>

                        <p
                          className={`
        mt-[2px]

        text-[13px]

        transition-all
        duration-500

        ${active === index ? "text-[#16a34a]" : "text-[#94a3b8]"}
      `}
                        >
                          Smart workflow optimization
                        </p>
                      </div>

                      {/* RIGHT ARROW */}

                      <div
                        className={`
      relative
      z-10

      ml-auto

      flex
      items-center
      justify-center

      w-8
      h-8

      rounded-full

      text-sm

      transition-all
      duration-500

      ${
        active === index
          ? "bg-[#dcfce7] text-[#16a34a]"
          : "bg-transparent text-[#94a3b8] opacity-0 group-hover:opacity-100"
      }
    `}
                      >
                        →
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT CARD */}
              {/* RIGHT CARD */}
              <div className="relative flex justify-center items-center min-h-[380px] lg:min-h-[620px] isolate mt-10 lg:mt-0 px-4 sm:px-6">
                {/* BACK DASHED CARD 1 */}
                <div
                  key={`back-left-${active}`}
                  className="
      absolute

      w-[95%]
      max-w-[540px]

      h-[360px]
      sm:h-[430px]
      lg:h-[610px]

      rounded-[26px]
      lg:rounded-[32px]

      border
      border-dashed
      border-[#9fe3b5]

      opacity-100

      pointer-events-none

      animate-backLeft
    "
                />

                {/* BACK DASHED CARD 2 */}
                <div
                  key={`back-right-${active}`}
                  className="
      absolute

      w-[95%]
      max-w-[540px]

      h-[360px]
      sm:h-[430px]
      lg:h-[610px]

      rounded-[26px]
      lg:rounded-[32px]

      border
      border-dashed
      border-[#7fd89d]

      opacity-70

      pointer-events-none

      animate-backRight
    "
                />

                {/* FRONT CARD */}
                <div
                  key={active}
                  className="
      relative
      z-20

      w-full
      max-w-[500px]

      rounded-[24px]
      lg:rounded-[30px]

      bg-white

      p-3
      sm:p-4

      shadow-[0_10px_40px_rgba(16,185,129,0.10)]

      animate-frontCard
    "
                >
                  {/* INNER CARD */}
                  <div
                    className="
        bg-[#f6fff8]

        border
        border-[#d8f3df]

        rounded-[20px]
        lg:rounded-[26px]

        p-4
        sm:p-5
        lg:p-7
      "
                  >
                    {/* HEADER */}

                    <div className="flex items-center justify-between">
                      <h3
                        className="
            text-[16px]
            sm:text-[18px]
            lg:text-[22px]

            font-semibold

            text-[#123524]
          "
                      >
                        {cards[active].title}
                      </h3>

                      <button className="text-[20px] lg:text-[24px] text-[#4f7a61]">
                        ⋮
                      </button>
                    </div>

                    {/* GRAPH */}

                    <div
                      className="
          mt-5
          lg:mt-8

          h-[120px]
          sm:h-[150px]
          lg:h-[210px]

          rounded-[18px]
          lg:rounded-[24px]

          bg-[#dcfce7]

          relative
          overflow-hidden
        "
                    >
                      <svg
                        viewBox="0 0 500 200"
                        className="absolute inset-0 w-full h-full"
                      >
                        <path
                          d="M0 130 C60 160, 100 70, 170 110 C240 150, 260 40, 340 90 C400 130, 430 80, 500 110"
                          fill="none"
                          stroke="#16a34a"
                          strokeWidth="4"
                        />
                      </svg>
                    </div>

                    {/* LINES */}

                    <div className="mt-5 lg:mt-8 space-y-3">
                      <div className="h-[10px] lg:h-[14px] rounded-full bg-[#bbf7d0] w-full" />

                      <div className="h-[10px] lg:h-[14px] rounded-full bg-[#bbf7d0] w-[74%]" />
                    </div>
                  </div>

                  {/* DESCRIPTION */}

                  <p
                    className="
        mt-5
        lg:mt-8

        px-1

        text-[13px]
        sm:text-[14px]
        lg:text-[17px]

        leading-[24px]
        sm:leading-[28px]
        lg:leading-[34px]

        text-[#4b6353]
      "
                  >
                    {cards[active].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* ai grc arrow section */}
      <ParallaxSection>
        <div className="mx-auto  w-full max-w-[1300px] px-5 sm:px-8 lg:px-0">
          <section className="relative isolate min-h-[420px] overflow-hidden rounded-[30px] px-4 py-14 sm:rounded-[36px] sm:px-8 lg:min-h-[820px] lg:px-12 lg:py-20">
            {/* Background layer */}
            <div
              className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
              aria-hidden="true"
            >
              <div className="absolute inset-x-0 top-0 h-[260px] bg-[linear-gradient(180deg,#4ade80_0%,#86efac_100%)] blur-[60px]" />
              <ScrollText
                items={["AI GRC Platform for Compliance Teams"]}
                speed="20s"
                direction="left"
                containerClassName="absolute left-0 right-0 top-20 sm:top-24 lg:top-28"
                className="items-center gap-10 text-[42px] sm:text-[72px]  md:text-[100px] lg:text-[140px] font-bold uppercase leading-none"
              />
            </div>

            {/* MAIN AREA */}
            <div
              className="
          relative
          mx-auto
          mt-24

          h-[320px]
sm:h-[460px]
lg:h-[760px]
          w-full
          max-w-[1400px]
        "
            >
              {/* ---------------- LEFT TOP LINE ---------------- */}
              <div className="absolute left-[170px] top-[265px] z-0 hidden lg:block">
                {/* arrow */}
                <div className="absolute left-[-76px] top-[-20px] text-[#8e8e8e] text-[18px]">
                  ↑
                </div>

                {/* vertical */}
                <div className="ml-[-70px] h-[90px] w-0 border-l-2 border-dashed border-[#8e8e8e]" />

                {/* curve */}
                <div className="relative ml-[-70px] mt-[-2.5px] h-[24px] w-[24px]">
                  <div className=" absolute left-0 top-0 h-full w-full rounded-bl-[20px] border-b-2 border-l-2 border-dashed border-[#8e8e8e] " />
                </div>

                {/* horizontal */}
                <div className="ml-[-48px] mt-[-2px] h-0 w-[250px] border-t-2 border-dashed border-[#8e8e8e]" />
              </div>
              {/* ---------------- LEFT BOTTOM LINE ---------------- */}
              <div className="absolute left-[170px] top-[420px] z-0 hidden lg:block">
                {/* horizontal */}
                <div className="ml-[27px] h-0 w-[150px] border-t-2 border-dashed border-[#8e8e8e]" />

                {/* curve */}
                <div className="relative ml-[0px] h-[24px] mt-[-0.5px] w-[24px]">
                  <div className=" absolute left-0 top-0 h-full w-full rounded-tl-[20px] border-l-2 border-t-2 border-dashed border-[#8e8e8e] " />
                </div>

                {/* vertical down */}
                <div className="ml-[0px] h-[70px] w-0 border-l-2 border-dashed border-[#8e8e8e]" />

                {/* arrow */}
                <div className="ml-[-5px] mt-[-5px] text-[#8e8e8e] text-[18px]">
                  ↓
                </div>
              </div>
              {/* ---------------- RIGHT TOP LINE ---------------- */}
              <div className="absolute right-[170px] top-[265px] z-0 hidden lg:block">
                <div className="absolute left-[269px] top-[-18px] text-[#8e8e8e] text-[18px]">
                  ↑
                </div>

                <div className="ml-[274px] h-[90px] w-0 border-r-2 border-dashed border-[#8e8e8e]" />

                <div className="relative ml-[251px] mt-[-1.5px] h-[24px] w-[24px]">
                  <div className="  absolute  right-0  bottom-[-2px]  h-full  w-full  rounded-br-[20px]  border-r-2  border-b-2  border-dashed  border-[#8e8e8e]   " />
                </div>

                <div className="h-0 w-[250px] border-t-2 border-dashed border-[#8e8e8e] " />
              </div>
              {/* ---------------- RIGHT BOTTOM LINE ---------------- */}
              <div className="absolute right-[99px] top-[420px] z-0 hidden lg:block">
                <div className="h-0 w-[250px] border-t-2 border-dashed border-[#8e8e8e]" />

                <div className="relative ml-[253px] mt-[-1.5px] h-[24px] w-[24px]">
                  <div className=" absolute right-0 top-0 h-full w-full rounded-tr-[20px] border-r-2 border-t-2 border-dashed border-[#8e8e8e]" />
                </div>

                <div className="ml-[275px] h-[70px] w-0 border-r-2 border-dashed border-[#8e8e8e]" />

                <div className="ml-[269px] mt-[-4px] text-[#8e8e8e] text-[18px]">
                  ↓
                </div>
              </div>
              {/* CENTER IMAGE */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="
            absolute
            left-1/2
            top-1/2
            z-20
            w-full
max-w-[760px]
px-2
sm:px-4
lg:px-0
            -translate-x-1/2
            -translate-y-1/2
          "
              >
                <div
                  className="
              overflow-hidden

              rounded-[30px]

              border-[10px]
              border-[#321c33]

              bg-white

              shadow-[0_0_40px_rgba(56,20,60,0.55)]
            "
                >
                  <Image
                    src="/images/product-performance.avif"
                    alt="dashboard"
                    width={1400}
                    height={900}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
              {/* FLOATING CARDS */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 80,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                  className={`
              absolute
              z-10
              hidden lg:block
              ${card.className}
            `}
                >
                  <div
                    className="
                flex
                h-[110px]
                w-[170px]

                items-center
                justify-center

                rounded-[18px]

                bg-[#443846]

                px-5

                text-center
                text-[16px]
                font-semibold
                leading-[1.5]

                text-white

                shadow-[0_15px_40px_rgba(0,0,0,0.12)]
              "
                  >
                    {card.title.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </ParallaxSection>

      {/* Compliance  section */}
      <parallaxSection>
        <section
          className="
    overflow-hidden
    bg-gradient-to-b
    from-[#f5fbf7]
    to-[#edf8f1]
    mb-10
  "
        >
          <div
            className="
      relative
      mx-auto

      flex
      flex-col
      items-center
      justify-center

      min-h-[760px]

      max-w-[1120px]

      px-4
      py-16

      sm:px-6

      lg:flex-row
      lg:px-10
      lg:py-24
    "
          >
            {/* =========================================
        LEFT SIDE
    ========================================= */}

            <AnimationCard
              animation="fade-left-side"
              className=""
              desktopAnimationOnly={true}
            >
              <div
                className="
          relative

          mb-6

          flex
          flex-col
          gap-5

          transition-all
          duration-500

          hover:-translate-y-3

          lg:absolute
          lg:left-[14%]
          lg:top-[16%]
        "
              >
                {/* TOP CARD */}

                <div
                  className="
            flex
            items-center
            justify-between

            w-[260px]
            h-[250px]

            rounded-[28px]

            border
            border-[#d8efe2]

            bg-white

            px-6
            py-6

            shadow-[0_20px_60px_rgba(21,88,54,0.10)]
          "
                >
                  <div>
                    <h2
                      className="
            text-2xl
              font-bold
              leading-[1.3]

              text-[#163424]
              "
                    >
                      Vendor Risk & TPRM
                    </h2>

                    <p
                      className="
              mt-4

              text-sm
              leading-7

              text-[#5f7667]
              "
                    >
                      Onboard vendors, generate AI powered questionnaires, and
                      assess third party risk with full TPRM reporting built in.
                    </p>
                  </div>
                </div>

                {/* BOTTOM CARD */}

                <div
                  className="
            relative

            h-[250px]
            w-[260px]

            overflow-hidden

            rounded-[32px]

            border
            border-[#d8efe2]

            bg-white

            p-6

            shadow-[0_20px_60px_rgba(21,88,54,0.10)]
          "
                >
                  <h2
                    className="
              text-2xl
              font-bold
              leading-[1.3]

              text-[#163424]
            "
                  >
                    Built for Every Stage of Compliance
                  </h2>

                  <p
                    className="
              mt-4

              text-sm
              leading-7

              text-[#5f7667]
            "
                  >
                    From risk to audit, Stackflo covers the full GRC lifecycle
                    in one place.
                  </p>

                  {/* GLOW */}
                </div>
              </div>
            </AnimationCard>

            {/* =========================================
        CENTER CARD
    ========================================= */}

            <AnimationCard animation="zoom-in" className="z-10">
              <div className="relative">
                {/* BACKGROUND GLOW */}

                <div
                  className="
            absolute
            left-1/2
            top-1/2

            h-[420px]
            w-[420px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-green-200/30

            blur-[120px]
          "
                />

                <div
                  className="
            relative

            h-auto
            min-h-[520px]

            w-full
            max-w-[470px]

            overflow-hidden

            rounded-[36px]

            border-[10px]
            border-[#d9f0e4]

            bg-[#f6fbf8]

            p-6

            shadow-[0_30px_90px_rgba(21,88,54,0.14)]
          "
                >
                  {/* HEADER */}

                  <div>
                    <h2
                      className="
                text-2xl
                font-bold
                text-[#163424]
              "
                    >
                      AI-Powered Risk Assessment
                    </h2>

                    <p
                      className="
              mt-6

              text-base
              leading-7

              text-[#5f7667]
              "
                    >
                      Continuously scores and reassess risks with AI that
                      calculates impact, likelihood, and mitigation actions as
                      your posture evolves.
                    </p>
                  </div>

                  <div className="mt-20">
                    <h2
                      className="
                text-2xl
                font-bold
                text-[#163424]
              "
                    >
                      Compliance Frameworks
                    </h2>

                    <p
                      className="
              mt-4

              text-base
              leading-7

              text-[#5f7667]
              "
                    >
                      ISO 27001, SOC 2, HIPAA, GDPR and more. Map controls once,
                      stay compliant across every standard you operate under.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationCard>

            {/* =========================================
        RIGHT SIDE
    ========================================= */}

            <AnimationCard
              animation="fade-right-side"
              className=""
              desktopAnimationOnly={true}
            >
              <div
                className="
          relative

          mt-6

          flex
          flex-col
          gap-5

          transition-all
          duration-500

          hover:-translate-y-3

          lg:absolute
          lg:right-[14%]
          lg:top-[16%]
        "
              >
                {/* TOP CARD */}

                <div
                  className="
            relative

            h-[250px]
            w-[260px]

            overflow-hidden

            rounded-[32px]

            border
            border-[#d8efe2]

            bg-white

            p-6

            shadow-[0_20px_60px_rgba(21,88,54,0.10)]
          "
                >
                  <h2
                    className="
              text-2xl
              font-bold
              leading-[1.3]

              text-[#163424]
            "
                  >
                    Audit Management
                  </h2>

                  <p
                    className="
              mt-4

              text-sm
              leading-7

              text-[#5f7667]
            "
                  >
                    Run internal audits, invite external auditors into the
                    platform, and manage findings and evidence from one place.
                  </p>

                  {/* GLOW */}
                </div>

                {/* BOTTOM CARD */}

                <div
                  className="
            flex
            items-center
            justify-between

            w-[260px]
            h-[250px]

            rounded-[28px]

            border
            border-[#d8efe2]

            bg-white

            px-6
            py-6

            shadow-[0_20px_60px_rgba(21,88,54,0.10)]
          "
                >
                  <div>
                    <h2
                      className="
              text-2xl
              font-bold
              leading-[1.3]

              text-[#163424]
              "
                    >
                      Universal Evidence Mapping
                    </h2>

                    <p
                      className="
              mt-4

              text-sm
              leading-7

              text-[#5f7667]
              "
                    >
                      Map evidence once, and it automatically reflects across
                      every applicable framework in your organization.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationCard>
          </div>
        </section>
      </parallaxSection>

      {/* tools section */}
      <ParallaxSection>
        <div className="mx-auto  w-full max-w-[1300px] px-5 sm:px-8 lg:px-0">
          <section className="relative isolate min-h-[760px] overflow-hidden rounded-[30px] px-5 py-14 sm:rounded-[36px] sm:px-8 lg:min-h-[820px] lg:px-12 lg:py-20">
            {/* Background layer */}
            <div
              className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
              aria-hidden="true"
            >
              <div className="absolute inset-x-0 top-0 h-[260px] bg-[linear-gradient(180deg,#4ade80_0%,#86efac_100%)] blur-[60px]" />
              <ScrollText
                items={["Your Entire Stack, Compliance-Ready"]}
                speed="20s"
                direction="left"
                containerClassName="absolute left-0 right-0 top-20 sm:top-24 lg:top-28"
                className="items-center gap-10 text-[42px] sm:text-[72px]  md:text-[100px] lg:text-[140px] font-bold uppercase leading-none "
              />
            </div>

            {/* CONTENT */}

            <div className=" relative z-10 grid grid-cols-1 items-center gap-16 pt-24 lg:grid-cols-2 md:pt-44 lg:gap-6 lg:pt-44">
              {/* LEFT CONTENT */}

              <div className="mx-auto max-w-[560px] lg:mx-0">
                <h2 className=" text-center text-3xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl lg:text-left">
                  Seamless Tool
                  <br />
                  Sync Integration
                </h2>
                <p className=" mt-6 max-w-[500px] text-center text-base font-semibold leading-7 text-[#4b5563] sm:mt-8 sm:text-lg sm:leading-8 lg:text-left">
                  Connect your existing stack and let Stackflo handle compliance
                  across all of it, end to end.
                </p>
                <div className=" mt-10 flex justify-center lg:justify-start ">
                  <AnimatedButton
                    href="/contact-us"
                    text="Start Connecting Your Stack"
                    className="  mt-12 min-w-[230px]  px-8 py-4 text-lg font-bold text-white    sm:min-w-[250px] sm:text-xl  btn-green-glow btn-green-light "
                  />
                </div>
              </div>

              {/* RIGHT SIDE */}

              <div className=" relative mx-auto h-[420px] w-full max-w-[340px] sm:h-[560px] sm:max-w-[520px] md:h-[640px] md:max-w-[620px] lg:h-[760px] lg:max-w-[760px]">
                {/* CENTER BOX */}

                <div
                  className="
      absolute
      right-0
      top-1/2
      z-20

      flex
      h-[110px]
      w-[110px]

      -translate-y-1/2

      items-center
      justify-center

      rounded-[22px]

      bg-[#ecfdf3]

      shadow-[0_20px_60px_rgba(34,197,94,0.16)]

      sm:h-[150px]
      sm:w-[150px]
      sm:rounded-[28px]

      lg:h-[190px]
      lg:w-[190px]
      lg:rounded-[34px]
    "
                >
                  <div
                    className="
    flex
    h-[60px]
    w-[60px]
    items-center
    justify-center
    rounded-[18px]
    lg:h-[100px]
    lg:w-[100px]
    lg:rounded-[30px]
  "
                  >
                    <Image
                      src="/images/product-stakflo.webp"
                      alt="Stakflo"
                      width={54}
                      height={54}
                      className="
      h-[34px]
      w-[34px]
      object-contain
      lg:h-[100px]
      lg:w-[100px]
    "
                    />
                  </div>
                </div>

                {/* SVG CONNECTIONS */}

                <svg
                  className="
    absolute
    inset-0
    z-10

    h-full
    w-full
  "
                  viewBox="0 0 760 760"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* TOP 1 */}

                  <path
                    id="path1"
                    d="
      M 320 90
      H 610
      Q 650 90 650 130
      V 240
    "
                    stroke="#86efac"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* TOP 2 */}

                  <path
                    id="path2"
                    d="
      M 90 190
      H 560
      Q 590 190 590 220
      V 275
    "
                    stroke="#86efac"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* CENTER 1 */}

                  <path
                    id="path3"
                    d="
      M 320 300
      H 565
    "
                    stroke="#86efac"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* CENTER 2 */}

                  <path
                    id="path4"
                    d="
      M 60 390
      H 565
    "
                    stroke="#86efac"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* CENTER 3 */}

                  <path
                    id="path5"
                    d="
      M 320 480
      H 565
    "
                    stroke="#86efac"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* BOTTOM 1 */}

                  <path
                    id="path6"
                    d="
      M 90 585
      H 590
      Q 590 585 590 540
      V 450
    "
                    stroke="#86efac"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* BOTTOM 2 */}

                  <path
                    id="path7"
                    d="
      M 320 690
      H 650
      Q 690 690 690 620
      V 390
    "
                    stroke="#86efac"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* MOVING DOTS */}

                  {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                    <circle key={item} r="5" fill="#22c55e">
                      <animateMotion
                        dur={`${2.4 + index * 0.2}s`}
                        repeatCount="indefinite"
                      >
                        <mpath href={`#path${item}`} />
                      </animateMotion>
                    </circle>
                  ))}
                </svg>

                {/* TOP */}

                <div
                  className="
    absolute
    left-[30%]
    top-[15%]
    z-20

    flex
    h-[52px]
    w-[52px]
    items-center
    justify-center

    rounded-full

    bg-[#1E293B]

    text-white

    shadow-[0_10px_30px_rgba(0,0,0,0.12)]

    sm:h-[62px]
    sm:w-[62px]

    lg:h-[72px]
    lg:w-[72px]
  "
                >
                  <FaSlack className="text-[24px] sm:text-[28px] lg:text-[34px]" />
                </div>

                <div
                  className="
    absolute
    left-[0%]
    top-[26%]
    z-20

    flex
    h-[52px]
    w-[52px]
    items-center
    justify-center

    rounded-full

    bg-[#0052CC]

    text-white

    shadow-[0_10px_30px_rgba(0,0,0,0.12)]

    sm:h-[62px]
    sm:w-[62px]

    lg:h-[72px]
    lg:w-[72px]
  "
                >
                  <FaJira className="text-[24px] sm:text-[28px] lg:text-[34px]" />
                </div>

                {/* CENTER */}

                <div
                  className="
    absolute
    left-[30%]
    top-[37%]
    z-20

    flex
    h-[52px]
    w-[52px]
    items-center
    justify-center

    rounded-full

    bg-[#171515]

    text-white

    shadow-[0_10px_30px_rgba(0,0,0,0.12)]

    sm:h-[62px]
    sm:w-[62px]

    lg:h-[72px]
    lg:w-[72px]
  "
                >
                  <FaGithub className="text-[24px] sm:text-[28px] lg:text-[34px]" />
                </div>

                <div
                  className="
    absolute
    left-[0%]
    top-[46%]
    z-20

    flex
    h-[52px]
    w-[52px]
    items-center
    justify-center

    rounded-full

    bg-[#2F855A]

    text-white

    shadow-[0_10px_30px_rgba(0,0,0,0.12)]

    sm:h-[62px]
    sm:w-[62px]

    lg:h-[72px]
    lg:w-[72px]
  "
                >
                  <SiNotion className="text-[24px] sm:text-[28px] lg:text-[34px]" />
                </div>

                <div
                  className="
    absolute
    left-[30%]
    top-[55%]
    z-20

    flex
    h-[52px]
    w-[52px]
    items-center
    justify-center

    rounded-full

    bg-[#FF7A59]

    text-white

    shadow-[0_10px_30px_rgba(0,0,0,0.12)]

    sm:h-[62px]
    sm:w-[62px]

    lg:h-[72px]
    lg:w-[72px]
  "
                >
                  <FaHubspot className="text-[24px] sm:text-[28px] lg:text-[34px]" />
                </div>

                {/* BOTTOM */}

                <div
                  className="
    absolute
    left-[0%]
    top-[66%]
    z-20

    flex
    h-[52px]
    w-[52px]
    items-center
    justify-center

    rounded-full

    bg-[#0061FF]

    text-white

    shadow-[0_10px_30px_rgba(0,0,0,0.12)]

    sm:h-[62px]
    sm:w-[62px]

    lg:h-[72px]
    lg:w-[72px]
  "
                >
                  <FaDropbox className="text-[24px] sm:text-[28px] lg:text-[34px]" />
                </div>

                <div
                  className="
    absolute
    left-[30%]
    top-[77%]
    z-20

    flex
    h-[52px]
    w-[52px]
    items-center
    justify-center

    rounded-full

    bg-[#03363D]

    text-white

    shadow-[0_10px_30px_rgba(0,0,0,0.12)]

    sm:h-[62px]
    sm:w-[62px]

    lg:h-[72px]
    lg:w-[72px]
  "
                >
                  <SiZendesk className="text-[24px] sm:text-[28px] lg:text-[34px]" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </ParallaxSection>

      {/* book a demo section */}
      <ParallaxSection>
        <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-0">
          <section className=" relative isolate mb-14 min-h-[560px] overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_50%_20%,#5CF2C6_0%,#1ADAA2_42%,#10B981_100%)] px-5 py-14 text-center sm:min-h-[650px] sm:rounded-[32px] sm:px-8 sm:py-16 lg:min-h-[800px] lg:rounded-[36px] lg:px-12 lg:py-20">
            {/* BACKGROUND */}
            <div
              className=" pointer-events-none absolute inset-0 z-0 overflow-hidden"
              aria-hidden="true"
            >
              <ScrollText
                items={["Unified platform for automated compliance"]}
                speed="20s"
                direction="left"
                containerClassName=" absolute left-0 right-0 top-6 sm:top-10 lg:top-16 "
                className=" items-center gap-8 text-[42px] sm:text-[72px] md:text-[100px] lg:text-[140px] font-semibold uppercase leading-none text-white/90"
              />

              {/* LEFT GLOW IMAGE */}
              <Image
                src="/images/leftsidebg2.png"
                alt=""
                width={900}
                height={1200}
                className=" pointer-events-none absolute left-[-22%] bottom-[-8%] z-[1] h-[72%] w-auto max-w-none object-contain opacity-90 mix-blend-screen  md:left-[-14%] md:h-[82%]  lg:left-[-10%] lg:h-[80%]"
              />

              {/* RIGHT GLOW IMAGE */}
              <Image
                src="/images/rightsidebg2.png"
                alt=""
                width={900}
                height={1200}
                className=" pointer-events-none absolute right-[-22%] bottom-[-8%] z-[1] h-[72%] w-auto max-w-none object-contain opacity-90 mix-blend-screen  md:right-[-14%] md:h-[82%] lg:right-[-10%] lg:h-[80%]"
              />
            </div>

            {/* CONTENT */}

            <div className=" relative z-10 mx-auto flex min-h-[420px] max-w-[860px] flex-col items-center justify-center pt-20 sm:min-h-[500px] sm:pt-28 lg:min-h-[650px] lg:pt-40 ">
              <h2 className=" max-w-[820px] text-3xl font-semibold leading-[1.15] text-white drop-shadow-[0_8px_24px_rgba(6,55,20,0.18)] sm:text-5xl sm:leading-tight lg:text-[60px] ">
                Strengthen Your Compliance Posture Today.
              </h2>

              <p className=" mt-6 max-w-[650px] text-base font-medium leading-7 text-white/95 sm:mt-8 sm:text-lg sm:leading-8 lg:mt-10 lg:text-xl">
                Centralize your GRC operations, reduce audit risk, and scale
                compliance across every framework your organization operates
                under.
              </p>

              {/* BUTTONS */}

              <div className="  mt-10  flex  w-full  max-w-[420px]  flex-col  items-center  justify-center  gap-4  sm:mt-14  sm:max-w-none  sm:flex-row  lg:mt-20">
                <AnimatedButton
                  href="/contact-us"
                  text="Book a Demo "
                  className=" w-full bg-white px-8 py-4 text-base font-bold text-[#111827] shadow-[0_16px_34px_rgba(6,55,20,0.24)] hover:bg-[#f7fff8] sm:w-auto"
                />

                <AnimatedButton
                  href="/contact-us"
                  text="View Plans"
                  className="  w-full  bg-[#070b14]  px-8  py-4  text-base  font-bold  text-white  shadow-[0_16px_34px_rgba(6,55,20,0.32)]  hover:bg-[#172033]  sm:w-auto"
                />
              </div>
            </div>
          </section>
        </div>
      </ParallaxSection>
    </main>
  );
}
