"use client";
import Image from "next/image";
import AnimationCard from "@/components/animations/AnimationCard";
import ActivityStackCards from "@/components/ui/ActivityStackCards";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ScrollText from "@/components/ui/ScrollText";
import PortalRingCard from "@/components/ui/PortalRingCard";

export default function Home() {
  return (
    <main>
      <section className="  relative isolate min-h-[calc(100svh-200px)] overflow-hidden bg-[#fbfffa] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:min-h-[calc(100svh-138px)]  lg:py-0 ">
        <div
          className=" pointer-events-none absolute inset-0 z-0 overflow-hidden "
          aria-hidden="true"
        >
          <Image
            src="/images/rigthside.avif"
            alt=""
            width={840}
            height={900}
            priority
            className=" absolute bottom-[-9%] left-[-62%] h-[58%] w-auto max-w-none object-contain opacity-95 sm:left-[-38%] sm:h-[72%] md:left-[-24%] md:h-[82%] lg:bottom-[-16%] lg:left-[-11%] lg:h-[118%] xl:left-[-2%] 2xl:left-0 "
          />

          <Image
            src="/images/leftside.avif"
            alt=""
            width={840}
            height={900}
            priority
            className=" absolute bottom-[-9%] right-[-62%] h-[58%] w-auto max-w-none object-contain opacity-95 sm:right-[-38%] sm:h-[72%] md:right-[-24%] md:h-[82%] lg:bottom-[-16%] lg:right-[-11%] lg:h-[118%] xl:right-[-2%] 2xl:right-0 "
          />

          <div className=" absolute inset-x-[6%] top-0 h-32 rounded-full bg-white/80 blur-3xl sm:h-44 " />
        </div>

        <div className=" relative z-10 mx-auto flex min-h-[inherit] max-w-[1120px] flex-col items-center justify-center text-center ">
          <div className=" mb-8 flex max-w-full items-center overflow-hidden rounded-full border border-[#edf2eb] bg-white/75 p-1 text-xs font-bold uppercase text-[#7f7b85] shadow-[0_12px_35px_rgba(18,5,28,0.06)] backdrop-blur-xl sm:text-sm lg:mb-10 ">
            <span className=" rounded-full bg-[var(--primary-color)] px-4 py-2 text-white ">
              New
            </span>
            <ScrollText
              items={["Optimize.", "Automate.", "Scale."]}
              speed="5s"
              direction="left"
              containerClassName=" w-[min(17rem,calc(100vw-8rem))] sm:w-80 "
              className=" items-center text-[#7f7b85] "
            ></ScrollText>
          </div>

          <h1 className="  max-w-[900px] text-5xl font-semibold leading-[0.95] tracking-tight text-[#16071B] sm:text-6xl md:text-7xl lg:text-[70px]">
            Optimize, Automate, and Scale with Stakflo.
          </h1>

          <p className=" mt-8 max-w-[600px] text-lg font-medium leading-[1.3] text-[#5C4F5E] lg:text-xl ">
            From simplifying operations to automating processes, Stakflo adapts
            to the way modern teams work, grow, and scale.
          </p>

          <AnimatedButton
            href="/contact-us"
            text="Use Stakflo Free"
            className="  mt-12 min-w-[230px] bg-gradient-to-b from-[#2a093d] to-[#14001f] px-8 py-4 text-lg font-bold text-white shadow-[0_16px_35px_rgba(217,67,255,0.32)]  hover:from-green-300  hover:to-green-500 sm:min-w-[250px] sm:text-xl "
          />
        </div>
      </section>
      <section className=" relative isolate overflow-hidden bg-[#fbfffa] px-5 pb-12 pt-8 sm:px-8 sm:pb-16 lg:px-10 lg:pb-24 lg:pt-12  ">
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
            innerClassName="
    p-20
  "
          >
            <div
              className="
              mx-auto
              overflow-hidden
              rounded-[24px]
              border-[10px]
              border-[#f5e9fb]
              bg-white
              shadow-[0_30px_90px_rgba(114,45,154,0.18)]
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
      <section className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 p-5 ">
        {/* LEFT CARD */}
        <AnimationCard animation="fade-right" className="h-full">
          <div className=" relative overflow-hidden rounded-[36px] border  border-[#efc7ff] bg-[#f9f4fb]p-8  md:p-10  min-h-[560px] ">
            {/* BACKGROUND GLOW */}
            <div className="  absolut  right-[-120px  top-[100px]  h-[420px  w-[420px]  rounded-full  bg-pink-300/20  blur-3xl " />
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

          bg-[#efdaf7]
        "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="
            h-8
            w-8
            text-fuchsia-500
          "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h3m-7.5 6h15m-13.5 6h12"
                />
              </svg>
            </div>

            {/* CONTENT */}

            <div className="relative z-10">
              <h2
                className="
            mb-5

            text-2xl
            md:text-3xl
            lg:text-[38px]

            font-black

            tracking-[-0.04em]

            text-[#1a0826]
          "
              >
                Smart Workflow Intelligence
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
                Organize, manage, and scale your team’s work through a
                structured, distraction-free workspace designed for clarity.
              </p>
            </div>

            {/* INNER CARD */}

            <AnimationCard
              animation="fade-up"
              delay={0.2}
              className="
          absolute
          bottom-6
          left-6
          right-6
        "
            >
              <div
                className="
            rounded-[28px]

            border
            border-[#ead8f2]

            bg-white

            p-6
            md:p-8

            shadow-[0px_20px_60px_rgba(0,0,0,0.06)]
          "
              >
                <h3
                  className="
              mb-8

              text-xl
              md:text-2xl

              font-bold

              text-[#2d2331]
            "
                >
                  Daily activities
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span
                      className="
                  text-sm
                  md:text-base

                  text-[#7f7485]
                "
                    >
                      09:46
                    </span>

                    <div
                      className="
                  h-4
                  w-4

                  rounded-full

                  border-2
                  border-blue-400
                "
                    />

                    <p
                      className="
                  text-sm
                  md:text-base

                  text-[#6d6472]
                "
                    >
                      Payment received from John Doe of $385.90
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className="
                  text-sm
                  md:text-base

                  text-[#7f7485]
                "
                    >
                      09:46
                    </span>

                    <div
                      className="
                  h-4
                  w-4

                  rounded-full

                  border-2
                  border-cyan-400
                "
                    />

                    <p
                      className="
                  text-sm
                  md:text-base

                  font-semibold

                  text-[#2d2331]
                "
                    >
                      New sale recorded
                      <span className="text-blue-500"> #ML-3467</span>
                    </p>
                  </div>
                </div>
              </div>
            </AnimationCard>
          </div>
        </AnimationCard>
        {/* RIGHT CARD */}
        <AnimationCard animation="fade-left" className="h-full">
          <div
            className="
        relative
        overflow-hidden

        rounded-[36px]

        border
        border-[#efc7ff]

        bg-[#f9f4fb]

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

          bg-pink-300/20

          blur-3xl
        "
            />

            {/* CONTENT */}

            <div className="relative z-10">
              <h2
                className="
            mb-8

            text-[48px]
            md:text-[72px]
            lg:text-[88px]

            font-black

            leading-none

            tracking-[-0.07em]

            text-[#18041f]
          "
              >
                2x Faster
              </h2>

              <h3
                className="
            mb-6

            text-2xl
            md:text-3xl

            font-black

            tracking-[-0.04em]

            text-[#1f1026]
          "
              >
                Move Work Forward Faster
              </h3>

              <p
                className="
            mb-20

            text-base
            md:text-lg

            leading-[1.8]

            text-[#6c6170]
          "
              >
                Accelerate planning, collaboration, and execution by reducing
                friction, confusion, and unnecessary back-and-forth.
              </p>

              {/* LIST */}

              <div className="space-y-7">
                <div className="flex items-center gap-4">
                  <div
                    className="
                flex
                h-7
                w-7
                items-center
                justify-center

                rounded-full

                border
                border-[#2a1d30]

                text-sm
              "
                  >
                    ✦
                  </div>

                  <p
                    className="
                text-lg
                md:text-xl

                text-[#352a39]
              "
                  >
                    Faster decision and approval cycles
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="
                flex
                h-7
                w-7
                items-center
                justify-center

                rounded-full

                border
                border-[#2a1d30]

                text-sm
              "
                  >
                    ✦
                  </div>

                  <p
                    className="
                text-lg
                md:text-xl

                text-[#352a39]
              "
                  >
                    Real-time progress alignment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimationCard>
      </section>
      <section className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-0">
        <section
          className="
      relative
      isolate
      mb-14

      min-h-[560px]

      overflow-hidden
      rounded-[26px]

      bg-[radial-gradient(circle_at_50%_20%,#78f09a_0%,#38c95c_42%,#16a642_100%)]

      px-5
      py-14

      text-center

      shadow-[0_30px_90px_rgba(56,201,92,0.28)]

      sm:min-h-[650px]
      sm:rounded-[32px]
      sm:px-8
      sm:py-16

      lg:min-h-[800px]
      lg:rounded-[36px]
      lg:px-12
      lg:py-20
    "
        >
          {/* BACKGROUND */}

          <div
            className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
            aria-hidden="true"
          >
            <ScrollText
              items={["START TODAY IN STAKFLO", "STREAMLINE YOUR WORKFLOWS"]}
              speed="22s"
              direction="left"
              containerClassName="
          absolute
          left-0
          right-0

          top-6

          sm:top-10
          lg:top-16
        "
              className="
          items-center
          gap-8

          text-[42px]
          sm:text-[72px]
          md:text-[100px]
          lg:text-[140px]

          font-semibold
          uppercase
          leading-none

          text-white/90
        "
            />

            {/* LEFT IMAGE */}

            {/* <Image
        src="/images/rigthside.avif"
        alt=""
        width={840}
        height={900}
        className="
          absolute

          bottom-[-6%]
          left-[-70%]

          h-[40%]
          w-auto
          max-w-none

          object-contain
          opacity-40

          sm:left-[-42%]
          sm:h-[58%]

          md:left-[-26%]
          md:h-[68%]

          lg:bottom-[-12%]
          lg:left-[-10%]
          lg:h-[92%]

          xl:left-[-2%]
        "
      /> */}

            {/* RIGHT IMAGE */}

            {/* <Image
        src="/images/leftside.avif"
        alt=""
        width={840}
        height={900}
        className="
          absolute

          bottom-[-6%]
          right-[-70%]

          h-[40%]
          w-auto
          max-w-none

          object-contain
          opacity-40

          sm:right-[-42%]
          sm:h-[58%]

          md:right-[-26%]
          md:h-[68%]

          lg:bottom-[-12%]
          lg:right-[-10%]
          lg:h-[92%]

          xl:right-[-2%]
        "
      /> */}
          </div>

          {/* CONTENT */}

          <div
            className="
        relative
        z-10

        mx-auto

        flex
        min-h-[420px]
        max-w-[860px]

        flex-col
        items-center
        justify-center

        pt-20

        sm:min-h-[500px]
        sm:pt-28

        lg:min-h-[650px]
        lg:pt-40
      "
          >
            <h2
              className="
          max-w-[820px]

          text-3xl
          font-semibold
          leading-[1.15]

          text-white

          drop-shadow-[0_8px_24px_rgba(6,55,20,0.18)]

          sm:text-5xl
          sm:leading-tight

          lg:text-[60px]
        "
            >
              Start Streamlining Your Workflows Today
            </h2>

            <p
              className="
          mt-6
          max-w-[620px]

          text-base
          font-medium
          leading-7

          text-white/95

          sm:mt-8
          sm:text-lg
          sm:leading-8

          lg:mt-10
          lg:text-xl
        "
            >
              Simplify processes, improve visibility, and keep your team moving
              with faster, more structured workflows.
            </p>

            {/* BUTTONS */}

            <div
              className="
          mt-10

          flex
          w-full
          max-w-[420px]

          flex-col
          items-center
          justify-center

          gap-4

          sm:mt-14
          sm:max-w-none
          sm:flex-row

          lg:mt-20
        "
            >
              <AnimatedButton
                href="/contact-us"
                text="Use Stakflo Free"
                className="
            w-full

            bg-white

            px-8
            py-4

            text-base
            font-black
            text-[#111827]

            shadow-[0_16px_34px_rgba(6,55,20,0.24)]

            hover:bg-[#f7fff8]

            sm:w-auto
          "
              />

              <AnimatedButton
                href="/contact-us"
                text="View Plans"
                className="
            w-full

            bg-[#070b14]

            px-8
            py-4

            text-base
            font-black
            text-white

            shadow-[0_16px_34px_rgba(6,55,20,0.32)]

            hover:bg-[#172033]

            sm:w-auto
          "
              />
            </div>
          </div>
        </section>
      </section>
      <section className="mx-auto mb-16 w-full max-w-[1400px] px-5 sm:px-8 lg:px-0">
        <section className="relative isolate min-h-[760px] overflow-hidden rounded-[30px] px-4 py-14 sm:rounded-[36px] sm:px-8 lg:min-h-[820px] lg:px-12 lg:py-20">
          {/* Background layer */}
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute inset-x-0 top-0 h-[260px] bg-[linear-gradient(180deg,#4ade80_0%,#86efac_100%)] blur-[60px]" />
            <ScrollText
              items={["DESIGNED FOR MODERN WORKFLOWS", "BUILT FOR SCALE"]}
              speed="44s"
              direction="left"
              containerClassName="absolute left-0 right-0 top-20 sm:top-24 lg:top-28"
              className="items-center gap-10 text-[42px] sm:text-[72px]  md:text-[100px] lg:text-[140px] font-black uppercase leading-none"
            />
          </div>

          {/* ↑ increased pt here — gives space between scrolling text and mockup */}
          <div className="relative z-10 mx-auto flex min-h-[580px] w-full max-w-[1180px] items-center justify-center pt-52 sm:pt-60 lg:min-h-[680px] lg:pt-64">
            {/* Dashed connector lines */}
            <svg
              className="absolute inset-0 z-[6] hidden md:block h-full w-full"
              viewBox="0 0 1400 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="arrow"
                  markerWidth="12"
                  markerHeight="12"
                  refX="10"
                  refY="6"
                  orient="auto"
                >
                  <path d="M0,0 L12,6 L0,12" fill="#7f7485" />
                </marker>
              </defs>

              {/* Top-left → center */}
              <path
                d="M 185 258 H 430"
                stroke="#7f7485"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
                markerEnd="url(#arrow)"
                strokeLinecap="round"
              />
              {/* Bottom-left → center */}
              <path
                d="M 185 585 V 498 H 430"
                stroke="#7f7485"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
                markerEnd="url(#arrow)"
                strokeLinecap="round"
              />
              {/* Top-right → center */}
              <path
                d="M 1215 258 H 970"
                stroke="#7f7485"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
                markerEnd="url(#arrow)"
                strokeLinecap="round"
              />
              {/* Bottom-right → center */}
              <path
                d="M 1215 585 V 498 H 970"
                stroke="#7f7485"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="none"
                markerEnd="url(#arrow)"
                strokeLinecap="round"
              />
            </svg>

            {/* ↓ Feature cards — z-[5] so center mockup (z-20) sits ON TOP of them */}

            {/* Top Left */}
            <AnimationCard
              animation="fade-right"
              className="absolute left-[1%] top-[24%] z-[5]"
            >
              <div className="rounded-[22px] bg-[#453646] px-6 py-5 text-center shadow-[0px_8px_30px_rgba(0,0,0,0.18)]">
                <h3 className="text-lg md:text-xl font-bold leading-[1.6] text-white">
                  Workflow
                  <br />
                  Intelligence
                </h3>
              </div>
            </AnimationCard>

            {/* Bottom Left */}
            <AnimationCard
              animation="fade-right"
              delay={0.2}
              className="absolute bottom-[8%] left-[1%] z-[5]"
            >
              <div className="rounded-[22px] bg-[#453646] px-6 py-5 text-center shadow-[0px_8px_30px_rgba(0,0,0,0.18)]">
                <h3 className="text-lg md:text-xl font-bold leading-[1.6] text-white">
                  System
                  <br />
                  Control
                </h3>
              </div>
            </AnimationCard>

            {/* Top Right */}
            <AnimationCard
              animation="fade-left"
              className="absolute right-[1%] top-[24%] z-[5]"
            >
              <div className="rounded-[22px] bg-[#453646] px-6 py-5 text-center shadow-[0px_8px_30px_rgba(0,0,0,0.18)]">
                <h3 className="text-lg md:text-xl font-bold leading-[1.6] text-white">
                  Operational
                  <br />
                  Speed
                </h3>
              </div>
            </AnimationCard>

            {/* Bottom Right */}
            <AnimationCard
              animation="fade-left"
              delay={0.2}
              className="absolute bottom-[8%] right-[1%] z-[5] w-[190px]"
            >
              <div className="rounded-[22px] bg-[#453646] px-6 py-5 text-center shadow-[0px_8px_30px_rgba(0,0,0,0.18)]">
                <h3 className="text-lg md:text-xl font-bold leading-[1.6] text-white">
                  Scalable
                  <br />
                  Architecture
                </h3>
              </div>
            </AnimationCard>

            {/* ↓ Center mockup — z-20 so it overlaps feature cards */}
            <AnimationCard
              animation="zoom-in"
              className="relative z-20 w-full max-w-[720px]"
            >
              <div className="relative w-full overflow-hidden rounded-[28px] border-[4px] border-[#2d1d30] bg-[#faf7fc] p-5 md:p-6 shadow-[0px_0px_30px_rgba(45,29,48,0.35)]">
                <div className="overflow-hidden rounded-[24px] border border-[#e5ddeb] bg-white p-3 shadow-[0px_14px_40px_rgba(0,0,0,0.08)]">
                  <Image
                    src="/product-performance.avif"
                    alt="Stakflo product dashboard"
                    width={1400}
                    height={900}
                    priority
                    className="w-full h-auto rounded-[20px]"
                  />
                </div>
              </div>
            </AnimationCard>
          </div>
        </section>
      </section>
      <section className="mx-auto mb-16 w-full max-w-[1400px] px-5 sm:px-8 lg:px-0">
        <section className="relative isolate min-h-[760px] overflow-hidden rounded-[30px] px-5 py-14 sm:rounded-[36px] sm:px-8 lg:min-h-[820px] lg:px-12 lg:py-20">
          {/* Background layer */}
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute inset-x-0 top-0 h-[260px] bg-[linear-gradient(180deg,#4ade80_0%,#86efac_100%)] blur-[60px]" />
            <ScrollText
              items={["DESIGNED FOR MODERN WORKFLOWS", "BUILT FOR SCALE"]}
              speed="44s"
              direction="left"
              containerClassName="absolute left-0 right-0 top-20 sm:top-24 lg:top-28"
              className="items-center gap-10 text-[42px] sm:text-[72px]  md:text-[100px] lg:text-[140px] font-black uppercase leading-none "
            />
          </div>

          {/* CONTENT */}

          <div
            className="
        relative
        z-10

        grid
        grid-cols-1
        items-center

        gap-16

        pt-24

        lg:grid-cols-2
        lg:gap-6
        lg:pt-44
      "
          >
            {/* LEFT CONTENT */}

            <div className="mx-auto max-w-[560px] lg:mx-0">
              <h2
                className="
            text-center
            text-3xl
            font-semibold
            leading-[1.05]

            sm:text-5xl
            md:text-6xl

            lg:text-left
          "
              >
                Seamless Tool
                <br />
                Sync Integration
              </h2>

              <p
                className="
            mt-6
            max-w-[500px]

            text-center
            text-base
            font-semibold
            leading-7
            text-[#4b5563]

            sm:mt-8
            sm:text-lg
            sm:leading-8

            lg:text-left
          "
              >
                Connect and synchronize your essential tools effortlessly for
                seamless operational continuity.
              </p>

              <div
                className="
            mt-10
            flex
            justify-center

            lg:justify-start
          "
              >
                <AnimatedButton
                  href="/contact-us"
                  text="Use Stakflo Free"
                  className="
              min-w-[220px]

              bg-gradient-to-b
              from-[#2a093d]
              to-[#14001f]

              px-7
              py-4

              text-base
              font-bold
              text-white


              hover:from-green-300
              hover:to-green-500

              sm:min-w-[250px]
              sm:text-lg
            "
                />
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div
              className="
          relative
          mx-auto

          h-[420px]
          w-full
          max-w-[340px]

          sm:h-[560px]
          sm:max-w-[520px]

          md:h-[640px]
          md:max-w-[620px]

          lg:h-[760px]
          lg:max-w-[760px]
        "
            >
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

              bg-[linear-gradient(180deg,#4ade80_0%,#16a34a_100%)]

              text-3xl
              font-black
              text-white

              sm:h-[80px]
              sm:w-[80px]
              sm:text-4xl

              lg:h-[100px]
              lg:w-[100px]
              lg:rounded-[30px]
              lg:text-5xl
            "
                >
                  S
                </div>
              </div>

              {/* SVG LINES */}

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
                <path
                  id="path1"
                  d="M 430 90 H 620 Q 660 90 660 135 V 160"
                  stroke="#a7f3d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  id="path2"
                  d="M 300 170 H 590 Q 615 170 615 210 V 245"
                  stroke="#a7f3d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  id="path3"
                  d="M 350 255 H 590"
                  stroke="#a7f3d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  id="path4"
                  d="M 260 340 H 590"
                  stroke="#a7f3d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  id="path5"
                  d="M 340 425 H 590"
                  stroke="#a7f3d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  id="path6"
                  d="M 300 515 H 615 Q 615 515 615 470 V 450"
                  stroke="#a7f3d0"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                <path
                  id="path7"
                  d="M 430 610 H 660 Q 690 610 690 550 V 430"
                  stroke="#a7f3d0"
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

              {/* ICONS */}

              <div
                className="
            absolute
            left-[34%]
            top-[5%]
            z-20
          "
              >
                1
              </div>

              <div
                className="
            absolute
            left-[16%]
            top-[18%]
            z-20
          "
              >
                2
              </div>

              <div
                className="
            absolute
            left-[25%]
            top-[31%]
            z-20
          "
              >
                3
              </div>

              <div
                className="
            absolute
            left-[8%]
            top-[43%]
            z-20
          "
              >
                4
              </div>

              <div
                className="
            absolute
            left-[25%]
            top-[56%]
            z-20
          "
              >
                5
              </div>

              <div
                className="
            absolute
            left-[16%]
            top-[69%]
            z-20
          "
              >
                6
              </div>

              <div
                className="
            absolute
            left-[34%]
            top-[82%]
            z-20
          "
              >
                7
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
