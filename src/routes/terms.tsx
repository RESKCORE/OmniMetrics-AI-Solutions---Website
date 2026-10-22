import { createFileRoute } from "@tanstack/react-router";
import { Container, OwnerNote, PageHero, seo } from "@/components/site/ui";

export const Route = createFileRoute("/terms")({
  head: () => seo("Terms of Use | OmniMetrics AI Solutions Inc.", "Terms of use for the OmniMetrics AI Solutions Inc. website."),
  component: () => (
    <>
      <PageHero crumbs={[{ label: "Terms of Use" }]} eyebrow="Legal" title="Terms of Use" intro="Terms that apply to use of this website." />
      <Container className="pb-24">
        <OwnerNote title="Sample legal content · not approved" className="max-w-3xl">Illustrative text for preview only. Replace with an approved notice before launch; this is not legal advice.</OwnerNote>
        <div className="mt-10 max-w-3xl space-y-10">
          <section><h2 className="text-2xl font-bold">Using the website</h2><p className="mt-4 leading-relaxed text-muted-foreground">Sample terms: this preview provides general information about possible data, software, and AI services. Fictional projects, profiles, roles, and articles are demonstration content only.</p></section>
          <section><h2 className="text-2xl font-bold">Project engagements</h2><p className="mt-4 leading-relaxed text-muted-foreground">A real engagement would require a separate written agreement defining scope, deliverables, fees, responsibilities, and acceptance criteria. This preview does not offer contractual commitments.</p></section>
          <section><h2 className="text-2xl font-bold">Content and examples</h2><p className="mt-4 leading-relaxed text-muted-foreground">Sample outcomes and tool lists are illustrative, not guarantees. Listed roles are not live vacancies and sample testimonials do not represent real client endorsements.</p></section>
          <section><h2 className="text-2xl font-bold">Before launch</h2><p className="mt-4 leading-relaxed text-muted-foreground">The owner must supply and approve applicable terms, intellectual-property provisions, liability language, and governing-law details. This sample is not legal advice or an approved agreement.</p></section>
        </div>
      </Container>
    </>
  ),
});
