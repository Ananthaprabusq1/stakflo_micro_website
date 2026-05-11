"use client";
import Image from "next/image";
import AnimationCard from "@/components/animations/AnimationCard";
import ActivityStackCards from "@/components/ui/ActivityStackCards";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ScrollText from "@/components/ui/ScrollText";
import PortalRingCard from "@/components/ui/PortalRingCard";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCircleCheck } from "react-icons/lu";

export default function Home() {
  return (
    <main>
      <section className="  relative isolate min-h-screen overflow-hidden bg-[#fbfffa] px-2  sm:px-8 sm:py-12 lg:px-10   lg:py-0 ">
        {/* <section className="  relative isolate min-h-[calc(100svh-200px)] overflow-hidden bg-[#fbfffa] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:min-h-[calc(100svh-138px)]  lg:py-0 "> */}
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
        />

        <div
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

          <div className=" absolute inset-x-[6%] top-0 h-32 rounded-full lg:bg-white/80 bg-green-200 blur-3xl sm:h-44 " />
        </div>

        <div className=" relative z-10 mx-auto flex min-h-[inherit] max-w-[1120px] flex-col items-center justify-center text-center lg:pt-[140px] lg:pb-20 ">
          <div className="lg:mt-[30px] mb-8 flex w-full max-w-[300px] items-center overflow-hidden rounded-full border border-[#edf2eb] bg-white/75  text-xs font-bold uppercase text-[#7f7b85] shadow-[0_12px_35px_rgba(18,5,28,0.06)] backdrop-blur-xl sm:text-sm lg:mb-10 ">
            <span className="text-md rounded-full  btn-glow btn-pink-glow hover px-3 py-[6px]  text-white font-medium ">
              New
            </span>
            <ScrollText
              items={["Optimize.", "Automate.", "Scale.", "", "", ""]}
              speed="3s"
              direction="left"
              containerClassName=" w-[min(17rem,calc(100vw-8rem))] sm:w-80 "
              className=" items-center text-black font-light "
            // className=" items-center text-[#7f7b85] "
            ></ScrollText>
          </div>

          <h1 className="max-w-[900px] font-[600] lg:text-[72px] md:text-[40px] text-[30px] lg:text-center lg:leading-[86px] tracking-tight text-[#16071B]">
            Optimize, Automate, and Scale with Stakflo.
          </h1>

          <p className=" mt-8 max-w-[600px] md:text-lg font-medium leading-[1.3] text-[#5C4F5E] lg:text-xl text-md ">
            From simplifying operations to automating processes, Stakflo adapts
            to the way modern teams work, grow, and scale.
          </p>

          <AnimatedButton
            href="/contact-us"
            text="Use Stakflo Free"
            className="  mt-12 min-w-[230px]  px-8 py-4 text-lg font-bold text-white    sm:min-w-[250px] sm:text-xl  btn-glow btn-pink-glow "
          />
        </div>
      </section>
      <section className=" relative isolate overflow-hidden bg-[#fbfffa] px-5 pb-12  sm:px-8 sm:pb-16 lg:px-10 lg:pb-24 lg:pt-12  ">
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
          ><div
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
            </div></PortalRingCard>
        </div>
      </section>
      <section className="   bg-[#fbfffa] pb-50 ">
        <div className="w-full isolate lg:max-w-[1400px] mx-auto  grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-8 p-5 ">
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
              </div></div>
          </AnimationCard>
          {/* RIGHT CARD */}
          <AnimationCard animation="fade-left" className="h-full">
            <div
              className="
        relative
        overflow-hidden

        rounded-[36px]

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

            text-xl
            md:text-2xl

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
                    <LuCircleCheck className="
                flex
                h-7
                w-7
                items-center
                justify-center
                font-thin
              "/>

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

                    <LuCircleCheck className="
                flex
                h-7
                w-7
                items-center
                justify-center
                font-thin
              "/>


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
        </div></section>

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
    </main >
  );
}
