import { cn } from "@/utils/cn";

interface IkTajMonogramProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function IkTajMonogram({ className, size = "md" }: IkTajMonogramProps) {
  const dimensions = {
    sm: { w: 28, h: 28 },
    md: { w: 40, h: 40 },
    lg: { w: 56, h: 56 },
  };

  const { w, h } = dimensions[size];

  return (
    <svg
      viewBox="0 0 80 80"
      width={w}
      height={h}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      {/* Shield frame - the "G" wrapping protectively */}
      <path
        d="M40 6 L68 20 L68 52 Q68 68 40 76 Q12 68 12 52 L12 20 Z"
        stroke="#C5A23E"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="miter"
      />
      {/* Inner shield accent */}
      <path
        d="M40 12 L62 23 L62 50 Q62 63 40 70 Q18 63 18 50 L18 23 Z"
        stroke="#C5A23E"
        strokeWidth="0.5"
        fill="none"
        opacity="0.3"
      />
      {/* Central pillar "I" */}
      <line x1="40" y1="22" x2="40" y2="58" stroke="#C5A23E" strokeWidth="2.5" />
      {/* Top serif */}
      <line x1="33" y1="22" x2="47" y2="22" stroke="#C5A23E" strokeWidth="2" />
      {/* Bottom serif */}
      <line x1="33" y1="58" x2="47" y2="58" stroke="#C5A23E" strokeWidth="2" />
      {/* Geometric accent dots - sacred geometry */}
      <circle cx="40" cy="16" r="1" fill="#C5A23E" opacity="0.6" />
      <circle cx="40" cy="64" r="1" fill="#C5A23E" opacity="0.6" />
    </svg>
  );
}
