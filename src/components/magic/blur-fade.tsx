import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Magic UI-style blur fade-in on scroll into view. */
export function BlurFade({
  children,
  className,
  delay = 0,
  yOffset = 6,
  duration = 0.3,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "80px" });
  const reduced = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={{ y: inView || reduced ? 0 : yOffset, opacity: 1 }}
      transition={{ delay: reduced ? 0 : Math.min(delay, 0.12), duration: reduced ? 0 : duration, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
