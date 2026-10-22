import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, BrainCircuit, LineChart, PenLine } from "lucide-react";
import { BandCTA, Container, CTA, RichHero, SectionHeading, seo } from "@/components/site/ui";
import { DEMO_ARTICLES, DEMO_NOTICE } from "@/lib/demo-content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { BlurFade } from "@/components/magic/blur-fade";
import { MarkerText } from "@/components/magic/marker-text";
import insightsBook from "@/assets/insights-book.webp";
import bulb from "@/assets/idea-bulb.webp";

export const Route = createFileRoute("/insights")({
  head: () =>
    seo(
      "Insights | OmniMetrics AI Solutions Inc.",
      "Perspectives on analytics, data quality, BI, software delivery, AI, product measurement, and technology hiring.",
      insightsBook,
    ),
  component: Insights,
});


const ARTICLE_ICONS = [BarChart3, BrainCircuit, LineChart] as const;

function Insights() {
  return (
    <>
      <RichHero
        crumbs={[{ label: "Insights" }]}
        tag="Insights"
        title={
          <>
            Practical thinking for <MarkerText>data-led teams.</MarkerText>
          </>
        }
        intro="Perspectives on analytics, data quality, business intelligence, software delivery, AI, product measurement, and technology hiring."
        image={insightsBook}
        imageAlt="Open book with green charts and a glowing lightbulb rising from its pages"
        signals={[[PenLine, "Write"], [BarChart3, "Analyze"], [BrainCircuit, "Question"], [LineChart, "Share"]]}
        primary={{ label: "Suggest a Topic", to: "/contact" }}
        secondary={{ label: "Our Services", to: "/capabilities" }}
      />
      <Container>
        <section className="reference-section" aria-labelledby="planned-heading">
          <SectionHeading
            tag="Sample reading room"
            title="Ideas Worth Exploring"
            sub={DEMO_NOTICE}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {DEMO_ARTICLES.map((article, i) => {
              const Icon = ARTICLE_ICONS[i] ?? PenLine;
              return <BlurFade key={article.title} delay={i * 0.07}>
                <Card className="ref-service h-full">
                  <div className="service-art"><Icon aria-hidden="true" /></div>
                  <span className="text-xs font-semibold text-leaf">{article.category} · Sample article</span>
                  <h3>{article.title}</h3><p>{article.summary}</p>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="article"><AccordionTrigger aria-label={`Read ${article.title}`}>Read article</AccordionTrigger><AccordionContent><div className="space-y-4">{article.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></AccordionContent></AccordionItem>
                  </Accordion>
                </Card>
              </BlurFade>;
            })}
          </div>
          <BlurFade delay={0.15}>
            <div className="ref-bottom-cta mt-8">
              <PenLine aria-hidden="true" />
              <div>
                <h2>Have a question you’d like us to write about?</h2>
                <p>Suggest a topic and we’ll consider it for a future article.</p>
              </div>
              <CTA to="/contact" className="h-9 text-xs">Suggest a Topic</CTA>
            </div>
          </BlurFade>
        </section>
      </Container>
      <BandCTA
        heading="Prefer a conversation instead?"
        copy="Skip the reading list — tell us your challenge directly and we’ll think it through together."
        cta={{ label: "Talk to Our Team", to: "/contact" }}
        image={bulb}
        imageAlt="Light bulb with lime filament and green gears"
      />
      <div className="pb-10" />
    </>
  );
}
