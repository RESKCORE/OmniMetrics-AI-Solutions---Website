import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Code2, RefreshCw, Search, Database } from "lucide-react";
import { BandCTA, Container, OwnerNote, RichHero, SectionHeading, seo } from "@/components/site/ui";
import { BlurFade } from "@/components/magic/blur-fade";
import { MarkerText } from "@/components/magic/marker-text";
import { DEMO_CASES, DEMO_NOTICE } from "@/lib/demo-content";
import { PROCESS } from "@/lib/content";
import workDashboard from "@/assets/work-dashboard.webp";
import bulb from "@/assets/idea-bulb.webp";

export const Route = createFileRoute("/work")({
  head: () =>
    seo(
      "Our Work | OmniMetrics AI Solutions Inc.",
      "How OmniMetrics presents case studies: the question, the work, and verified results.",
      workDashboard,
    ),
  component: Work,
});

const STEP_ICONS = [Search, Database, BarChart3, Code2, RefreshCw] as const;

function Work() {
  return (
    <>
      <RichHero
        crumbs={[{ label: "Our Work" }]}
        tag="Our work"
        title={
          <>
            Evidence matters. So does <MarkerText>the work behind it.</MarkerText>
          </>
        }
        intro="Explore fictional project examples showing how analytics, connected data, and software could address everyday business challenges."
        image={workDashboard}
        imageAlt="Analytics dashboard with green revenue charts and a magnifying glass"
        signals={[[Search, "Question"], [Database, "Connect"], [BarChart3, "Analyze"], [Code2, "Deliver"]]}
        primary={{ label: "Start a Conversation", to: "/contact" }}
        secondary={{ label: "Our Capabilities", to: "/capabilities" }}
      />
      <Container>
        <section className="reference-section" aria-labelledby="cases-heading">
          <SectionHeading
            tag="Sample case studies"
            title="A Closer Look at What’s Possible"
            sub={DEMO_NOTICE}
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {DEMO_CASES.map((project, i) => <BlurFade key={project.client} delay={i * 0.07}><OwnerNote className="h-full" title="Fictional project"><BarChart3 className="mb-4 size-8 text-leaf" aria-hidden="true" /><p className="font-semibold text-leaf">{project.category}</p><h3 className="mt-3 text-xl font-bold">{project.title}</h3><p className="mt-2 font-semibold">{project.client} · Sample client</p><h4 className="mt-5 font-bold">The challenge</h4><p className="mt-2">{project.challenge}</p><h4 className="mt-4 font-bold">The approach</h4><p className="mt-2">{project.solution}</p><p className="mt-5 font-semibold">{project.output}</p><p className="mt-4 text-xs">Example tools: {project.stack}</p></OwnerNote></BlurFade>)}
          </div>
        </section>
        <section className="reference-section" aria-labelledby="engagement-heading">
          <SectionHeading
            tag="Meanwhile"
            title="How a Typical Engagement Proceeds"
            sub="The same careful arc, whatever the starting point — from first question to lasting result."
          />
          <div className="ref-process">
            {PROCESS.map(([t, d], i) => {
              const Icon = STEP_ICONS[i] ?? Search;
              return (
                <BlurFade key={t} delay={(i % 3) * 0.07}>
                  <article className="process-item h-full">
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{t}</h3>
                      <strong>Step 0{i + 1}</strong>
                      <p>{d}</p>
                    </div>
                  </article>
                </BlurFade>
              );
            })}
          </div>
        </section>
      </Container>
      <BandCTA
        heading="Have a challenge we could work on together?"
        copy="Bring us the question, the process, or the product idea — we’ll help you find a sensible next step."
        cta={{ label: "Start a Conversation", to: "/contact" }}
        image={bulb}
        imageAlt="Light bulb with lime filament and green gears"
      />
      <div className="pb-10" />
    </>
  );
}
