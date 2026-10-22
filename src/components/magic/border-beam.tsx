import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

/** Magic UI-style animated border beam. Place inside a `relative` rounded parent. */
export function BorderBeam({
  className,
  size = 150,
  duration = 10,
  delay = 0,
  borderWidth = 1.5,
  reverse = false,
}: {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  borderWidth?: number;
  reverse?: boolean;
}) {
  const transition: Transition = {
    repeat: Infinity,
    ease: "linear",
    duration,
    delay,
  };
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-transparent [border:var(--bw)_solid] [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
      style={{ "--bw": `${borderWidth}px` } as React.CSSProperties}
    >
      <motion.div
        className={cn("absolute aspect-square bg-gradient-to-l from-blue via-[#8ab0ff] to-transparent", className)}
        style={{ width: size, offsetPath: `rect(0 auto auto 0 round ${size}px)` }}
        initial={{ offsetDistance: reverse ? "100%" : "0%" }}
        animate={{ offsetDistance: reverse ? ["100%", "0%"] : ["0%", "100%"] }}
        transition={transition}
      />
    </div>
  );
}
