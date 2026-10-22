import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/magic/border-beam";

const float = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: [0, -8, 0] },
  transition: {
    opacity: { duration: 0.5, delay },
    y: { duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay },
  },
});

/** Abstract, explicitly illustrative analytics workspace. Blue/white theme, no real data. */
export function HeroVisual() {
  return (
    <figure
      className="relative mx-auto aspect-[5/4.4] w-full max-w-[600px]"
      aria-label="Illustrative diagram: a business question, connected data sources, a labelled trend chart and a decision workflow"
    >
      {/* orbital connectors */}
      <svg className="absolute inset-0 h-full w-full text-blue" viewBox="0 0 500 440" fill="none" aria-hidden="true">
        <ellipse cx="260" cy="225" rx="230" ry="200" stroke="currentColor" strokeOpacity=".18" />
        <ellipse cx="260" cy="225" rx="170" ry="148" stroke="currentColor" strokeOpacity=".12" strokeDasharray="2 5" />
        <path d="M120 120 C 180 160, 200 200, 250 210" stroke="currentColor" strokeOpacity=".5" />
        <path d="M120 300 C 190 280, 200 240, 250 230" stroke="currentColor" strokeOpacity=".5" />
      </svg>

      {/* Question card */}
      <motion.div
        {...float(0.1)}
        className="card-shadow absolute left-0 top-[4%] w-[46%] rounded-2xl border border-navy/10 bg-white p-4"
      >
        <p className="eyebrow text-navy/60">Question</p>
        <p className="mt-2 text-[0.95rem] font-semibold leading-snug tracking-tight">
          Which step in the process is slowing teams down?
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Badge variant="outline" className="px-2 py-0.5 text-[10px]">Define</Badge>
          <Badge variant="outline" className="px-2 py-0.5 text-[10px]">Measure</Badge>
          <Badge className="border-blue bg-blue px-2 py-0.5 text-[10px] text-white">Decide</Badge>
        </div>
      </motion.div>

      {/* Main chart panel */}
      <motion.div
        {...float(0.25)}
        className="band-gradient card-shadow absolute right-0 top-[18%] w-[66%] rounded-2xl p-5 text-white"
      >
        <BorderBeam size={120} duration={9} />
        <div className="flex items-center justify-between">
          <p className="eyebrow text-white/70">Trend · illustrative</p>
          <Badge variant="inverse" className="px-2 py-0.5 text-[10px]">Sample</Badge>
        </div>
        <svg viewBox="0 0 280 130" className="mt-4 w-full" aria-hidden="true">
          {[20, 55, 90].map((y) => (
            <line key={y} x1="0" x2="280" y1={y} y2={y} stroke="#ffffff" strokeOpacity=".15" />
          ))}
          {[30, 70, 110, 150, 190, 230, 270].map((x, i) => (
            <rect key={x} x={x - 7} y={110 - (i % 3 + 1) * 14} width="14" height={(i % 3 + 1) * 14} fill="#ffffff" fillOpacity=".18" />
          ))}
          <path
            className="draw-line"
            d="M0 100 L40 92 L80 96 L120 70 L160 74 L200 48 L240 40 L280 22"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.25"
          />
          <circle cx="200" cy="48" r="5" fill="var(--blue)" stroke="#ffffff" strokeWidth="2" />
          <line x1="200" y1="48" x2="200" y2="118" stroke="#ffffff" strokeDasharray="2 3" strokeOpacity=".6" />
        </svg>
        <div className="mt-2 flex justify-between text-[10px] text-white/70">
          <span>Period A</span>
          <span className="text-white">← Annotate what changed</span>
          <span>Period B</span>
        </div>
      </motion.div>

      {/* Data sources */}
      <motion.div {...float(0.4)} className="absolute bottom-[6%] left-[2%] grid w-[38%] grid-cols-2 gap-2">
        {["CRM", "Ops", "Product", "Finance"].map((s, i) => (
          <div
            key={s}
            className={`card-shadow rounded-xl border px-3 py-2.5 text-[11px] font-semibold ${
              i === 0 ? "border-blue bg-blue text-white" : "border-navy/10 bg-white"
            }`}
          >
            <span className="block text-[9px] font-medium opacity-60">Source</span>
            {s}
          </div>
        ))}
      </motion.div>

      {/* Workflow */}
      <motion.div
        {...float(0.55)}
        className="card-shadow absolute bottom-0 right-[4%] w-[50%] rounded-2xl border border-navy/10 bg-white p-4"
      >
        <p className="eyebrow text-navy/60">Next step</p>
        <ol className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold">
          <li className="rounded-md border border-navy/20 px-2 py-1">Insight</li>
          <li aria-hidden="true">→</li>
          <li className="rounded-md border border-navy/20 px-2 py-1">Rule</li>
          <li aria-hidden="true">→</li>
          <li className="rounded-md bg-blue px-2 py-1 text-white">Workflow</li>
        </ol>
      </motion.div>
      <figcaption className="sr-only">Illustration only — not client data.</figcaption>
    </figure>
  );
}
