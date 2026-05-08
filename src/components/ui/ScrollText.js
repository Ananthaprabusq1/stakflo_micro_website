export default function ScrollText({
    items = [],
    speed = "20s",
    direction = "left",
    className = "",
}) {
    return (
        <div
            className="
        relative
        overflow-hidden
        whitespace-nowrap
        w-full
      "
        >
            <div
                className={`
          flex
          w-max
          gap-10
          ${direction === "left"
                        ? "animate-marquee-left"
                        : "animate-marquee-right"}
          ${className}
        `}
                style={{
                    animationDuration: speed,
                }}
            >
                {/* FIRST SET */}

                {items.map((item, index) => (
                    <span key={index}>
                        {item}
                    </span>
                ))}

                {/* DUPLICATE FOR LOOP */}

                {items.map((item, index) => (
                    <span key={`duplicate-${index}`}>
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}