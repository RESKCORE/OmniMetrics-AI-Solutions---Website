import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { seo } from "@/components/site/ui";
import servicesStack from "@/assets/services-stack.webp";

export const Route = createFileRoute("/data-analytics")({
  head: () =>
    seo(
      "Data Analytics & Business Intelligence | OmniMetrics AI Solutions Inc.",
      "Get support with analytics strategy, reporting, dashboards, data interpretation, and decision support.",
      servicesStack,
    ),
  component: () => (
    <ServicePage
      title="Data & Analytics"
      headline="Turn business questions into decision-ready insight."
      intro="We help teams define useful measures, understand their data, and communicate findings clearly. Our work can include analytics strategy, data assessment, performance reporting, dashboard development, and ongoing measurement—shaped around the decisions your organization needs to make."
      stepsHeading="How an analytics engagement can take shape."
      steps={[
        ["Define the question", "Agree the decision the work should support, who will act on it, and what a useful answer looks like."],
        ["Assess data and measures", "Review sources, definitions, quality, and gaps so limitations are understood before conclusions are drawn."],
        ["Analyze and communicate", "Work through the data and present findings, reasoning, and caveats in a form stakeholders can challenge."],
        ["Put the findings to work", "Where it helps, carry findings into reporting, measurement, workflows, or software changes."],
      ]}
      close={{ heading: "Have a question your data should answer?", label: "Talk to Our Analytics Team" }}
    />
  ),
});
