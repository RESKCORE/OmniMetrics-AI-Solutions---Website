import { BarChart3, BrainCircuit, Cloud, Code2, Database, LineChart, ShieldCheck, Sparkles, Users, Workflow, type LucideIcon } from "lucide-react";
import { Marquee } from "@/components/magic/marquee";
import { cn } from "@/lib/utils";

export type Topic = readonly [LucideIcon, string];

export const DEFAULT_TOPICS: readonly Topic[] = [
  [BarChart3, "Analytics"],
  [Database, "Data engineering"],
  [ShieldCheck, "Data quality"],
  [LineChart, "Business intelligence"],
  [Code2, "Software delivery"],
  [BrainCircuit, "AI & machine learning"],
  [Workflow, "Automation"],
  [Cloud, "Cloud modernization"],
  [Users, "Technology hiring"],
];

/** Shared dark scrolling band of icon chips, used on every page. */
export function TopicStrip({ topics = DEFAULT_TOPICS, label = "Areas we work in", className }: { topics?: readonly Topic[] | undefined; label?: string; className?: string }) {
  return (
    <section aria-label={label} className={cn("topic-strip", className)}>
      <span className="topic-strip-label"><Sparkles className="size-4" aria-hidden="true" />{label}</span>
      <div className="topic-strip-track">
        <Marquee repeat={3} className="[--duration:45s] [--gap:0.65rem] p-0">
          {topics.map(([Icon, t]) => (
            <span key={t} className="topic-chip">
              <span className="topic-chip-icon"><Icon className="size-3.5" aria-hidden="true" /></span>
              {t}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
