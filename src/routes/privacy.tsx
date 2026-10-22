import { createFileRoute } from "@tanstack/react-router";
import { Container, OwnerNote, PageHero, seo } from "@/components/site/ui";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    ...seo("Privacy Policy | OmniMetrics AI Solutions Inc.", "Privacy policy for OmniMetrics AI Solutions Inc."),
  }),
  component: () => (
    <>
      <PageHero crumbs={[{ label: "Privacy Policy" }]} eyebrow="Legal" title="Privacy Policy" intro="How personal information is collected and used." />
      <Container className="pb-24">
        <OwnerNote title="Sample legal content · not approved" className="max-w-3xl">Illustrative text for preview only. Replace with an approved notice before launch; this is not legal advice.</OwnerNote>
        <div className="mt-10 max-w-3xl space-y-10">
          <section><h2 className="text-2xl font-bold">Information you share</h2><p className="mt-4 leading-relaxed text-muted-foreground">Sample notice: a contact form may request your name, email, company, and project description. In this preview, the form checks entries but does not send an enquiry.</p></section>
          <section><h2 className="text-2xl font-bold">Why information might be used</h2><p className="mt-4 leading-relaxed text-muted-foreground">Illustrative purposes include responding to questions, discussing a project, and arranging a follow-up. These examples are not a confirmed description of production data practices.</p></section>
          <section><h2 className="text-2xl font-bold">Storage and service providers</h2><p className="mt-4 leading-relaxed text-muted-foreground">The final notice must identify the actual systems, retention periods, service providers, and safeguards used before real enquiries are collected.</p></section>
          <section><h2 className="text-2xl font-bold">Your choices</h2><p className="mt-4 leading-relaxed text-muted-foreground">An approved notice should explain how visitors can request access, correction, or deletion and provide a verified contact channel. The sample email on this site is not active.</p></section>
        </div>
      </Container>
    </>
  ),
});
