import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gold" | "surface";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-[6px] p-6 transition-all duration-500 luxury-ease",
          /* Default glass card */
          variant === "default" && [
            "glass",
            hover && "hover:border-white/[0.1] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]",
          ],
          /* Gold premium card */
          variant === "gold" && [
            "glass-gold",
            hover && "hover:border-accent-gold/30 hover:shadow-[0_0_40px_-8px_rgba(197,162,62,0.15)] hover:scale-[1.005]",
          ],
          /* Surface card */
          variant === "surface" && [
            "bg-surface border border-border",
            hover && "hover:border-border/80 hover:bg-surface-hover",
          ],
          className
        )}
        {...props}
      >
        {/* Inner shadow for depth */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[6px]"
          style={{
            boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.04)",
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card, type CardProps };
