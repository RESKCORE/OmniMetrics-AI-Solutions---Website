import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { seo } from "@/components/site/ui";
import servicesStack from "@/assets/services-stack.webp";

export const Route = createFileRoute("/data-engineering")({
  head: () =>
    seo(
      "Data Engineering & Integration | OmniMetrics AI Solutions Inc.",
      "Connect and organize business data with practical engineering and integration services.",
      servicesStack,
    ),
  component: () => (
    <ServicePage
      title="Data Engineering & BI"
      headline="Build a stronger foundation for trusted reporting."
      intro="When information is spread across systems or defined in different ways, it becomes harder to use with confidence. We help teams connect, organize, and present data through suitable engineering, integration, and business intelligence work."
      stepsHeading="From scattered sources to reporting people trust."
      steps={[
        ["Map sources and definitions", "Understand where information lives, how it is defined, and where definitions conflict."],
        ["Design pipelines and integrations", "Plan dependable ways to move and combine data that suit your existing systems."],
        ["Organize and model", "Structure data consistently so the same measure means the same thing across teams."],
        ["Report and visualize", "Build dashboards and reporting experiences around the decisions your teams actually make."],
      ]}
      note={
        <>
          List only the tools, cloud platforms, warehouses, and reporting products OmniMetrics has practical experience
          supporting. No technology logos or vendor badges will be shown until approved. [Approved tools and platforms]
        </>
      }
      close={{ heading: "Need data your teams can rely on?", label: "Discuss a Data Engineering Need" }}
    />
  ),
});
