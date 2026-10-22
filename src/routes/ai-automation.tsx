import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { seo } from "@/components/site/ui";
import servicesStack from "@/assets/services-stack.webp";

export const Route = createFileRoute("/ai-automation")({
  head: () =>
    seo(
      "AI & Intelligent Automation | OmniMetrics AI Solutions Inc.",
      "Assess practical AI and automation use cases and build them with appropriate human oversight.",
      servicesStack,
    ),
  component: () => (
    <ServicePage
      title="AI & Intelligent Automation"
      headline="Practical AI, with people in the loop."
      intro="Identify where machine learning, generative AI, or automation may support a practical business task. We help assess use cases, prepare the data and workflows, and develop solutions with appropriate human oversight."
      stepsHeading="Start with the task, not the technology."
      steps={[
        ["Assess the use case", "Look at the task, its risks, and whether AI or simpler automation is the sensible option."],
        ["Prepare data and workflow", "Understand the data available and where the solution would fit in day-to-day work."],
        ["Build with oversight", "Develop the solution with clear points for human review, correction, and accountability."],
        ["Monitor and refine", "Check how it performs in practice and revisit assumptions as conditions change."],
      ]}
      close={{ heading: "Wondering whether AI fits a task?", label: "Discuss an AI Use Case" }}
    />
  ),
});
