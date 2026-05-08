"use client";

import { useEffect, useState } from "react";

export default function ActivityStackCards({ cards = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div
      className="
        relative

        h-[280px]
        w-full
      "
    >
      {cards.map((item, index) => {
        const isActive = index === activeIndex;

        const stackOffset = (index - activeIndex + cards.length) % cards.length;

        return (
          <div
            key={index}
            className="
              absolute
              left-0
              top-0
              w-full

              transition-all
              duration-700
            "
            style={{
              zIndex: cards.length - stackOffset,

              transform: `
  translateY(-${stackOffset * 16}px)
  scale(${1 - stackOffset * 0.04})
`,

              opacity: stackOffset > 2 ? 0 : 1,
            }}
          >
            {/* CARD */}

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
              {/* TITLE */}

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

              {/* ITEMS */}

              <div className="space-y-6">
                {item.activities.map((activity, activityIndex) => (
                  <div
                    key={activityIndex}
                    className="
                        flex
                        items-center
                        gap-4
                      "
                  >
                    {/* TIME */}

                    <span
                      className="
                          min-w-[52px]

                          text-sm
                          md:text-base

                          text-[#7f7485]
                        "
                    >
                      {activity.time}
                    </span>

                    {/* DOT */}

                    <div
                      className={`
                          h-4
                          w-4

                          rounded-full

                          border-2

                          ${activity.dotColor}
                        `}
                    />

                    {/* TEXT */}

                    <p
                      className={`
                          text-sm
                          md:text-base

                          ${
                            activity.highlight
                              ? "font-semibold text-[#2d2331]"
                              : "text-[#6d6472]"
                          }
                        `}
                    >
                      {activity.text}

                      {activity.tag && (
                        <span className="text-blue-500"> {activity.tag}</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
