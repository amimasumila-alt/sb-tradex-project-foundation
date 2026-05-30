import { cn } from "@/utils/cn";

interface SbTradexWordmarkProps {
  className?: string;
  showTagline?: boolean;
}

export function SbTradexWordmark({ className, showTagline = true }: SbTradexWordmarkProps) {
  return (
    <div className={cn("flex flex-col items-start", className)}>
      <svg
        viewBox="0 0 360 40"
        className="h-6 w-auto sm:h-7 md:h-8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* SB TRADEX */}
        <text
          x="0"
          y="28"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontWeight="700"
          fontSize="32"
          letterSpacing="0.06em"
          fill="#E8E6E3"
        >
          SB TRADE
        </text>
        {/* X with upward trend line */}
        <text
          x="253"
          y="28"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontWeight="700"
          fontSize="32"
          letterSpacing="0.06em"
          fill="#C5A23E"
        >
          X
        </text>
        {/* Subtle upward trend vector integrated into X */}
        <line
          x1="258"
          y1="30"
          x2="280"
          y2="10"
          stroke="#C5A23E"
          strokeWidth="1"
          opacity="0.5"
        />
        <polyline
          points="258,30 268,22 274,18 280,10"
          stroke="#C5A23E"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />
        {/* Arrow tip */}
        <polygon points="280,10 276,14 280,14" fill="#C5A23E" opacity="0.5" />
      </svg>
      {showTagline && (
        <span className="label-uppercase text-text-muted mt-0.5 text-[9px] sm:text-[10px]">
          by IKTAJ GROUP
        </span>
      )}
    </div>
  );
}
