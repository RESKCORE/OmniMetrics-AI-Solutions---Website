/** Fictional preview content only; never present these entries as verified company facts. */
export const DEMO_NOTICE = "Sample content · fictional, for preview only";

export const DEMO_CASES = [
  { client: "Northstar Retail", category: "Retail · Data & analytics", title: "One view of a growing retail business", challenge: "Store, online, and inventory reports used different definitions, making weekly planning difficult.", solution: "A shared data model connects orders, stock, and customer activity in a decision-focused dashboard.", output: "Sample outcome: a unified sales dashboard, stock alerts, and a documented metrics glossary.", stack: "SQL · Python · Power BI" },
  { client: "Harbor Logistics", category: "Supply chain · Data engineering", title: "From scattered updates to operational visibility", challenge: "Dispatch teams reconciled shipment updates across spreadsheets and disconnected applications.", solution: "Scheduled pipelines consolidate shipment events and flag missing or inconsistent records.", output: "Sample outcome: a shipment timeline, exception queue, and monitored integration pipeline.", stack: "PostgreSQL · dbt · Azure" },
  { client: "Brightpath Software", category: "Technology · AI & software", title: "A support workspace with an intelligent assistant", challenge: "Support specialists spent time searching long product documents before answering routine questions.", solution: "A searchable knowledge workspace retrieves relevant passages and drafts answers for human review.", output: "Sample outcome: source-linked drafts, review controls, and a feedback dashboard.", stack: "React · TypeScript · Retrieval-augmented AI" },
] as const;

export const DEMO_TEAM = [
  { name: "Alex Morgan", role: "Strategy & delivery lead", bio: "Connects business priorities to a practical delivery plan, keeping discovery, scope, and stakeholder conversations aligned." },
  { name: "Priya Shah", role: "Data & analytics lead", bio: "Focuses on reliable data models, meaningful measures, and reporting experiences that help teams make decisions." },
  { name: "Jordan Lee", role: "Software & AI lead", bio: "Brings product engineering and thoughtful automation together, with an emphasis on testing, maintainability, and human oversight." },
] as const;

export const DEMO_ROLES = [
  { title: "Data Analyst", detail: "Remote · Full-time · SQL, Power BI, stakeholder communication" },
  { title: "Data Engineer", detail: "Hybrid · Contract · Python, dbt, cloud data pipelines" },
  { title: "Full-stack Developer", detail: "Remote · Full-time · React, TypeScript, API integration" },
] as const;

export const DEMO_ARTICLES = [
  { category: "Analytics", title: "Making metrics meaningful", summary: "A useful metric starts with a decision, not a dashboard.", paragraphs: ["Imagine a retail team reviewing weekly sales. Revenue alone does not explain whether the change came from more orders, larger baskets, or returns. Start by naming the decision: which product groups need attention next week?", "Define each measure in plain language, record its source, and agree how refunds and missing records are handled. Pair the number with a comparison period and a clear owner.", "Keep the first report focused: sales, order volume, average basket value, and return rate. Add another measure only when it helps answer a question the team actually asks."] },
  { category: "AI & automation", title: "AI where it helps", summary: "Choose a small, reviewable task before automating an entire workflow.", paragraphs: ["A document-heavy support team is a useful example. An assistant can retrieve relevant passages and draft a response, while a specialist checks the answer before sending it.", "Compare the proposed tool with a simpler search or rules-based workflow. Define the source material, the permitted actions, and the cases that must be escalated to a person.", "Test with representative questions, track unsupported answers, and collect reviewer feedback. Expand the scope only when the results justify the extra complexity."] },
  { category: "Business intelligence", title: "Dashboards people use", summary: "Design around the meeting, the question, and the next action.", paragraphs: ["Picture a Monday operations review. The team needs to know what changed, where a problem is concentrated, and who will investigate. A page of unrelated charts makes that harder.", "Put the most important comparison first. Use consistent definitions, useful filters, a visible refresh timestamp, and a short explanation of any data limitations.", "Review the dashboard with its users after a few cycles. Remove unused views, simplify confusing labels, and connect each exception to a practical follow-up."] },
] as const;

export const DEMO_CONTACT = { email: "hello@omnimetrics.example", phone: "+1 (202) 555-0147", location: "100 Example Avenue, Suite 200 · Demo City" };

export const DEMO_TOOLS: Record<string, readonly string[]> = {
  "Data & Analytics": ["SQL", "Python", "Power BI", "Tableau"],
  "Data Engineering & BI": ["PostgreSQL", "dbt", "Apache Airflow", "Azure"],
  "Software Development": ["React", "TypeScript", "PostgreSQL", "Playwright"],
  "AI & Intelligent Automation": ["Python", "Document retrieval", "Workflow automation", "Human review"],
  "Cloud & Application Modernization": ["AWS", "Azure", "Docker", "Terraform"],
};

export const DEMO_SCENARIOS: Record<string, { title: string; brief: string; deliverable: string }> = {
  "Data & Analytics": { title: "A weekly trading review for a sample retailer", brief: "The team wants to understand changes in revenue, basket size, and returns across three fictional sales channels.", deliverable: "A metrics glossary, channel comparison dashboard, and a weekly decision brief with clear assumptions." },
  "Data Engineering & BI": { title: "A connected operations view for a sample distributor", brief: "Order, inventory, and shipment records arrive from separate systems, with inconsistent product identifiers.", deliverable: "A source map, cleaned product model, monitored pipeline, and an exception report for missing records." },
  "Software Development": { title: "A project workspace for a fictional services team", brief: "Project managers need a shared place to track milestones, review requests, and see the latest delivery status.", deliverable: "A tested web application with project views, review workflows, accessible forms, and handover documentation." },
  "AI & Intelligent Automation": { title: "A source-linked assistant for a sample support desk", brief: "Specialists search a fictional product handbook and review draft answers to routine support questions.", deliverable: "A retrieval prototype, human approval step, evaluation question set, and unsupported-answer reporting." },
  "Cloud & Application Modernization": { title: "A phased refresh of a fictional business application", brief: "A team wants to reduce dependencies on an older application without disrupting everyday operations.", deliverable: "A dependency inventory, migration plan, isolated pilot, rollback checklist, and operational runbook." },
};