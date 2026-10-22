import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BarChart3, Code2, Database, Lightbulb, MapPin, MessageSquareQuote, Search, Share2, Sparkles, TrendingUp, Workflow } from "lucide-react";
import { Container, CTA, seo } from "@/components/site/ui";
import { Card } from "@/components/ui/card";
import { BlurFade } from "@/components/magic/blur-fade";
import dataIntelligence from "@/assets/data-intelligence.webp";
import bulb from "@/assets/idea-bulb.webp";
import { MarkerText } from "@/components/magic/marker-text";
import { TopicStrip } from "@/components/magic/topic-strip";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "OmniMetrics AI Solutions Inc. | Data, Software & AI",
      "Analytics-driven software, data engineering, and intelligent automation. Turn business questions into practical digital solutions with OmniMetrics.",
      dataIntelligence,
    ),
  component: Home,
});

const services = [
  { title: "Data Strategy & Analytics", description: "Turn business data into clear insights and better-informed decisions.", to: "/data-analytics", Icon: BarChart3 },
  { title: "Data Engineering & Integration", description: "Connect your sources and build dependable foundations for your data.", to: "/data-engineering", Icon: Database },
  { title: "Custom Software Development", description: "Build digital products and applications around real business needs.", to: "/software-development", Icon: Code2 },
  { title: "AI & Intelligent Automation", description: "Put intelligent tools to work on practical tasks and workflows.", to: "/ai-automation", Icon: Workflow },
] as const;

function Home() {
  return <div className="reference-home">
    <div className="hero-shell">
      <Container>
      <section className="reference-hero">
        <BlurFade>
          <span className="ref-tag">Your data & technology partner</span>
          <h1>Turning Your Data<br className="hidden sm:block" /> into Decisions<br className="hidden sm:block" /> <MarkerText>That Matter</MarkerText></h1>
          <p>OmniMetrics AI Solutions Inc. brings analytics, data engineering, and software together to help your business move from insight to action.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTA to="/contact" className="rounded-lg text-xs">Book a Consultation</CTA>
            <CTA to="/capabilities" variant="outline" className="rounded-lg text-xs">View Our Services</CTA>
          </div>
        </BlurFade>
        <div className="hero-art">
          <img src={dataIntelligence} alt="Green data columns connected to a database and processing unit" width={1024} height={1024} fetchPriority="high" decoding="auto" />
          <div className="hero-signals">
            {([[Share2, "Connect"], [TrendingUp, "Understand"], [Sparkles, "Build"], [MapPin, "Act"]] as const).map(([Icon, label]) => {
              return <div key={label} className="hero-signal"><span className="signal-icon"><Icon className="size-5" aria-hidden="true" /></span><span>{label}</span></div>;
            })}
          </div>
        </div>
      </section>
      <TopicStrip />
      </Container>
    </div>
    <Container>
      <section className="reference-section" aria-labelledby="services-heading">
        <div className="ref-section-heading"><span className="ref-tag">Our services</span><h2 id="services-heading">Solutions to Move Your Business Forward</h2><p>Practical data and technology services built around<br className="hidden sm:block" /> the decisions your team needs to make.</p></div>
        <div className="ref-services">
          {services.map(({ title, description, to, Icon }) => <Card key={title} className="ref-service"><div className="service-art"><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{description}</p><Link to={to} aria-label={`Learn more about ${title}`}>Learn more<ArrowRight className="arrow-dot" aria-hidden="true" /></Link></Card>)}
        </div>
      </section>
      <section className="reference-band">
        <h2>Let’s Make Things Happen</h2><p>Tell us what you want your data or software to help you do. Together, we’ll work out a sensible next step.</p><CTA to="/contact" className="bg-lime text-primary hover:bg-lime/90 h-9 rounded-full text-xs">Discuss Your Project</CTA><img src={bulb} alt="Light bulb with lime filament and green gears" width={1024} height={1024} loading="lazy" decoding="async" />
      </section>
      <section className="reference-section" aria-labelledby="approach-heading">
        <div className="ref-work-heading"><div><span className="ref-tag">Our approach</span><h2 id="approach-heading">From Better Questions to Useful Solutions</h2></div><p>Analytical thinking and practical delivery, connected from the very beginning.</p></div>
        <div className="ref-process">
          <article className="process-item"><Search aria-hidden="true" /><div><h3>Start with the business</h3><strong>Understand</strong><p>Define the question, the context, and the decision that matters.</p></div></article>
          <article className="process-item"><BarChart3 aria-hidden="true" /><div><h3>Find the useful signal</h3><strong>Analyze</strong><p>Connect the data and explain findings your team can act on.</p></div></article>
          <article className="process-item"><Code2 aria-hidden="true" /><div><h3>Put insight to work</h3><strong>Build</strong><p>Turn findings into software, workflows, and digital products.</p></div></article>
        </div>
        <div className="ref-proof" role="note"><MessageSquareQuote aria-hidden="true" /><div><span>Sample testimonial · fictional</span><p>“We finally had a shared view of the numbers and a clear plan for what to do next.” — Taylor Reed, sample operations lead at Northstar Retail.</p></div><Link to="/work" className="ml-auto shrink-0" aria-label="Explore our work"><ArrowUpRight className="size-5" /></Link></div>
        <div className="ref-bottom-cta"><Lightbulb aria-hidden="true" /><div><h2>Ready to take your next idea forward?</h2><p>Connect with OmniMetrics to discuss your business challenge.</p></div><CTA to="/contact" className="h-9 text-xs">Let’s Talk</CTA></div>
      </section>
    </Container>
  </div>;
}
