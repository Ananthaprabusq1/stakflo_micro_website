"use client";
import AnimationCard from "@/components/animations/AnimationCard";
import ActivityStackCards from "@/components/ui/ActivityStackCards";
import ScrollText from "@/components/ui/ScrollText";

export default function Home() {
  return (
    <div className="  p-10">
      <ScrollText
        items={[
          "AI-Powered Compliance",
          "SOC 2 Automation",
          "Continuous Monitoring",
          "Always Audit Ready",
        ]}
        speed="18s"
        direction="left"
        className="
    text-6xl
    font-black
    uppercase
    tracking-[-0.05em]
    text-[var(--secondary-bg)]
  "
      />
      <ScrollText
        items={[
          "Security",
          "Compliance",
          "Automation",
        ]}
        direction="left"
      />
      <ScrollText
        items={[
          "AI",
          "Risk",
          "Audit",
        ]}
        direction="right"
      />

      <div
        className="
    grid
    grid-cols-1
    lg:grid-cols-[1.3fr_0.9fr]
    gap-8 p-5
  "
      >
        {/* LEFT CARD */}

        <AnimationCard
          animation="fade-right"
          className="h-full"
        >
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
            {/* BACKGROUND GLOW */}

            <div
              className="
          absolute
          right-[-120px]
          top-[100px]

          h-[420px]
          w-[420px]

          rounded-full

          bg-pink-300/20

          blur-3xl
        "
            />

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
                Smart Workflow
                Intelligence
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
                Organize, manage, and scale
                your team’s work through a
                structured, distraction-free
                workspace designed for
                clarity.
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
                      Payment received from
                      John Doe of $385.90
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
                      <span className="text-blue-500">
                        {" "}
                        #ML-3467
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </AnimationCard>
          </div>
        </AnimationCard>

        {/* RIGHT CARD */}

        <AnimationCard
          animation="fade-left"
          className="h-full"
        >
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
                Accelerate planning,
                collaboration, and execution
                by reducing friction,
                confusion, and unnecessary
                back-and-forth.
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
                    Faster decision and
                    approval cycles
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
                    Real-time progress
                    alignment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimationCard>
      </div>
      <div className="h-100 flex  items-center justify-center w-200 ">
        <ActivityStackCards
          cards={[
            {
              activities: [
                {
                  time: "09:46",

                  text:
                    "Payment received from John Doe",

                  dotColor:
                    "border-blue-400",
                },
              ],
            },

            {
              activities: [
                {
                  time: "10:12",

                  text:
                    "New sale recorded",

                  tag: "#ML-3467",

                  highlight: true,

                  dotColor:
                    "border-cyan-400",
                },
              ],
            },

            {
              activities: [
                {
                  time: "11:20",

                  text:
                    "Invoice generated",

                  tag: "#INV-920",

                  dotColor:
                    "border-purple-400",
                },
              ],
            },
          ]}
        /></div>
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
                <path
                  d="M0,0 L12,6 L0,12"
                  fill="#7f7485"
                />
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

          <AnimationCard
            animation="zoom-in"
            className="relative z-10"
          >
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
                    priorityColor:
                      "bg-green-100 text-green-500",
                  },

                  {
                    name: "Web App Project",
                    person: "Mathew Flintoff",
                    progress: "56.8%",
                    priority: "Medium",
                    priorityColor:
                      "bg-yellow-100 text-yellow-500",
                  },

                  {
                    name: "Modernize Dashboard",
                    person: "Anil Kumar",
                    progress: "25%",
                    priority: "Very high",
                    priorityColor:
                      "bg-blue-100 text-blue-500",
                  },

                  {
                    name: "Dashboard Co",
                    person: "George Cruize",
                    progress: "96.3%",
                    priority: "High",
                    priorityColor:
                      "bg-red-100 text-red-500",
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



      </div>  <div className="h-screen bg-green-200" ><div
        className="
    relative

    mx-auto

    flex
    items-center
    justify-center

    min-h-[850px]

    max-w-[1400px]

    px-6
    py-20
  "
      >
        {/* =======================================
      LEFT TOP SMALL CARD
  ======================================= */}

        <AnimationCard
          animation="fade-right"
          className="
      absolute
      left-[4%]
      top-[8%]
      z-20
    "
        >
          <div
            className="
        flex
        items-center
        justify-between

        w-[320px]

        rounded-[32px]

        border
        border-[#efcfff]

        bg-[#fcf7ff]

        px-9
        py-8
      "
          >
            <div>
              <h2
                className="
            text-5xl

            font-black

            text-[#1d1023]
          "
              >
                125K+
              </h2>

              <p
                className="
            mt-5

            text-2xl

            font-medium

            leading-[1.5]

            text-[#665a6d]
          "
              >
                Workflow Executions
              </p>
            </div>

            <div
              className="
          flex
          h-24
          w-24
          items-center
          justify-center

          rounded-[24px]

          bg-[#f2def8]
        "
            >
              <div
                className="
            text-5xl

            text-fuchsia-500
          "
              >
                ⛓
              </div>
            </div>
          </div>
        </AnimationCard>

        {/* =======================================
      LEFT BOTTOM BIG CARD
  ======================================= */}

        <AnimationCard
          animation="fade-right"
          delay={0.15}
          className="
      absolute
      bottom-[8%]
      left-[4%]
      z-20
    "
        >
          <div
            className="
        relative

        h-[520px]
        w-[460px]

        overflow-hidden

        rounded-[36px]

        border
        border-[#efcfff]

        bg-[#fcf7ff]

        p-10
      "
          >
            <h2
              className="
          text-5xl

          font-black

          leading-[1.3]

          text-[#1d1023]
        "
            >
              Smart Execution System
            </h2>

            <p
              className="
          mt-8

          max-w-[320px]

          text-2xl

          leading-[1.7]

          text-[#6b5e73]
        "
            >
              Automate tasks and execute workflows
              with speed and accuracy.
            </p>

            {/* GLOW RING */}

            <div
              className="
          absolute
          bottom-[-30px]
          left-[40px]

          h-[240px]
          w-[340px]

          rotate-[-20deg]

          rounded-full

          border-[22px]
          border-pink-200

          opacity-70

          blur-[2px]
        "
            />
          </div>
        </AnimationCard>

        {/* =======================================
      RIGHT TOP BIG CARD
  ======================================= */}

        <AnimationCard
          animation="fade-left"
          className="
      absolute
      right-[4%]
      top-[8%]
      z-20
    "
        >
          <div
            className="
        relative

        h-[420px]
        w-[460px]

        overflow-hidden

        rounded-[36px]

        border
        border-[#efcfff]

        bg-[#fcf7ff]

        p-10
      "
          >
            <h2
              className="
          text-5xl

          font-black

          leading-[1.3]

          text-[#1d1023]
        "
            >
              Execute Work With Speed
            </h2>

            <p
              className="
          mt-8

          max-w-[330px]

          text-2xl

          leading-[1.7]

          text-[#6b5e73]
        "
            >
              Keep teams aligned and execution
              fast—without the back-and-forth.
            </p>

            {/* GLOW SHAPE */}

            <div
              className="
          absolute
          bottom-[20px]
          right-[10px]

          h-[220px]
          w-[220px]

          rotate-[30deg]

          rounded-full

          border-[18px]
          border-pink-200

          opacity-60

          blur-[2px]
        "
            />
          </div>
        </AnimationCard>

        {/* =======================================
      RIGHT BOTTOM SMALL CARD
  ======================================= */}

        <AnimationCard
          animation="fade-left"
          delay={0.15}
          className="
      absolute
      bottom-[7%]
      right-[4%]
      z-20
    "
        >
          <div
            className="
        flex
        items-center
        justify-between

        w-[320px]

        rounded-[32px]

        border
        border-[#efcfff]

        bg-[#fcf7ff]

        px-9
        py-8
      "
          >
            <div>
              <h2
                className="
            text-5xl

            font-black

            text-[#1d1023]
          "
              >
                85K+
              </h2>

              <p
                className="
            mt-5

            text-2xl

            font-medium

            text-[#665a6d]
          "
              >
                Automated Actions
              </p>
            </div>

            <div
              className="
          flex
          h-24
          w-24
          items-center
          justify-center

          rounded-[24px]

          bg-[#f2def8]
        "
            >
              <div
                className="
            text-5xl

            text-fuchsia-500
          "
              >
                ▣
              </div>
            </div>
          </div>
        </AnimationCard>

        {/* =======================================
      CENTER CARD
  ======================================= */}

        <AnimationCard
          animation="zoom-in"
          className="relative z-10"
        >
          <div
            className="
        relative

        h-[720px]
        w-[500px]

        overflow-hidden

        rounded-[42px]

        border-[14px]
        border-[#efc8ff]

        bg-[#fcf8ff]

        p-10

        shadow-[0px_25px_60px_rgba(233,190,255,0.45)]
      "
          >
            {/* HEADER */}

            <div
              className="
          flex
          items-center
          justify-between
        "
            >
              <h2
                className="
            text-4xl

            font-black

            text-[#1e1124]
          "
              >
                Projects of the Month
              </h2>

              <button
                className="
            rounded-2xl

            border
            border-[#ead6f5]

            px-6
            py-4

            text-xl

            text-[#7a6d82]
          "
              >
                January
              </button>
            </div>

            {/* TABLE HEAD */}

            <div
              className="
          mt-12

          grid
          grid-cols-[2fr_1fr]

          text-2xl

          text-[#786d80]
        "
            >
              <p>Assigned</p>
              <p>Name</p>
            </div>

            {/* LIST */}

            <div className="mt-10 space-y-7">
              {[
                "Micheal Doe",
                "Nirav Joshi",
                "Bhavesh patel",
                "Sunil Joshi",
                "Andrew",
                "Bhavesh patel",
                "Nirav Joshi",
                "Micheal Doe",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
              grid
              grid-cols-[2fr_1fr]
              items-center
            "
                >
                  <div className="flex items-center gap-5">
                    <div
                      className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-full

                  bg-gradient-to-br
                  from-cyan-300
                  to-pink-300

                  text-xl

                  font-bold

                  text-white
                "
                    >
                      {item.charAt(0)}
                    </div>

                    <div>
                      <h4
                        className="
                    text-2xl

                    font-semibold

                    text-[#2c2032]
                  "
                      >
                        {item}
                      </h4>

                      <p
                        className="
                    text-lg

                    text-[#8a7f92]
                  "
                      >
                        Content Writer
                      </p>
                    </div>
                  </div>

                  <p
                    className="
                text-xl

                text-[#93859c]
              "
                  >
                    Helping Hands
                  </p>
                </div>
              ))}
            </div>

            {/* PLAY BUTTON */}

            <div
              className="
          absolute
          bottom-[35px]
          left-1/2

          flex
          h-[140px]
          w-[140px]
          -translate-x-1/2
          items-center
          justify-center

          rounded-full

          bg-gradient-to-b
          from-fuchsia-500
          to-pink-500

          shadow-[0px_20px_40px_rgba(236,72,153,0.35)]
        "
            >
              <span
                className="
            text-4xl

            font-black

            text-white
          "
              >
                Play
              </span>
            </div>
          </div>
        </AnimationCard>
      </div></div>
    </div >
  );
}