import type { Product, CaseStudy, TimelineEntry, Stat, Edition } from "@/types";

export const products: Product[] = [
  {
    id: "nexaro-ai",
    slug: "nexaro-ai",
    title: "Nexaro AI",
    subtitle: "Founder-led Workflow Intelligence",
    description:
      "Startup vision focused on building scalable internal operating systems and AI-assisted workflow automation — eliminating operational chaos for teams that need to move fast.",
    badge: "Startup Vision",
    kpi: "40%",
    kpiLabel: "Operational Time Reduction",
    problems: [
      "Workflow chaos",
      "Scattered data",
      "Reporting delays",
      "Task ownership confusion",
      "AI workflow centralization",
      "Cross-team coordination",
    ],
    tech: ["N8N", "AI APIs", "Google Workspace"],
    featured: false,
    href: "https://linktr.ee/abdofog",
  },
  {
    id: "vicious-os",
    slug: "vicious-os",
    title: "Vicious OS",
    subtitle: "Multi-Tenant Operations Platform",
    description:
      "The flagship internal operating system for Vicious Esports — a multi-tenant platform managing 170+ players, KPI dashboards, task ownership, access control, and reporting systems.",
    badge: "Featured Project",
    kpi: "170+",
    kpiLabel: "Players Managed",
    problems: [
      "Multi-tenant ops",
      "KPI dashboards",
      "Task ownership",
      "Access control",
      "Reporting systems",
      "Workflow automation",
    ],
    tech: ["Internal Platform", "Google Workspace", "Custom Dashboards"],
    featured: true,
  },
  {
    id: "pyramids-cup",
    slug: "pyramids-cup",
    title: "Pyramids Cup Ecosystem",
    subtitle: "Esports Tournament Infrastructure",
    description:
      "End-to-end tournament ecosystem scaling from 57 teams in Edition 1 to 200+ participants per edition. Built the infrastructure, operations, and community systems that powered 5 consecutive editions.",
    badge: "Esports",
    kpi: "3,500+",
    kpiLabel: "Total Participants",
    problems: [
      "Tournament logistics",
      "Registration systems",
      "Broadcast coordination",
      "Community management",
      "Sponsor reporting",
      "Cross-edition scaling",
    ],
    tech: ["Tournament Systems", "Discord", "Broadcast Tools"],
    featured: false,
  },
  {
    id: "pc7-automation-stack",
    slug: "pc7-automation-stack",
    title: "PC7 Automation Stack",
    tagline: "Plug-and-play tournament ops automation — registration to support, fully autonomous",
    description:
      "Production automation system built for Pyramids Cup 7. Two modular systems: a Discord registration scraper that auto-writes structured team data to Google Sheets, and an AI support bot powered by local Qwen 2.5 that answers player questions strictly from the official rulebook. Reusable for any tournament in 2–3 hours.",
    kpi: "3–5 hrs",
    kpiLabel: "Saved per tournament day",
    status: "live" as const,
    tags: ["Automation", "AI", "Discord", "Tournament Ops", "Sellable"],
    color: "from-rose-500 to-pink-600",
    icon: "🤖",
    challenge:
      "Tournament organizers waste 3–5 hours per event day on manual registration intake, answering repetitive rule questions, and copying data between tools.",
    solution:
      "Two autonomous systems: System 1 listens to Discord registration channel, parses team submissions via regex, writes 31-column structured rows to Google Sheets, deduplicates, confirms in Discord. System 2 answers @mentions in support channel using Qwen 2.5 local AI with the rulebook embedded — escalates when answer not found.",
    outcome:
      "Both systems run autonomously with near-zero maintenance. Redeployable for any tournament in 2–3 hours. Monetizable as a service.",
    techStack: ["Python", "Docker", "n8n", "Discord API", "Qwen 2.5:7b", "Ollama", "Google Sheets"],
    sellable: true,
    pricingSetup: "$200–500",
    pricingRetainer: "$100–200/month",
    setupTime: "2–3 hours",
  },
];

