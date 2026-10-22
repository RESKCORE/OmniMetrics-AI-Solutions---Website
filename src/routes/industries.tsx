import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, CloudCog, Factory, HeartPulse, Landmark, ShoppingCart, type LucideIcon } from "lucide-react";
import { BandCTA, Container, OwnerNote, RichHero, SectionHeading, seo } from "@/components/site/ui";
import { Card } from "@/components/ui/card";
import { BlurFade } from "@/components/magic/blur-fade";
import { MarkerText } from "@/components/magic/marker-text";
import { INDUSTRIES } from "@/lib/content";
import industriesGrid from "@/assets/industries-grid.webp";
import bulb from "@/assets/idea-bulb.webp";

export const Route = createFileRoute("/industries")({
  head: () =>
    seo(
      "Industries | OmniMetrics AI Solutions Inc.",
      "Industry areas where analytics and software can be shaped around your decisions and operating conditions.",
      industriesGrid,
    ),
  component: Industries,
});

const IND_ICONS: LucideIcon[] = [Landmark, HeartPulse, ShoppingCart, Factory, CloudCog, Briefcase];

function Industries() {
  return (
    <>
      <RichHero
        crumbs={[{ label: "Industries" }]}
        tag="Industries"
        title={
          <>
            Analytics shaped around <MarkerText>the work you do.</MarkerText>
          </>
        }
        intro="The right measures and systems depend on the decisions, customers, and operating conditions in each business. We adapt our approach to your context and work with your team to make the output useful in practice."
        image={industriesGrid}
        imageAlt="Isometric factory, hospital, shop and bank buildings connected by green paths"
        signals={[[Landmark, "Finance"], [HeartPulse, "Health"], [ShoppingCart, "Retail"], [Factory, "Industry"]]}
        primary={{ label: "Discuss Your Industry", to: "/contact" }}
        secondary={{ label: "Our Capabilities", to: "/capabilities" }}
      />
      <Container>
        <section className="reference-section" aria-labelledby="ind-heading">
          <SectionHeading
            tag="Areas of focus"
            title="Contexts We Can Work Within"
            sub="Each sector brings its own measures, constraints, and rhythms — the approach adapts to yours."
          />
          <OwnerNote className="mx-auto mb-10 max-w-3xl" title="Illustrative industry scenarios">
            A retailer might track repeat purchases; a manufacturer might monitor stock and production exceptions; a SaaS team might explore onboarding drop-off. These examples describe possible use cases, not verified client experience.
          </OwnerNote>
          <div className="ref-services">
            {INDUSTRIES.map(([t, d], i) => {
              const Icon = IND_ICONS[i] ?? Briefcase;
              return (
                <BlurFade key={t} delay={(i % 4) * 0.06}>
                  <Card className="ref-service">
                    <div className="service-art"><Icon aria-hidden="true" /></div>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </Card>
                </BlurFade>
              );
            })}
          </div>
        </section>
      </Container>
      <BandCTA
        heading="Tell us about your context."
        copy="Every industry has its own questions. Share yours and we’ll explore how analytics and software could help."
        cta={{ label: "Discuss Your Industry", to: "/contact" }}
        image={bulb}
        imageAlt="Light bulb with lime filament and green gears"
      />
      <div className="pb-10" />
    </>
  );
}
