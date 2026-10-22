import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { seo } from "@/components/site/ui";
import servicesStack from "@/assets/services-stack.webp";

export const Route = createFileRoute("/software-development")({
  head: () =>
    seo(
      "Custom Software Development | OmniMetrics AI Solutions Inc.",
      "Design and build digital products and business applications with a clear purpose.",
      servicesStack,
    ),
  component: () => (
    <ServicePage
      title="Software Development"
      headline="Build software with a clear reason to exist."
      intro="We design and develop digital products and business applications around real user needs and operational goals. From discovery through launch and iteration, we help make requirements, trade-offs, and progress visible."
      stepsHeading="A delivery path, shaped to the engagement."
      stepsNote="Not every engagement includes every phase. We agree the scope that fits your need."
      steps={[
        ["Discovery & design", "Clarify users, needs, and constraints, then shape the experience and requirements."],
        ["Architecture", "Choose a structure that suits the problem, your systems, and how the product will be maintained."],
        ["Development & testing", "Build in visible increments and test against the agreed requirements."],
        ["Launch & iteration", "Release, observe how the software is used, and improve it based on evidence."],
      ]}
      close={{ heading: "Have a product or application in mind?", label: "Discuss a Software Project" }}
    />
  ),
});
