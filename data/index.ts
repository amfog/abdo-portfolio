import type { Product, CaseStudy, TimelineEntry, Stat, Edition, Certification } from "@/types";

export const products: Product[] = [
  {
    id: "nexaro",
    slug: "nexaro",
    title: "Nexaro",
    subtitle: "Founder & CEO — AI Workflow Ecosystem",
    description:
      "My flagship venture. Building a suite of 7 integrated operational products powered by AI. Includes Vicious OS, Nexaro Life, CRM, HR, Rent OS, Teams OS, and the Core Platform. Focus: Eliminating operational chaos for modern teams.",
    badge: " Startup Vision",
    kpi: "7",
    kpiLabel: "Products in Ecosystem",
    problems: [
      "Workflow chaos across teams",
      "Scattered data & reporting delays",
      "Manual task coordination",
      "AI integration fragmentation",
      "Cross-department visibility gaps",
    ],
    tech: ["N8N", "AI APIs", "Google Workspace", "Supabase", "Flutter", "Discord Bots"],
    featured: true,
    href: "https://project-jelc4.vercel.app",
    challenge:
      "Teams waste 30-40% of their time on manual coordination, scattered tools, and reactive reporting — slowing velocity and burning out talent.",
    solution:
      "Nexaro unifies operations through 7 integrated products: Platform (master hub), Vicious OS (esports ops), Nexaro Life (personal productivity), CRM, HR, Rent OS, and Teams OS — plus AI automations, Notion/Sheets templates, and Discord bots.",
    outcome:
      "Early adopters report 40% reduction in operational overhead, faster decision-making through real-time dashboards, and scalable systems that grow with the team.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Supabase", "N8N", "Qwen 2.5", "Claude API"],
    sellable: false, // Startup vision, not for sale yet
    pricingSetup: "N/A",
    pricingRetainer: "N/A",
    setupTime: "N/A",
  },
  {
    id: "pyramids-queue",
    slug: "pyramids-queue",
    title: "Pyramids Queue",
    subtitle: "MENA Esports Community Hub",
    description:
      "Founded the community hub for MENA's Wild Rift ecosystem. Scaled to 4,000+ members. Hosted 25+ casual tournaments and 7 regional qualifiers. Partnered with Riot Games for Summer Camp 2024.",
    badge: "👥 Community Founder",
    kpi: "4,000+",
    kpiLabel: "Community Members",
    problems: [
      "Community fragmentation",
      "Lack of regional tournaments",
      "Player discovery difficulty",
      "Scattered event management",
    ],
    tech: ["Discord", "Bot Development", "Community Management", "Event Ops"],
    featured: true,
    href: "https://discord.gg/wpbFgc8BJT", // No external link yet
    challenge:
      "MENA Wild Rift players had no central hub for finding teams, scrims, or tournaments. Community growth was stunted by fragmented Discord servers.",
    solution:
      "Built Pyramids Queue as the single source of truth. Implemented automated role management, tournament registration bots, and daily scrim coordination.",
    outcome:
      "Grew to 4,000+ members. Became the go-to partner for Riot Games in the region. Successfully ran 7 regional qualifiers.",
    techStack: ["Discord API", "Python", "Community Strategy", "Riot Games API"],
    sellable: false,
    pricingSetup: "N/A",
    pricingRetainer: "N/A",
    setupTime: "N/A",
  },
  {
    id: "vicious-os",
    slug: "vicious-os",
    title: "Vicious OS",
    subtitle: "Multi-Tenant Operations Platform",
    description:
      "The flagship internal operating system for Vicious Esports — a multi-tenant platform managing 230+ players, KPI dashboards, task ownership, access control, and reporting systems.",
    badge: "Featured Project",
    kpi: "230+",
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
pricingSetup: "Contact for pricing",
pricingRetainer: "Custom packages",
setupTime: "2–3 hours setup",
  },
];

