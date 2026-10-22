import { useId, type SVGProps } from "react";
import { cn } from "@/lib/utils";

/** Magic UI-style dot pattern background. */
export function DotPattern({
  width = 20,
  height = 20,
  cx = 1.5,
  cy = 1.5,
  cr = 1.5,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { width?: number; height?: number; cx?: number; cy?: number; cr?: number }) {
  const id = useId();
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full fill-navy/15", className)}
      {...props}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
          <circle cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
