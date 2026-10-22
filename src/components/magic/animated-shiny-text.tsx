import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Magic UI-style animated shiny text. */
export function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 120,
}: {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}) {
  return (
    <span
      style={{ "--shiny-width": `${shimmerWidth}px` } as CSSProperties}
      className={cn(
        "animate-shiny-text bg-gradient-to-r from-transparent via-navy/90 via-50% to-transparent bg-clip-text bg-no-repeat text-navy/60 [background-position:0_0] [background-size:var(--shiny-width)_100%]",
        className,
      )}
    >
      {children}
    </span>
  );
}
