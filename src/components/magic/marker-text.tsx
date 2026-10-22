import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MarkerText({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.span
      className={cn("marker-text", className)}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
    >
      <motion.span
        aria-hidden="true"
        className="marker-stroke"
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <span className="marker-label">{children}</span>
    </motion.span>
  );
}