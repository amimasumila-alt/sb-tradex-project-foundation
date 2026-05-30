import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-gold" | "outline-gold" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary-gold", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-display font-semibold tracking-wide transition-all duration-500",
          "luxury-ease focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
          "disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed",
          "active:scale-[0.98]",
          /* Size Variants */
          size === "sm" && "px-4 py-2 text-xs tracking-[0.1em] uppercase rounded-[2px]",
          size === "md" && "px-7 py-3 text-sm tracking-[0.08em] uppercase rounded-[2px]",
          size === "lg" && "px-10 py-4 text-sm tracking-[0.1em] uppercase rounded-[2px]",
          /* Primary Gold */
          variant === "primary-gold" && [
            "bg-accent-gold text-bg-primary overflow-hidden",
            "hover:bg-accent-gold-light hover:shadow-[0_0_35px_-4px_rgba(197,162,62,0.35)] hover:scale-[1.02]",
          ],
          /* Outline Gold */
          variant === "outline-gold" && [
            "border border-accent-gold/40 text-accent-gold bg-transparent",
            "hover:bg-accent-gold/8 hover:border-accent-gold/70 hover:shadow-[0_0_25px_-4px_rgba(197,162,62,0.2)] hover:scale-[1.01]",
          ],
          /* Ghost */
          variant === "ghost" && [
            "text-text-secondary bg-transparent",
            "hover:text-text-primary hover:bg-surface-hover",
          ],
          /* Destructive */
          variant === "destructive" && [
            "bg-loss/10 text-loss border border-loss/20",
            "hover:bg-loss/20 hover:border-loss/40",
          ],
          className
        )}
        {...props}
      >
        {/* Gold shimmer sweep for primary */}
        {variant === "primary-gold" && (
          <span className="absolute inset-0 overflow-hidden rounded-[2px]">
            <span
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700"
              style={{
                background:
                  "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.15) 50%, transparent 75%)",
                backgroundSize: "200% 100%",
                animation: "gold-shimmer 3s ease-in-out infinite",
              }}
            />
          </span>
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };
