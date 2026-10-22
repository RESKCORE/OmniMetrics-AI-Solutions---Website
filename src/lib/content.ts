export const CAPABILITIES = [
  {
    n: "01",
    title: "Data Strategy & Analytics",
    body: "Clarify the questions your business needs to answer. We help define useful measures, analyze performance, and create reporting and decision-support tools that make information easier to interpret.",
    cta: "Explore Data & Analytics",
    to: "/data-analytics",
  },
  {
    n: "02",
    title: "Data Engineering & Integration",
    body: "Create dependable ways to bring information together. We design and build data pipelines, integrations, and platforms that help teams access consistent, well-organized data.",
    cta: "Explore Data Engineering",
    to: "/data-engineering",
  },
  {
    n: "03",
    title: "Business Intelligence & Reporting",
    body: "Make important measures easier to find and understand. We develop dashboards, reporting experiences, and analytics workflows around the decisions your teams actually make.",
    cta: "Explore Business Intelligence",
    to: "/data-engineering",
  },
  {
    n: "04",
    title: "Custom Software & Product Development",
    body: "Turn a validated need into a usable digital product. We support discovery, design, architecture, development, testing, and continued improvement for web, mobile, and business applications.",
    cta: "Explore Software Development",
    to: "/software-development",
  },
  {
    n: "05",
    title: "AI & Intelligent Automation",
    body: "Identify where machine learning, generative AI, or automation may support a practical business task. We help assess use cases, prepare the data and workflows, and develop solutions with appropriate human oversight.",
    cta: "Explore AI Solutions",
    to: "/ai-automation",
  },
  {
    n: "06",
    title: "Cloud & Application Modernization",
    body: "Improve the foundations behind your digital services. We help teams assess existing systems, plan modernization, and move toward architectures that better support their needs.",
    cta: "Explore Modernization",
    to: "/modernization",
  },
] as const;

export const PROCESS = [
  ["Frame the question", "We work with your team to define the decision, business context, and outcome the analysis should support."],
  ["Understand the data", "We review relevant sources, definitions, quality, access, and limitations before drawing conclusions."],
  ["Find and explain the signal", "We analyze the available information and present findings in a form your stakeholders can understand and challenge."],
  ["Put insight to work", "Where appropriate, we connect findings to product changes, operating workflows, reporting, or software delivery."],
  ["Learn and refine", "We help establish how to monitor the result and revisit assumptions as the business and its data change."],
] as const;

export const INDUSTRIES = [
  ["Financial Services", "Analytics and software for customer, risk, and operational decisions."],
  ["Healthcare", "Data-informed tools and workflows for complex care environments."],
  ["Retail & E-commerce", "Insights into customer journeys, product performance, and operations."],
  ["Manufacturing & Supply Chain", "Data integration and visibility across connected processes."],
  ["Technology & SaaS", "Product analytics and engineering support for digital businesses."],
  ["Professional Services", "Reporting and workflow tools that help teams manage client work."],
] as const;

export const WHY = [
  ["We start with the decision", "We focus on what the business needs to understand or change, not just the tools involved."],
  ["We make assumptions visible", "We explain data definitions, limitations, and reasoning so stakeholders can evaluate the result."],
  ["We connect insight to implementation", "Analytics and engineering work together, helping teams move from finding to next step."],
  ["We build for continued use", "We consider maintainability, ownership, and how the solution will fit into day-to-day work."],
] as const;

export const INTERESTS = [
  "Analytics",
  "Data engineering",
  "Business intelligence",
  "Software development",
  "AI or automation",
  "Modernization",
  "Talent",
  "Other",
] as const;
