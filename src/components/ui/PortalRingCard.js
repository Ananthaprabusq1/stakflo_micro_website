{/* =========================================
    DYNAMIC VERSION
========================================= */}

export default function PortalRingCard({
    children,

    className = "",

    innerClassName = "",
}) {
    return (
        <div
            className={`
        portal-ring-card

        ${className}
      `}
        >
            {/* GLOW */}

            <div className="portal-ring-glow" />

            {/* INNER */}

            <div
                className={`
          portal-ring-inner

          ${innerClassName}
        `}
            >
                {children}
            </div>
        </div>
    );
}