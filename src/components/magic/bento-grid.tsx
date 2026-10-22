import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type To = string;

/** Magic UI-style bento grid. */
export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid w-full auto-rows-[21rem] grid-cols-1 gap-4 md:grid-cols-3", className)}>{children}</div>;
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  to,
  cta,
}: {
  name: string;
  className?: string | undefined;
  background?: ReactNode;
  Icon: ComponentType<{ className?: string }>;
  description: string;
  to: To;
  cta: string;
}) {
  return (
    <div
      className={cn(
        "bento-card group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-navy/10 bg-card card-shadow",
        className,
      )}
    >
      <div aria-hidden="true">{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-7 transition-transform duration-300 group-hover:-translate-y-9">
        <Icon className="size-10 origin-left transform-gpu text-blue transition-transform duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="mt-2 text-xl font-bold tracking-tight">{name}</h3>
        <p className="max-w-lg leading-relaxed text-navy/70">{description}</p>
      </div>
      <div className="pointer-events-none absolute bottom-0 z-10 flex w-full translate-y-10 transform-gpu flex-row items-center p-5 opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Link
          to={to}
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-blue px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy"
        >
          {cta}
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-0 transition-colors duration-300 group-hover:bg-navy/[0.03]" />
    </div>
  );
}
