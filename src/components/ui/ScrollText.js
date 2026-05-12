export default function ScrollText({
  items = [],
  speed = "20s",
  direction = "left",
  className = "",
  containerClassName = "",
}) {
  return (
    <div
      className={`
    relative
    w-full
    overflow-hidden
    whitespace-nowrap

    [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
    [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]

    ${containerClassName}
  `}
    >
      <div
        className={`
          flex
          w-max
          gap-2
          ${
            direction === "left"
              ? "animate-marquee-left"
              : "animate-marquee-right"
          }
          ${className}
        `}
        style={{
          animationDuration: speed,
        }}
      >
        {/* FIRST SET */}

        {items.map((item, index) => (
          <span key={index}>{item}</span>
        ))}

        {/* DUPLICATE FOR LOOP */}

        {items.map((item, index) => (
          <span key={`duplicate-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
