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
          ><div
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
            </div></PortalRingCard>
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 p-5 ">
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
      </div>
      <div className="mx-auto w-full max-w-[1400px]">
        <section
          className="
            relative
            isolate
            mb-14
            min-h-[540px]
            overflow-hidden
            rounded-[30px]
            bg-[radial-gradient(circle_at_50%_20%,#78f09a_0%,#38c95c_42%,#16a642_100%)]
            px-5
            py-16
            text-center
            shadow-[0_30px_90px_rgba(56,201,92,0.28)]
            sm:rounded-[36px]
            sm:px-8
            lg:min-h-[660px]
            lg:px-12
          "
        >
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
                top-10
                opacity-35
                sm:top-12
                lg:top-16
              "
              className="
                items-center
                gap-10
                text-[72px]
                font-black
                uppercase
                leading-none
                text-white
                sm:text-[104px]
                md:text-[128px]
                lg:text-[150px]
              "
            />

            {/* <Image
              src="/images/rigthside.avif"
              alt=""
              width={840}
              height={900}
              className="
                absolute
                bottom-[-12%]
                left-[-54%]
                h-[54%]
                w-auto
                max-w-none
                object-contain
                opacity-55
                sm:left-[-34%]
                sm:h-[70%]
                md:left-[-24%]
                lg:left-[-10%]
                lg:h-[92%]
                xl:left-[-2%]
              "
            />

            <Image
              src="/images/leftside.avif"
              alt=""
              width={840}
              height={900}
              className="
                absolute
                bottom-[-12%]
                right-[-54%]
                h-[54%]
                w-auto
                max-w-none
                object-contain
                opacity-55
                sm:right-[-34%]
                sm:h-[70%]
                md:right-[-24%]
                lg:right-[-10%]
                lg:h-[92%]
                xl:right-[-2%]
              "
            /> */}
          </div>

          <div
            className="
              relative
              z-10
              mx-auto
              flex
              min-h-[420px]
              max-w-[760px]
              flex-col
              items-center
              justify-center
              pt-28
              sm:pt-36
              lg:pt-44
              lg:min-h-[520px]
            "
          >
            <h2
              className="
                max-w-[720px]
                text-4xl
                font-black
                leading-tight
                text-white
                drop-shadow-[0_8px_24px_rgba(6,55,20,0.18)]
                sm:text-5xl
                md:text-6xl
              "
            >
              Start Streamlining Your Workflows Today
            </h2>

            <p
              className="
                mt-7
                max-w-[560px]
                text-base
                font-bold
                leading-7
                text-white/90
                sm:text-lg
              "
            >
              Simplify processes, improve visibility, and keep your team moving
              with faster, more structured workflows.
            </p>

            <div
              className="
                mt-12
                flex
                w-full
                flex-col
                items-center
                justify-center
                gap-5
                sm:w-auto
                sm:flex-row
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
      </div>
      <div className="h-100 flex  items-center justify-center w-200 ">
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
      </div>
      <div className="h-screen">
        <div
          className="
    relative

    flex
    items-center
    justify-center

    min-h-[720px]

    overflow-hidden

    px-6
    py-20
  "
        >
          {/* =========================
      SVG CONNECTIONS
  ========================= */}

          <svg
            className="
      absolute
      inset-0
      z-0

      h-full
      w-full
    "
            viewBox="0 0 1400 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* ARROW */}

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

            {/* LEFT TOP */}

            <path
              d="
        M 300 180
        V 260
        H 500
      "
              stroke="#7f7485"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              markerStart="url(#arrow)"
              strokeLinecap="round"
            />

            {/* LEFT BOTTOM */}

            <path
              d="
        M 420 560
        V 450
        H 500
      "
              stroke="#7f7485"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              markerEnd="url(#arrow)"
              strokeLinecap="round"
            />

            {/* RIGHT TOP */}

            <path
              d="
        M 1100 180
        V 260
        H 900
      "
              stroke="#7f7485"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              markerStart="url(#arrow)"
              strokeLinecap="round"
            />

            {/* RIGHT BOTTOM */}

            <path
              d="
        M 1180 560
        V 450
        H 900
      "
              stroke="#7f7485"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              markerEnd="url(#arrow)"
              strokeLinecap="round"
            />
          </svg>

          {/* =========================
      LEFT TOP CARD
  ========================= */}

          <AnimationCard
            animation="fade-right"
            className="
      absolute
      left-[6%]
      top-[12%]
      z-20
    "
          >
            <div
              className="
        rounded-[22px]

        bg-[#453646]

        px-6
        py-5

        text-center

        shadow-[0px_8px_30px_rgba(0,0,0,0.18)]
      "
            >
              <h3
                className="
          text-lg
          md:text-xl

          font-bold

          leading-[1.6]

          text-white
        "
              >
                Workflow
                <br />
                Intelligence
              </h3>
            </div>
          </AnimationCard>

          {/* =========================
      LEFT BOTTOM CARD
  ========================= */}

          <AnimationCard
            animation="fade-right"
            delay={0.2}
            className="
      absolute
      bottom-[16%]
      left-[14%]
      z-20
    "
          >
            <div
              className="
        rounded-[22px]

        bg-[#453646]

        px-6
        py-5

        text-center

        shadow-[0px_8px_30px_rgba(0,0,0,0.18)]
      "
            >
              <h3
                className="
          text-lg
          md:text-xl

          font-bold

          leading-[1.6]

          text-white
        "
              >
                System
                <br />
                Control
              </h3>
            </div>
          </AnimationCard>

          {/* =========================
      RIGHT TOP CARD
  ========================= */}

          <AnimationCard
            animation="fade-left"
            className="
      absolute
      right-[6%]
      top-[12%]
      z-20
    "
          >
            <div
              className="
        rounded-[22px]

        bg-[#453646]

        px-6
        py-5

        text-center

        shadow-[0px_8px_30px_rgba(0,0,0,0.18)]
      "
            >
              <h3
                className="
          text-lg
          md:text-xl

          font-bold

          leading-[1.6]

          text-white
        "
              >
                Operational
                <br />
                Speed
              </h3>
            </div>
          </AnimationCard>

          {/* =========================
      RIGHT BOTTOM CARD
  ========================= */}

          <AnimationCard
            animation="fade-left"
            delay={0.2}
            className="
      absolute
      bottom-[16%]
      right-[12%]
      z-20
    "
          >
            <div
              className="
        rounded-[22px]

        bg-[#453646]

        px-6
        py-5

        text-center

        shadow-[0px_8px_30px_rgba(0,0,0,0.18)]
      "
            >
              <h3
                className="
          text-lg
          md:text-xl

          font-bold

          leading-[1.6]

          text-white
        "
              >
                Scalable
                <br />
                Architecture
              </h3>
            </div>
          </AnimationCard>

          {/* =========================
      CENTER CARD
  ========================= */}

          <AnimationCard animation="zoom-in" className="relative z-10">
            <div
              className="
        relative

        w-full
        max-w-[620px]

        overflow-hidden

        rounded-[28px]

        border-[4px]
        border-[#2d1d30]

        bg-[#faf7fc]

        p-5
        md:p-6

        shadow-[0px_0px_30px_rgba(45,29,48,0.35)]
      "
            >
              {/* HEADER */}

              <div
                className="
          mb-7

          flex
          items-center
          justify-between
        "
              >
                <div>
                  <h2
                    className="
              text-xl
              md:text-2xl

              font-bold

              text-[#2f2132]
            "
                  >
                    Product Performances
                  </h2>

                  <p
                    className="
              mt-1

              text-sm

              text-[#8c8291]
            "
                  >
                    How it performs
                  </p>
                </div>

                <button
                  className="
            rounded-xl

            border
            border-[#e5ddeb]

            px-4
            py-2

            text-xs

            text-[#7d7191]
          "
                >
                  March 2022
                </button>
              </div>

              {/* TABLE HEADER */}

              <div
                className="
          mb-5

          grid
          grid-cols-[2fr_1fr_1fr_1fr_1fr]

          border-b
          border-[#ece5f1]

          pb-3

          text-xs
          md:text-sm

          text-[#7d8ba3]
        "
              >
                <p>Assigned</p>
                <p>Progress</p>
                <p>Priority</p>
                <p>Budget</p>
                <p>Chart</p>
              </div>

              {/* ROWS */}

              <div className="space-y-4">
                {[
                  {
                    name: "Minecraf App",
                    person: "Jason Roy",
                    progress: "73.2%",
                    priority: "Low",
                    priorityColor: "bg-green-100 text-green-500",
                  },

                  {
                    name: "Web App Project",
                    person: "Mathew Flintoff",
                    progress: "56.8%",
                    priority: "Medium",
                    priorityColor: "bg-yellow-100 text-yellow-500",
                  },

                  {
                    name: "Modernize Dashboard",
                    person: "Anil Kumar",
                    progress: "25%",
                    priority: "Very high",
                    priorityColor: "bg-blue-100 text-blue-500",
                  },

                  {
                    name: "Dashboard Co",
                    person: "George Cruize",
                    progress: "96.3%",
                    priority: "High",
                    priorityColor: "bg-red-100 text-red-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
              grid
              grid-cols-[2fr_1fr_1fr_1fr_1fr]

              items-center

              border-b
              border-[#f1edf5]

              pb-4
            "
                  >
                    {/* USER */}

                    <div className="flex items-center gap-3">
                      <div
                        className="
                  h-10
                  w-10

                  rounded-xl

                  bg-gradient-to-br
                  from-pink-200
                  to-cyan-200
                "
                      />

                      <div>
                        <h4
                          className="
                    text-sm
                    md:text-base

                    font-semibold

                    text-[#35283b]
                  "
                        >
                          {item.name}
                        </h4>

                        <p
                          className="
                    text-[11px]

                    text-[#94889b]
                  "
                        >
                          {item.person}
                        </p>
                      </div>
                    </div>

                    {/* PROGRESS */}

                    <p
                      className="
                text-xs
                md:text-sm

                text-[#6e7c92]
              "
                    >
                      {item.progress}
                    </p>

                    {/* PRIORITY */}

                    <div>
                      <span
                        className={`
                  rounded-md

                  px-3
                  py-1.5

                  text-[10px]
                  md:text-xs

                  font-medium

                  ${item.priorityColor}
                `}
                      >
                        {item.priority}
                      </span>
                    </div>

                    {/* BUDGET */}

                    <p
                      className="
                text-xs
                md:text-sm

                text-[#52445d]
              "
                    >
                      $3.5k
                    </p>

                    {/* CHART */}

                    <div
                      className="
                h-6
                w-14

                rounded-full

                bg-gradient-to-r
                from-blue-300
                to-indigo-400

                opacity-70
              "
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimationCard>
        </div>
      </div>{" "}
    </main>
  );
}