export const pyramidEditions: Edition[] = [
  { name: "Edition 5", teams: 25, participants: 200, views: 52200 },
  { name: "Edition 4", teams: 30, participants: 395, views: 41000 },
  { name: "Edition 3", teams: 64, participants: 350 },
  { name: "Edition 2", teams: 24, participants: 220 },
  { name: "Edition 1", teams: 57, participants: 400 },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "vicious-os-build",
    slug: "vicious-os",
    title: "Building Vicious OS",
    subtitle: "From chaos to clarity at scale",
    challenge:
      "Vicious Esports was managing 170+ players across multiple game titles with no unified system. Contracts, schedules, performance data, and communications lived in scattered spreadsheets and DMs — creating constant bottlenecks and missed information.",
    approach:
      "Designed and built a multi-tenant internal platform from the ground up. Implemented KPI dashboards for performance tracking, task ownership modules with clear accountability, role-based access control, and automated reporting pipelines. Mapped the full operational workflow before writing a single line of config.",
    outcome:
      "Eliminated the majority of repetitive manual reporting. The platform became the single source of truth for all player and department operations. Management gained real-time visibility into team health and performance.",
    lessons:
      "Internal tools only succeed when they mirror the actual mental model of the team using them. Spending 40% of the time on discovery and user interviews before building saved weeks of rework.",
    metrics: [
      { label: "Players Managed", value: "170+" },
      { label: "Manual Reports Eliminated", value: "~80%" },
      { label: "Departments Served", value: "4" },
      { label: "Time to Full Adoption", value: "3 weeks" },
    ],
    tags: ["Internal Platform", "Product Design", "Operations"],
  },
  {
    id: "pyramids-cup-growth",
    slug: "pyramids-cup-growth",
    title: "Scaling Pyramids Cup",
    subtitle: "5 editions, 3,500+ participants, zero playbook",
    challenge:
      "After a successful but chaotic Edition 1 with 57 teams, the question was: how do you scale a grassroots esports tournament into a recognized regional event without losing the community feel that made it work?",
    approach:
      "Built a progressive infrastructure after each edition — analyzing what broke, what grew, and what the community needed. Introduced dedicated registration flows, broadcast coordination workflows, sponsor reporting templates, and community feedback loops. Each edition had a documented retrospective.",
    outcome:
      "By Edition 5, the tournament was generating 52,200 views, running 25 teams with tight logistics, and had a recognizable brand in MENA esports. Total participation across all 5 editions exceeded 3,500 players.",
    lessons:
      "Growth isn't about doing more — it's about systematizing what already works. The biggest jumps in quality came from removing friction, not adding features.",
    metrics: [
      { label: "Total Participants", value: "3,500+" },
      { label: "Editions Delivered", value: "5" },
      { label: "Peak Views (Ed. 5)", value: "52,200" },
      { label: "YoY Participation Growth", value: "30%" },
    ],
    tags: ["Esports", "Operations", "Growth"],
  },
  {
    id: "ops-scaling",
    slug: "ops-scaling",
    title: "Scaling Operations Across Departments",
    subtitle: "Building systems that outlast their builders",
    challenge:
      "As the scope of responsibilities grew to span content, esports, community, and product — the lack of shared operational infrastructure meant every team was building from scratch. Coordination overhead was killing velocity.",
    approach:
      "Introduced a unified ops framework: shared project templates, cross-team OKR alignment, async-first communication standards, and a central dashboard aggregating KPIs from all departments. Ran workshops to embed the new workflows into daily habits rather than just documenting them.",
    outcome:
      "Teams moved faster with less coordination overhead. Reporting to leadership improved from ad-hoc to structured weekly summaries with real data. New team members could onboard in half the previous time.",
    lessons:
      "The best operations system is the one people actually use. Adoption comes from co-design, not mandates. Involve the end-users in building their own workflow.",
    metrics: [
      { label: "Players managed", value: "170+" },
      { label: "Programs delivered", value: "5" },
      { label: "Teams coordinated", value: "53" },
      { label: "Partnerships secured", value: "3" },
    ],
    tags: ["Program Management", "Systems Design", "Leadership"],
  },
];

export const stats: Stat[] = [
  { label: "Total Participants", displayValue: "3,500+", numericEnd: 3500, suffix: "+", icon: "users" },
  { label: "Cup Editions", displayValue: "5", numericEnd: 5, suffix: "", icon: "trophy" },
  { label: "Community Members", displayValue: "3,000+", numericEnd: 3000, suffix: "+", icon: "globe" },
  { label: "Participation Growth", displayValue: "30%", numericEnd: 30, suffix: "%", icon: "trending-up" },
  { label: "Players Managed", displayValue: "170+", numericEnd: 170, suffix: "+", icon: "zap" },
  { label: "Internal Platforms", displayValue: "2", numericEnd: 2, suffix: "", icon: "layers" },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2022",
    title: "Entered the Esports Industry",
    description:
      "Joined the MENA esports ecosystem. Started building foundational knowledge in tournament operations, community management, and digital content systems.",
    accent: "#4f75ff",
  },
  {
    year: "2023",
    title: "Launched Pyramids Cup",
    description:
      "Founded and launched the Pyramids Cup — a grassroots esports tournament. Edition 1 ran 57 teams, 400 participants. Built the entire operational backbone from scratch.",
    accent: "#7b5cf6",
  },
  {
    year: "2024",
    title: "Summer Camp + Riot Games Partnership",
    description:
      "Co-created Summer Camp 2024 — 1,800 participants across 53 teams and 5 simultaneous tournament formats. Secured partnership with Riot MENA, The Purge, and Wild Circuit.",
    accent: "#4f75ff",
  },
  {
    year: "2024",
    title: "Joined Vicious + Launched OS",
    description:
      "Joined Vicious Esports as Operations & Product Systems Manager. Designed and shipped Vicious OS — the internal operations platform managing 170+ players across all titles.",
    accent: "#7b5cf6",
  },
  {
    year: "2025",
    title: "Google PM Certificate + CAPM Path",
    description:
      "Completed Google Project Management certification. Currently on the CAPM path to formalize program management credentials and deepen structured project delivery skills.",
    accent: "#4f75ff",
  },
];

export const skills = [
  "Product Operations",
  "Program Management",
  "Systems Design",
  "Workflow Automation",
  "KPI Dashboards",
  "Cross-team Coordination",
  "Esports Infrastructure",
  "AI-Assisted Ops",
  "N8N",
  "Google Workspace",
  "Stakeholder Management",
  "OKR Frameworks",
  "Agile / Scrum",
  "Tournament Operations",
  "Community Management",
];
