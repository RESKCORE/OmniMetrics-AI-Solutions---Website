type ServiceDetails = {
  focus: string;
  outcomes: [string, string][];
  questions: [string, string][];
};

/** Illustrative scope options, not promises of deliverables or results. */
export const SERVICE_DETAILS: Record<string, ServiceDetails> = {
  "Data & Analytics": {
    focus: "Make the next decision clearer.",
    outcomes: [
      ["A shared measurement framework", "Clear questions, metric definitions, and a view of which measures can meaningfully inform the decision."],
      ["Analysis with context", "Findings that distinguish observed patterns from assumptions, with data gaps and limitations made explicit."],
      ["Reporting that supports action", "Dashboards or reporting specifications shaped around the people who need to interpret and use them."],
    ],
    questions: [
      ["What if our data is incomplete?", "Start by assessing what is available and what is missing. The scope can focus on data quality, a narrower question, or a measurement plan before deeper analysis."],
      ["Do we need a new dashboard?", "Not necessarily. The decision comes first; a focused analysis, a simpler report, or clearer definitions may be more useful than another dashboard."],
      ["What should we bring to the first conversation?", "A business question, examples of current reports, and an overview of the relevant data sources are useful starting points. Avoid sharing sensitive records until an appropriate process is agreed."],
    ],
  },
  "Data Engineering & BI": {
    focus: "Give information a dependable path.",
    outcomes: [
      ["A source and integration map", "A view of where information lives, how it moves, who owns it, and where definitions or access need clarification."],
      ["Structured, reusable data", "Pipeline and data-model work that can support consistent measures across reporting and business applications."],
      ["Operational visibility", "Agreed checks, documentation, and reporting requirements so your team can understand and maintain the data flow."],
    ],
    questions: [
      ["Can the work fit our existing systems?", "The starting point is your current sources, reporting tools, access arrangements, and constraints. Technology choices should follow that assessment rather than precede it."],
      ["How do you approach conflicting metrics?", "Identify the different definitions and their business context, agree ownership, and document the chosen meaning before combining information into a shared report."],
      ["Does integration include reporting?", "It can, when included in the agreed scope. Data movement, modeling, and dashboard development are connected but can also be approached as separate workstreams."],
    ],
  },
  "Software Development": {
    focus: "Build around the work people actually do.",
    outcomes: [
      ["A clearly scoped product", "User journeys, priorities, and acceptance criteria that make the intended experience and boundaries visible."],
      ["A tested application", "Incremental implementation and testing against agreed requirements, with trade-offs surfaced throughout delivery."],
      ["A practical handover", "Documentation and release considerations that help the owning team operate and continue improving the application."],
    ],
    questions: [
      ["Can we start with a smaller release?", "Yes, the scope can focus on a useful first version. Prioritize the essential workflow and agree what to validate before expanding it."],
      ["Can you work on an existing application?", "Begin with a review of the current code, user experience, dependencies, and ownership. That assessment helps distinguish targeted improvements from work that needs broader redesign."],
      ["How are requirements handled?", "Translate the business need into prioritized user journeys and acceptance criteria. Review changes against the agreed scope so their effect on delivery remains visible."],
    ],
  },
  "AI & Intelligent Automation": {
    focus: "Choose the useful task, then the right tool.",
    outcomes: [
      ["A use-case assessment", "A practical review of the task, available data, expected value, risks, and alternatives to AI."],
      ["A bounded pilot", "A focused workflow or prototype with evaluation criteria and clear points for human review."],
      ["An evaluation approach", "Checks for output quality, failure cases, and oversight, with a plan for revisiting assumptions in use."],
    ],
    questions: [
      ["When is simpler automation a better choice?", "When a task follows stable rules and does not require interpretation, a deterministic workflow may be easier to evaluate and maintain. The assessment should compare those options."],
      ["How is human oversight included?", "Define where people review, approve, correct, or override outputs. The appropriate level of oversight depends on the consequences of an error and the context of the task."],
      ["Can we evaluate an idea before a wider rollout?", "A narrowly scoped pilot can test an idea against agreed examples and failure cases. A successful demonstration alone is not evidence that a system is ready for every production scenario."],
    ],
  },
  "Cloud & Application Modernization": {
    focus: "Change what matters. Keep what works.",
    outcomes: [
      ["A current-state assessment", "A view of system dependencies, constraints, ownership, and the parts of the architecture that most need attention."],
      ["A phased modernization plan", "Priorities and manageable stages, with risks and trade-offs considered before major changes begin."],
      ["A maintainable transition", "Migration, validation, and handover considerations that support continued operation and clear ownership."],
    ],
    questions: [
      ["Does modernization mean replacing everything?", "No. The assessment should identify what can remain, what can be improved in place, and what genuinely needs replacement. A full rewrite is not the default."],
      ["How is disruption considered?", "Map dependencies and critical workflows before planning changes. Agree validation, sequencing, and recovery considerations appropriate to each stage."],
      ["What if we are unsure where to start?", "Bring the main operational concerns and a high-level view of the existing systems. An initial assessment can help separate urgent issues from longer-term architecture improvements."],
    ],
  },
};