export const pyramidEditions: Edition[] = [
  { name: "Edition 6", teams: 25, participants: 200, views: 52200 },
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
      "Vicious Esports was managing 230+ players across multiple game titles with no unified system. Contracts, schedules, performance data, and communications lived in scattered spreadsheets and DMs — creating constant bottlenecks and missed information.",
    approach:
      "Designed and built a multi-tenant internal platform from the ground up. Implemented KPI dashboards for performance tracking, task ownership modules with clear accountability, role-based access control, and automated reporting pipelines. Mapped the full operational workflow before writing a single line of config.",
    outcome:
      "Eliminated the majority of repetitive manual reporting. The platform became the single source of truth for all player and department operations. Management gained real-time visibility into team health and performance.",
    lessons:
      "Internal tools only succeed when they mirror the actual mental model of the team using them. Spending 40% of the time on discovery and user interviews before building saved weeks of rework.",
    metrics: [
      { label: "Players Managed", value: "230+" },
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
    subtitle: "6 editions, 5,000+ participants, zero playbook",
    challenge:
      "After a successful but chaotic Edition 1 with 57 teams, the question was: how do you scale a grassroots esports tournament into a recognized regional event without losing the community feel that made it work?",
    approach:
      "Built a progressive infrastructure after each edition — analyzing what broke, what grew, and what the community needed. Introduced dedicated registration flows, broadcast coordination workflows, sponsor reporting templates, and community feedback loops. Each edition had a documented retrospective.",
    outcome:
      "By Edition 6, the tournament was generating 52,200 views, running 25 teams with tight logistics, and had a recognizable brand in MENA esports. Total participation across all editions exceeded 5,000 players.",
    lessons:
      "Growth isn't about doing more — it's about systematizing what already works. The biggest jumps in quality came from removing friction, not adding features.",
    metrics: [
      { label: "Total Participants", value: "5,000+" },
      { label: "Editions Delivered", value: "6" },
      { label: "Live Views (Ed. 5)", value: "52,200" },
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
      { label: "Players managed", value: "230+" },
      { label: "Programs delivered", value: "5" },
      { label: "Teams coordinated", value: "25+" },
      { label: "Partnerships secured", value: "3" },
    ],
    tags: ["Program Management", "Systems Design", "Leadership"],
  },
];

export const stats: Stat[] = [
  { label: "Community Members", displayValue: "10,000+", numericEnd: 10000, suffix: "+", icon: "globe" },
  { label: "Tournament Participants", displayValue: "5,000+", numericEnd: 5000, suffix: "+", icon: "users" },
  { label: "Events Organized", displayValue: "32", numericEnd: 32, suffix: "", icon: "trophy" },
  { label: "Players Managed", displayValue: "230+", numericEnd: 230, suffix: "+", icon: "zap" },
  { label: "Teams Coordinated", displayValue: "25+", numericEnd: 25, suffix: "+", icon: "layers" },
  { label: "Editions Delivered", displayValue: "6", numericEnd: 6, suffix: "", icon: "trophy" },
];

export const certifications: Certification[] = [
  { name: "Google Project Management Certificate", status: "Completed", color: "#4f75ff" },
  { name: "Anthropic AI Certificate", status: "Completed", color: "#4f75ff" },
  { name: "Flutter & Dart", status: "Completed", color: "#10b981" },
  { name: "PMP (PMI)", status: "In Progress (2026)", color: "#7b5cf6" },
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
    year: "Mar 2023 – Jan 2024",
    title: "Project Manager — The Purge Tournament",
    description:
      "Joined this French company recognized as the gold standard for global events and community management, serving 3M+ players. Managed tournament operations, community coordination, and cross-functional event delivery at scale.",
    accent: "#4f75ff",
  },
  {
    year: "2023",
    title: "Launched Pyramids Cup",
    description:
      "Founded Pyramids Queue MENA Region Wild Rift Discord Server. Edition 1 ran 57 teams, 400 participants. Built the entire operational backbone from scratch.",
    accent: "#7b5cf6",
  },
  {
    year: "2024",
    title: "Joined Vicious Esports + Riot Games Partnership",
    description:
      "Joined as Operations & Product Systems Manager. Co-created Summer Camp 2024 — 1,800 participants across 53 teams and 5 simultaneous tournament formats. Secured partnership with Riot MENA, The Purge, and Wild Circuit.",
    accent: "#4f75ff",
  },
  {
    year: "2024",
    title: "Tencent Partner",
    description:
      "Collaborated in-house with Tencent on Honor of Kings ecosystem development. Delivered podcasts, community programs, and competitive infrastructure across MENA.",
    accent: "#4f75ff",
  },
  {
    year: "2026",
    title: "Shipped Vicious OS + Founded Nexaro",
    description:
      "Launched Vicious OS managing 230+ players across all titles. Founded Nexaro, a startup with 7-product ecosystem for workflow automation and AI-assisted operations.",
    accent: "#7b5cf6",
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