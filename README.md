# OmniMetrics AI Solutions Inc.

> **Turning Your Data into Decisions That Matter**  
> Modern enterprise web application and digital presence for OmniMetrics AI Solutions Inc. — connecting data strategy, data engineering, custom software, and intelligent AI automation.

---

## 📖 Overview

**OmniMetrics** is a high-performance web platform built for **OmniMetrics AI Solutions Inc.**, a technology consultancy helping organizations transition from raw data to actionable business decisions.

The application showcases OmniMetrics' core capabilities, industry-specific solutions, delivery methodology, technical insights, and engagement models. Built on **TanStack Start** and **React 19**, it incorporates a distinctive dark-backdrop aesthetic, WebGL shader background animations (`Grainient`), responsive typography, accessible motion, and component-driven architecture.

---

## 🚀 Key Capabilities & Services

OmniMetrics delivers end-to-end technology and analytics services structured across six core pillars:

1. **Data Strategy & Analytics (`/data-analytics`)**:
   - Defining measurable KPIs and business goals.
   - Exploratory data analysis, diagnostic metrics, and trend reporting.
   - Decision-support workflows tailored for leadership and operational teams.

2. **Data Engineering & Integration (`/data-engineering`)**:
   - Scalable ETL/ELT data pipelines and multi-source data consolidation.
   - Lakehouse, warehouse, and database architecture.
   - Automated data validation, pipeline monitoring, and governance.

3. **Custom Software & Product Development (`/software-development`)**:
   - Full-lifecycle web, mobile, and internal application development.
   - System design, domain modeling, and robust API architectures.
   - Maintainable, production-ready code built around real-world business requirements.

4. **AI & Intelligent Automation (`/ai-automation`)**:
   - Practical AI implementation: machine learning models, retrieval-augmented systems (RAG), and generative AI.
   - Workflow and repetitive task automation with human-in-the-loop review.
   - Feasibility assessment, data readiness, and safety evaluations.

5. **Cloud & Application Modernization (`/modernization`)**:
   - Assessment and restructuring of legacy architectures.
   - Cloud migrations, modularization, and containerized deployments.
   - Performance tuning, security enhancements, and cost optimization.

6. **Talent & Advisory Services (`/talent`)**:
   - Embedded technical talent and senior engineering augmentation.
   - Fractional technical guidance and strategic consulting.

---

## 🛠️ Technology Stack

