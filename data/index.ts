import type { Product, CaseStudy, TimelineEntry, Stat, Edition, Certification } from "@/types";

export const products: Product[] = [
  {
    id: "nexaro",
    slug: "nexaro",
    title: "Nexaro",
    badge: "Startup Vision",
    subtitle: "Founder & CEO: AI Workflow Ecosystem",
    description:
      "Building a suite of 7 integrated operational products powered by AI. Includes Vicious OS, Nexaro Life, CRM, HR, Rent OS, Teams OS, and the Core Platform. Built with N8N automations, Discord bots, and AI APIs to eliminate operational chaos for modern teams.",
    kpi: "7",
    kpiLabel: "Products in Ecosystem",
    problems: [
      "Workflow chaos across teams",
      "Scattered data & reporting delays",
      "Manual task coordination",
      "AI integration fragmentation",
      "Cross-department visibility gaps",
    ],
    tech: ["N8N", "AI APIs", "Supabase", "Flutter", "Discord Bots", "Automations"],
    featured: true,
    href: "https://project-jelc4.vercel.app",
    challenge:
      "Teams waste 30-40% of their time on manual coordination, scattered tools, and reactive reporting, slowing velocity and burning out talent.",
    solution:
      "Nexaro unifies operations through 7 integrated products: Platform (master hub), Vicious OS (esports ops), Nexaro Life (personal productivity), CRM, HR, Rent OS, and Teams OS, plus AI automations, Notion/Sheets templates, and Discord bots.",
    outcome:
      "Early adopters report 40% reduction in operational overhead, faster decision-making through real-time dashboards, and scalable systems that grow with the team.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Supabase", "N8N", "Qwen 2.5", "Claude API"],
    sellable: false,
    pricingSetup: "N/A",
    pricingRetainer: "N/A",
    setupTime: "N/A",
  },
  {
    id: "pyramids-queue",
    slug: "pyramids-queue",
    title: "Pyramids Queue",
    badge: "Community Founder",
    subtitle: "MENA Esports Community Hub",
    description:
      "Founded the community hub for MENA Wild Rift ecosystem. Partnered with Riot Games. Scaled to 4,961+ players across 20+ events with 1.8M+ total reach and 88K+ Discord watch hours.",
    kpi: "1.8M+",
    kpiLabel: "Total Reach",
    problems: [
      "Community fragmentation",
      "Lack of regional tournaments",
      "Player discovery difficulty",
      "Scattered event management",
    ],
    tech: ["Discord", "Riot Games", "Tournament Ops", "Community", "Event Ops"],
    featured: true,
    href: "https://project-c3kqs.vercel.app",
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
    id: "pyramids-cup",
    slug: "pyramids-cup",
    title: "Pyramids Cup",
    tag: "Esports Operations",
    tagline: "Built MENA's first Wild Rift regional qualifier from scratch",
    problem:
      "The MENA region had no path to international Wild Rift competition. No qualifiers, no recognition, no infrastructure.",
    outcome:
      "6 editions delivered. 5,000+ participants. Riot Games partnership secured. MENA now recognized by EMEA.",
    stat1: { value: "1.8M+", label: "Total Reach" },
    stat2: { value: "6", label: "Editions Delivered" },
    status: "Active",
    link: "/case-studies/pyramids-cup",
  },
  {
    id: "vicious-os",
    slug: "vicious-os",
    title: "Vicious OS",
    tag: "Product Systems",
    tagline: "Built the internal operating system for a multi-title esports org",
    problem:
      "Vicious Esports managed 230+ players across titles with no unified system. Manual reporting consumed 20+ hours per week.",
    outcome:
      "Vicious OS unified all operations. Single source of truth for player data, contracts, schedules, and KPIs.",
    stat1: { value: "230+", label: "Players Managed" },
    stat2: { value: "80%", label: "Less Manual Work" },
    status: "Active",
    link: "/case-studies/vicious-os",
  },
  {
    id: "nexaro",
    slug: "nexaro",
    title: "Nexaro",
    tag: "Startup",
    tagline: "Building a 7-product AI operations ecosystem as a solo founder",
    problem:
      "Modern teams run on disconnected tools. Ops teams waste hours on tasks that should be automated.",
    outcome:
      "7 integrated products in development. CRM, HR, Rent OS, Teams OS, Vicious OS, Nexaro Life, and Core Platform.",
    stat1: { value: "7", label: "Products Building" },
    stat2: { value: "2026", label: "Founded" },
    status: "In Development",
    link: "/case-studies/nexaro",
  },
];

export const stats: Stat[] = [
  { label: "Social Media Reach", displayValue: "1.8M+", numericEnd: 1800000, suffix: "+", icon: "globe" },
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
    year: "2019",
    title: "Professional Wild Rift Player & Analyst",
    description:
      "Competed professionally in League of Legends: Wild Rift across MENA. Active streamer and in-game analyst. Liquipedia profile: liquipedia.net/wildrift/F0G",
    accent: "#06b6d4",
  },
  {
    year: "2023",
    title: "Founded Pyramids Queue",
    description:
      "Founded the Pyramids Queue MENA Region Wild Rift Discord Server. Built the operational backbone from scratch. Edition 1 ran 57 teams and 400 participants.",
    accent: "#f59e0b",
  },
  {
    year: "Mar 2023 – Jan 2024",
    title: "Project Manager, The Purge Tournament",
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
      "Joined as Operations & Product Systems Manager. Co-created Summer Camp 2024 with 1,800 participants across 53 teams and 5 simultaneous tournament formats. Secured partnership with Riot MENA, The Purge, and Wild Circuit.",
    accent: "#4f75ff",
  },
  {
    year: "2024",
    title: "Tencent Partner",
    description: "Collaborated in-house with Tencent on Honor of Kings ecosystem development. Delivered regional qualifiers, community programs, and competitive infrastructure across MENA.",
    accent: "#4f75ff",
  },
  {
    year: "2025",
    title: "National Phygital Operator, Saudi Arabia",
    description: "Built the operational and public-facing infrastructure for Vicious Esports as the national phygital operator in Saudi Arabia. Delivered the SEF Arena hosting partnership with Al-Ittihad Al-Saudi, a national deployment framework, and full support systems for the Saudi Legends team, which qualified for the Games of the Future 2026 in Astana.",
    accent: "#10b981",
  },
  {
    year: "2026",
    title: "Shipped Vicious OS + Founded Nexaro",
    description:
      "Launched Vicious OS managing 230+ players across all titles and 8 departments. Founded Nexaro, a startup with a 7-product ecosystem for workflow automation and AI-assisted operations.",
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
