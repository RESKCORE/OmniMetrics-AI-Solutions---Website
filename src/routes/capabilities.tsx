import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, CloudCog, Code2, Database, LineChart, Search, Sparkles, type LucideIcon } from "lucide-react";
import { BandCTA, Container, RichHero, SectionHeading, seo } from "@/components/site/ui";
import { Card } from "@/components/ui/card";
import { BlurFade } from "@/components/magic/blur-fade";
import { MarkerText } from "@/components/magic/marker-text";
import { CAPABILITIES, PROCESS } from "@/lib/content";
import servicesStack from "@/assets/services-stack.webp";
import bulb from "@/assets/idea-bulb.webp";

export const Route = createFileRoute("/capabilities")({
  head: () =>
    seo(
      "Capabilities | OmniMetrics AI Solutions Inc.",
      "Analytics, data engineering, business intelligence, software development, AI, and modernization services.",
      servicesStack,
    ),
  component: Capabilities,
});

const CAP_ICONS: LucideIcon[] = [BarChart3, Database, LineChart, Code2, Sparkles, CloudCog];

function Capabilities() {
  return (
    <>
      <RichHero
        crumbs={[{ label: "Capabilities" }]}
        tag="Our capabilities"
        title={
          <>
            From raw information to <MarkerText>real-world action.</MarkerText>
          </>
        }
        intro="Six connected capabilities that take work from an important question through to the data, insight, and software that follow."
        image={servicesStack}
        imageAlt="Layered technology stack with database, code window, gears and green charts"
        signals={[[Search, "Assess"], [Database, "Structure"], [Code2, "Build"], [BarChart3, "Improve"]]}
        primary={{ label: "Book a Consultation", to: "/contact" }}
        secondary={{ label: "See Our Work", to: "/work" }}
      />
      <Container>
        <section className="reference-section" aria-labelledby="cap-heading">
          <SectionHeading
            tag="What we do"
            title="Six Ways We Help You Move Forward"
            sub="Practical data and technology services built around the decisions your team needs to make."
          />
          <div className="ref-services">
            {CAPABILITIES.map((c, i) => {
              const Icon = CAP_ICONS[i] ?? BarChart3;
              return (
                <BlurFade key={c.title} delay={(i % 4) * 0.06}>
                  <Card className="ref-service">
                    <div className="service-art"><Icon aria-hidden="true" /></div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                    <Link to={c.to} aria-label={`${c.cta}`}>
                      {c.cta}
                      <ArrowRight className="arrow-dot" aria-hidden="true" />
                    </Link>
                  </Card>
                </BlurFade>
              );
            })}
          </div>
        </section>
      </Container>
      <BandCTA
        heading="Not sure which capability fits?"
        copy="Tell us what you are trying to decide or build, and we’ll help you work out a sensible starting point."
        cta={{ label: "Talk Through a Challenge", to: "/contact" }}
        image={bulb}
        imageAlt="Light bulb with lime filament and green gears"
      />
      <Container>
        <section className="reference-section" aria-labelledby="process-heading">
          <SectionHeading
            tag="How engagements run"
            title="A Clear Path From Question to Solution"
            sub="Every engagement follows the same careful arc, whatever the starting point."
          />
          <div className="ref-process">
            {PROCESS.slice(0, 3).map(([t, d], i) => (
              <BlurFade key={t} delay={i * 0.07}>
                <article className="process-item h-full">
                  <span className="flex size-[55px] shrink-0 items-center justify-center rounded-full bg-panel font-serif text-lg italic text-leaf">0{i + 1}</span>
                  <div>
                    <h3>{t}</h3>
                    <p className="mt-2">{d}</p>
                  </div>
                </article>
              </BlurFade>
            ))}
          </div>
        </section>
      </Container>
      <div className="pb-10" />
    </>
  );
}