| Layer                | Technologies                                                                                                                                  |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**        | [TanStack Start](https://tanstack.com/start) (Full-stack SSR/SSG React framework)                                                             |
| **Language**         | [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled)                                                                           |
| **Frontend Library** | [React 19](https://react.dev/)                                                                                                                |
| **Routing**          | [TanStack Router](https://tanstack.com/router) (100% type-safe, file-based routing)                                                           |
| **State & Cache**    | [TanStack Query](https://tanstack.com/query) (`@tanstack/react-query`)                                                                        |
| **Styling**          | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS tokens & HSL palettes                                                                |
| **UI Primitives**    | [Radix UI](https://www.radix-ui.com/) primitives (`@radix-ui/*`), [shadcn/ui](https://ui.shadcn.com/) patterns                                |
| **Motion & FX**      | [Framer Motion](https://www.framer.com/motion/), Magic UI (`BlurFade`, `MarkerText`, `TopicStrip`), custom WebGL `ShaderCanvas` / `Grainient` |
| **Icons & Media**    | [Lucide React](https://lucide.dev/), optimized WebP graphics with async decoding                                                              |
| **Form Management**  | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)                                                                     |
| **Testing**          | [Vitest](https://vitest.dev/), Testing Library (`@testing-library/react`, `@testing-library/jest-dom`)                                        |
| **Tooling & Engine** | [Vite 8](https://vitejs.dev/), [Nitro](https://nitro.unjs.io/), ESLint 9, Prettier                                                            |

---

## 📂 Project Structure

```text
OmniMetrics/
├── public/                 # Static assets (favicons, robots.txt, etc.)
├── src/
│   ├── assets/             # WebP illustrations, brand graphics, and imagery
│   ├── components/
│   │   ├── magic/          # Dynamic motion components (BlurFade, MarkerText, TopicStrip)
│   │   ├── site/           # Shared site chrome (Header, Footer, ServicePage, HeroVisual, UI primitives)
│   │   └── ui/             # Radix UI and shadcn-based reusable primitives (Button, Card, Input, etc.)
│   ├── hooks/              # Custom React hooks (media queries, viewport observers, etc.)
│   ├── lib/
│   │   ├── content.ts      # Core static business capabilities, process, and industry definitions
│   │   ├── demo-content.ts # Browser-safe sample projects, roles, and testimonials
│   │   ├── service-details.ts # Deep-dive metadata, FAQs, and outcomes per service
│   │   └── utils.ts        # Common utility helpers (class merging, formatting)
│   ├── routes/             # TanStack Router file-based route definitions
│   │   ├── __root.tsx      # Global app shell (Grainient background, Header, Outlet, Footer)
│   │   ├── index.tsx       # Homepage (Hero with custom shader, topics, services showcase)
│   │   ├── about.tsx       # Company story, philosophy, and working principles
│   │   ├── capabilities.tsx# Full service catalog & engagement methodology
│   │   ├── data-analytics.tsx      # Service detail: Data Analytics
│   │   ├── data-engineering.tsx    # Service detail: Data Engineering
│   │   ├── software-development.tsx# Service detail: Custom Software Development
│   │   ├── ai-automation.tsx       # Service detail: AI & Automation
│   │   ├── modernization.tsx       # Service detail: Modernization & Cloud
│   │   ├── industries.tsx  # Industry-specific use cases & verticals
│   │   ├── work.tsx        # Case studies & project spotlights (sample-labeled)
│   │   ├── insights.tsx    # Technical articles, guides, and leadership perspectives
│   │   ├── talent.tsx      # Specialized staffing & embedded teams
│   │   ├── contact.tsx     # Project inquiry and consultation booking form
│   │   ├── privacy.tsx     # Privacy policy
│   │   └── terms.tsx       # Terms of service
│   ├── routeTree.gen.ts    # Auto-generated route tree (do not edit manually)
│   ├── router.tsx          # Router instantiation and type declarations
│   ├── server.ts           # Server entry point
│   ├── start.ts            # Start handler
│   ├── styles.css          # Design system tokens, root palette, animations & overrides
│   └── test/               # Vitest test suites and environment setups
├── components.json         # shadcn/ui configuration
├── package.json            # Project dependencies and script declarations
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build and TanStack plugin configuration
└── vitest.config.ts        # Test runner configuration
```

---

## 🧭 Page Routes & Sitemap

| Route                         | Path                    | Description                                                                  |
| ----------------------------- | ----------------------- | ---------------------------------------------------------------------------- |
| **Home**                      | `/`                     | Hero section, dynamic topic strip, core value pillars, and service overviews |
| **Capabilities**              | `/capabilities`         | Comprehensive overview of technical and strategic capabilities               |
| **Data Strategy & Analytics** | `/data-analytics`       | Decision science, reporting metrics, and business intelligence               |
| **Data Engineering**          | `/data-engineering`     | Data pipelines, lakehouses, warehouse architecture, and integration          |
| **Custom Software**           | `/software-development` | Full-stack applications, scalable backend systems, and APIs                  |
| **AI & Automation**           | `/ai-automation`        | Machine learning integration, RAG, and automated workflows                   |
| **Modernization**             | `/modernization`        | Cloud migrations, system decoupling, and tech-debt remediation               |
| **Industries**                | `/industries`           | Sector-tailored solutions (Finance, Health, Retail, SaaS, etc.)              |
| **Case Studies**              | `/work`                 | Illustrative problem-approach-output snapshots                               |
| **Insights**                  | `/insights`             | Articles, technical breakdowns, and strategic industry thoughts              |
| **Talent & Staffing**         | `/talent`               | Flexible talent models and specialized engineering placement                 |
| **About Us**                  | `/about`                | Company background, operating philosophy, and ethics                         |
| **Contact**                   | `/contact`              | Project inquiry form with category and budget selection                      |
| **Privacy & Terms**           | `/privacy`, `/terms`    | Legal disclosures and terms of use                                           |

---

## 🎨 Architectural & Design Guidelines

1. **Global Site Sheet Chrome**:
   - Navigation (`Header`) and footer (`Footer`) live in `src/components/site/` and wrap every page via `src/routes/__root.tsx`.
   - All pages render within a centered site-sheet framed against a dark backdrop.

2. **Unified Grainient Background**:
   - A single WebGL-driven `Grainient` shader canvas is mounted in the root sheet.
   - It gracefully falls back to CSS tokens when WebGL is unavailable or when the user has enabled `prefers-reduced-motion`.

3. **Motion & Accessibility**:
   - Restrained entrance reveals use `<BlurFade>` with finite single-run triggers.
   - Highlight accents utilize the accessible `<MarkerText>` component.
   - Animations strictly respect user preferences for reduced motion.

4. **Transparency & Verified Claims**:
   - Preview, sample, and fictional case-study elements are cleanly partitioned into `src/lib/demo-content.ts` and wrapped with `<OwnerNote>` labels to ensure sample materials are not mistaken for live customer endorsements.

5. **Performance Standards**:
   - Artwork is served as lightweight WebP with asynchronous decoding (`decoding="async"`).
   - Card interactions rely on semantic CSS hover/focus tokens instead of per-element JavaScript event listeners to minimize GPU and memory overhead.

---

## 💻 Getting Started

### Prerequisites

- **Node.js** (v20+ recommended) or **Bun**
- **npm**, **pnpm**, or **bun** package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd OmniMetrics
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   bun install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```
   > [!NOTE]
   > All `.env*` files are strictly protected by `.gitignore` to prevent secret leakage. Never commit secrets to version control.

### Development Server

Start the local development server with hot module replacement:

```bash
npm run dev
# or
bun run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000) (or the port indicated in your console).

---

## ⚙️ Available Scripts

| Command              | Action                                                   |
| -------------------- | -------------------------------------------------------- |
| `npm run dev`        | Launches the Vite development server with TanStack Start |
| `npm run build`      | Compiles and builds the production bundle                |
| `npm run preview`    | Runs a local server to preview the production build      |
| `npm run test`       | Runs unit and integration tests using Vitest             |
| `npm run test:watch` | Runs Vitest in interactive watch mode                    |
| `npm run lint`       | Analyzes code quality using ESLint                       |
| `npm run format`     | Automatically formats codebase files using Prettier      |

---

## 🧪 Testing

The repository uses **Vitest** and **React Testing Library** for fast, reliable testing.

To execute the test suite:

```bash
npm run test
```

Tests include route validation, rendering behavior, and shader canvas sizing/utility validations.

---

## 📄 License

Proprietary. All rights reserved © **OmniMetrics AI Solutions Inc.**
