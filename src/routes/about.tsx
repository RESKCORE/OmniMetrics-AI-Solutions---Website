import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Code2, Search, Users } from "lucide-react";
import { BandCTA, Container, OwnerNote, RichHero, SectionHeading, seo } from "@/components/site/ui";
import { BlurFade } from "@/components/magic/blur-fade";
import { MarkerText } from "@/components/magic/marker-text";
import { DEMO_NOTICE, DEMO_TEAM } from "@/lib/demo-content";
import { WHY } from "@/lib/content";
import aboutTeam from "@/assets/about-team.webp";
import bulb from "@/assets/idea-bulb.webp";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About OmniMetrics AI Solutions Inc. | Analytics-Driven Software Company",
      "Learn how the team connects data analysis with practical software delivery.",
      aboutTeam,
    ),
  component: About,
});

const WHY_ICONS = [Search, BarChart3, Code2, Users] as const;

function About() {
  return (
    <>
      <RichHero
        crumbs={[{ label: "About" }]}
        tag="About OmniMetrics"
        title={
          <>
            We connect analysis <MarkerText>to action.</MarkerText>
          </>
        }
        intro="OmniMetrics AI Solutions Inc. is an analytics-driven software company. We bring data analysis and engineering together to help organizations understand their challenges, make informed decisions, and deliver technology that supports the work."
        image={aboutTeam}
        imageAlt="Team collaborating around an analytics dashboard with green charts"
        signals={[[Users, "Collaborate"], [Search, "Question"], [BarChart3, "Evidence"], [Code2, "Deliver"]]}
        primary={{ label: "Talk to Our Team", to: "/contact" }}
        secondary={{ label: "Explore Services", to: "/capabilities" }}
      />
      <Container>
        <section className="reference-section" aria-labelledby="how-heading">
          <SectionHeading
            tag="How we work"
            title="Principles That Shape Every Engagement"
            sub="Collaborative, evidence-aware, and focused on outcomes that can be explained and evaluated."
          />
          <div className="ref-process">
            {WHY.map(([t, d], i) => {
              const Icon = WHY_ICONS[i] ?? Search;
              return (
                <BlurFade key={t} delay={i * 0.07}>
                  <article className="process-item h-full">
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{t}</h3>
                      <p className="mt-2">{d}</p>
                    </div>
                  </article>
                </BlurFade>
              );
            })}
          </div>
        </section>
        <section className="reference-section" aria-labelledby="details-heading">
          <div className="ref-work-heading">
            <div>
              <span className="ref-tag">Company details</span>
              <h2 id="details-heading">People Behind the Possibilities</h2>
            </div>
            <p>Meet an illustrative team and company story. All details below are fictional samples for this preview.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <BlurFade><OwnerNote title="Sample company story"><p>Our illustrative story begins in 2021 with a small team bringing analytics and software delivery into one conversation.</p><p className="mt-3">From a first reporting prototype to integrated data platforms and thoughtful automation, the focus is on making technology useful in everyday work.</p></OwnerNote></BlurFade>
            <BlurFade delay={0.08}><OwnerNote title="Sample collaboration model">A distributed team connects strategy, data, design, and engineering. Small working groups share progress through discovery sessions, demonstrations, and clear handover documentation.</OwnerNote></BlurFade>
            <BlurFade delay={0.16}><OwnerNote title="Sample company location">Demo City · Distributed collaboration across time zones. A fictional studio for project workshops, product planning, and data discovery. No real office or credentials are claimed.</OwnerNote></BlurFade>
          </div>
        </section>
        <section className="reference-section">
          <SectionHeading tag="Sample team" title="Different Skills. Shared Curiosity." sub={DEMO_NOTICE} />
          <div className="grid gap-4 md:grid-cols-3">
            {DEMO_TEAM.map((person, i) => <BlurFade key={person.name} delay={i * 0.07}><OwnerNote title="Fictional team member"><Users className="mb-4 size-8 text-leaf" aria-hidden="true" /><h3 className="text-xl font-bold">{person.name}</h3><p className="mt-2 font-semibold text-leaf">{person.role}</p><p className="mt-3">{person.bio}</p></OwnerNote></BlurFade>)}
          </div>
        </section>
      </Container>
      <BandCTA
        heading="Want to talk through a challenge?"
        copy="Tell us what you want your data or software to help you do. Together, we’ll work out a sensible next step."
        cta={{ label: "Talk to Our Team", to: "/contact" }}
        image={bulb}
        imageAlt="Light bulb with lime filament and green gears"
      />
      <div className="pb-10" />
    </>
  );
}
