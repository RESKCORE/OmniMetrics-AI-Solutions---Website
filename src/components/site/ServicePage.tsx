import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { BlurFade } from "@/components/magic/blur-fade";
import { CloseBand, Container, OwnerNote, Pill, RichHero } from "./ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MarkerText } from "@/components/magic/marker-text";
import { SERVICE_DETAILS } from "@/lib/service-details";
import { DEMO_SCENARIOS, DEMO_TOOLS } from "@/lib/demo-content";
import { BarChart3, Check, Code2, Database, Search } from "lucide-react";
import servicesStack from "@/assets/services-stack.webp";

export function ServicePage({
  title,
  headline,
  intro,
  stepsHeading,
  steps,
  stepsNote,
  note,
  close,
}: {
  title: string;
  headline: ReactNode;
  intro: ReactNode;
  stepsHeading: string;
  steps: [string, string][];
  stepsNote?: string;
  note?: ReactNode;
  close: { heading: ReactNode; label: string };
}) {
  const details = SERVICE_DETAILS[title];
  const scenario = DEMO_SCENARIOS[title];
  return (
    <>
      <RichHero
        crumbs={[{ label: "Capabilities", to: "/capabilities" }, { label: title }]}
        tag={title}
        title={headline}
        intro={intro}
        image={servicesStack}
        imageAlt="Layered technology stack with database, code window, gears and green charts"
        signals={[[Search, "Assess"], [Database, "Structure"], [Code2, "Build"], [BarChart3, "Improve"]]}
        primary={{ label: "Book a Consultation", to: "/contact" }}
        secondary={{ label: "All Capabilities", to: "/capabilities" }}
      />
      <section className="border-t border-navy/10 py-20 sm:py-24">
        <Container>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="display max-w-2xl text-[clamp(2rem,4vw,3.25rem)]">{stepsHeading}</h2>
            {stepsNote && <p className="max-w-sm text-sm text-navy/70">{stepsNote}</p>}
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <BlurFade key={t} delay={i * 0.08}>
                <Card className="relative flex h-full flex-col gap-6 overflow-hidden p-7">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-blue/10 font-serif text-lg italic text-blue">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{t}</h3>
                    <p className="mt-3 leading-relaxed text-navy/75">{d}</p>
                  </div>
                </Card>
              </BlurFade>
            ))}
          </ol>
          {(note || DEMO_TOOLS[title]) && (
            <div className="mt-12 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <Pill>Tools & platforms</Pill>
              </div>
              <OwnerNote title="Sample toolkit · illustrative only" className="lg:col-span-9"><div className="flex flex-wrap gap-2">{DEMO_TOOLS[title]?.map(tool => <Pill key={tool}>{tool}</Pill>)}</div><p className="mt-4">Example technologies for this type of project, not verified certifications or vendor partnerships. The actual tools depend on the agreed scope.</p></OwnerNote>
            </div>
          )}
        </Container>
      </section>
      {scenario && <section className="border-t border-border py-16 sm:py-20"><Container><Pill>Fictional sample engagement</Pill><h2 className="mt-5 max-w-3xl text-3xl font-bold">{scenario.title}</h2><div className="mt-8 grid gap-8 md:grid-cols-2"><div><h3 className="text-lg font-bold">The project brief</h3><p className="mt-3 leading-relaxed text-muted-foreground">{scenario.brief}</p></div><div><h3 className="text-lg font-bold">Example deliverables</h3><p className="mt-3 leading-relaxed text-muted-foreground">{scenario.deliverable}</p></div></div></Container></section>}
      {details && <>
        <section className="border-t border-border bg-secondary/40 py-16 sm:py-20">
          <Container>
            <Pill>Possible engagement outputs</Pill>
            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl"><MarkerText>{details.focus}</MarkerText></h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">The exact deliverables depend on your starting point, priorities, and agreed scope. An engagement may include:</p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {details.outcomes.map(([heading, description], i) => <BlurFade key={heading} delay={i * 0.06}>
                <Check className="mb-4 size-6 text-leaf" aria-hidden="true" />
                <h3 className="text-lg font-bold">{heading}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
              </BlurFade>)}
            </div>
          </Container>
        </section>
        <section className="border-t border-border py-16 sm:py-20">
          <Container className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4"><Pill>Before we begin</Pill><h2 className="mt-5 text-3xl font-bold">A few useful questions.</h2><p className="mt-4 leading-relaxed text-muted-foreground">A clearer starting point helps keep the work focused on what your team needs.</p></div>
            <Accordion type="single" collapsible className="lg:col-span-7 lg:col-start-6">
              {details.questions.map(([question, answer], i) => <AccordionItem key={question} value={`question-${i}`}><AccordionTrigger className="text-base hover:text-leaf">{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}
            </Accordion>
          </Container>
        </section>
      </>}
      <CloseBand heading={close.heading} primary={{ label: close.label, to: "/contact" }} />
    </>
  );
}
