import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { seo } from "@/components/site/ui";
import servicesStack from "@/assets/services-stack.webp";

export const Route = createFileRoute("/modernization")({
  head: () =>
    seo(
      "Cloud & Application Modernization | OmniMetrics AI Solutions Inc.",
      "Assess existing systems and plan a practical path to architectures that better support your needs.",
      servicesStack,
    ),
  component: () => (
    <ServicePage
      title="Cloud & Application Modernization"
      headline="Improve the foundations behind your digital services."
      intro="We help teams assess existing systems, plan modernization, and move toward architectures that better support their needs."
      stepsHeading="Modernize in steps you can evaluate."
      steps={[
        ["Assess current systems", "Understand what exists today, what works, and what is holding teams back."],
        ["Plan the path", "Agree priorities, sequencing, and trade-offs before committing to change."],
        ["Move incrementally", "Make changes in manageable stages that keep services running."],
        ["Hand over and support", "Make sure your team can own, run, and keep improving the result."],
      ]}
      close={{ heading: "Planning changes to existing systems?", label: "Discuss Modernization" }}
    />
  ),
});
