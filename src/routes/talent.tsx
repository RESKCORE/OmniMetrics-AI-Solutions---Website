import { createFileRoute } from "@tanstack/react-router";
import { Building2, Code2, UserRound, Users } from "lucide-react";
import { BandCTA, Container, CTA, Eyebrow, OwnerNote, RichHero, seo } from "@/components/site/ui";
import { BlurFade } from "@/components/magic/blur-fade";
import { DotPattern } from "@/components/magic/dot-pattern";
import { MarkerText } from "@/components/magic/marker-text";
import { DEMO_ROLES } from "@/lib/demo-content";
import talentNetwork from "@/assets/talent-network.webp";
import bulb from "@/assets/idea-bulb.webp";

export const Route = createFileRoute("/talent")({
  head: () =>
    seo(
      "Analytics & Software Staffing | OmniMetrics AI Solutions Inc.",
      "Discuss technology talent support for analytics, data, and software roles.",
      talentNetwork,
    ),
  component: Talent,
});

function Talent() {
  return (
    <>
      <RichHero
        crumbs={[{ label: "Talent" }]}
        tag="Talent"
        title={
          <>
            Bring data and software skills <MarkerText>into your team.</MarkerText>
          </>
        }
        intro="Tell us about the capability you need, the work involved, and how your team operates. We’ll discuss the available talent-support model and confirm role requirements before beginning a search."
        image={talentNetwork}
        imageAlt="Professional avatars connected by glowing green network lines"
        signals={[[Users, "Connect"], [Code2, "Match"], [Building2, "Support"], [UserRound, "Grow"]]}
        primary={{ label: "Find Talent", to: "/contact" }}
        secondary={{ label: "For Professionals", to: "/contact" }}
      />
      <Container>
        <section className="reference-section grid gap-4 lg:grid-cols-2" aria-label="Talent options">
          <BlurFade>
            <article
              id="employers"
              className="band-gradient card-shadow relative h-full scroll-mt-24 overflow-hidden rounded-2xl p-8 text-white sm:p-12"
            >
              <DotPattern className="fill-white/10 [mask-image:linear-gradient(to_bottom_left,white,transparent_70%)]" />
              <div className="relative">
                <Eyebrow className="text-white/60">For employers</Eyebrow>
                <h2 className="display mt-5 text-4xl">Discuss the role you need filled.</h2>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Tell us about the role, skills, and team context. We’ll discuss whether an individual specialist, team
                  augmentation, or another agreed staffing model is the right fit.
                </p>
                <OwnerNote inverse className="mt-8" title="Sample staffing models">
                  <ul className="space-y-3"><li><strong>Specialist support</strong> — an individual contributor for a defined skill gap.</li><li><strong>Team augmentation</strong> — data and engineering skills alongside your existing team.</li><li><strong>Project team</strong> — a small group shaped around a scoped delivery goal.</li></ul><p className="mt-4">Illustrative offerings only; availability and terms are not confirmed.</p>
                </OwnerNote>
                <CTA to="/contact" variant="inverse" className="mt-8">
                  Find Talent
                </CTA>
              </div>
            </article>
          </BlurFade>
          <BlurFade delay={0.1}>
            <article
              id="professionals"
              className="card-shadow h-full scroll-mt-24 rounded-2xl border border-navy/10 bg-white p-8 sm:p-12"
            >
              <Eyebrow className="text-navy/60">For professionals</Eyebrow>
              <h2 className="display mt-5 text-4xl">Share the work you want to do.</h2>
              <p className="mt-6 text-lg leading-relaxed text-navy/80">
                Explore opportunities in analytics, data, and software. Share the kind of work you want to do and the
                skills you bring.
              </p>
              <OwnerNote className="mt-8" title="Sample roles · not live vacancies">
                <ul className="space-y-5">{DEMO_ROLES.map(role => <li key={role.title}><h3 className="font-bold">{role.title}</h3><p className="mt-1">{role.detail}</p></li>)}</ul>
              </OwnerNote>
              <CTA to="/contact" variant="outline" className="mt-8">
                Discuss Your Interests
              </CTA>
            </article>
          </BlurFade>
        </section>
      </Container>
      <BandCTA
        heading="The right skills change everything."
        copy="Whether you are hiring or looking for your next role, start the conversation today."
        cta={{ label: "Get in Touch", to: "/contact" }}
        image={bulb}
        imageAlt="Light bulb with lime filament and green gears"
      />
      <div className="pb-10" />
    </>
  );
}
