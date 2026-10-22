import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Magic UI-style infinite marquee. */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  repeat = 4,
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  repeat?: number;
}) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:0.75rem] [gap:var(--gap)]",
        className,
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i > 0}
          className={cn(
            "flex shrink-0 animate-marquee items-center justify-around [gap:var(--gap)]",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
