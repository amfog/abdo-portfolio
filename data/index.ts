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
    badge: "Systems Build",
    status: "live",
    subtitle:
      "Designed and built four production systems for a 500-player esports circuit: a Discord bot, a Flutter staff platform, a Next.js public site, and the Postgres schema underneath all three.",
    description:
      "Pyramids Queue runs the MENA Wild Rift circuit that feeds Rift Legends, the EMEA league. 536 players, 195 matches, 4,394 hours watched in a single edition. Coordinated by one person across a spreadsheet, a Discord server, and a group chat.\n\nI built the stack that replaced that, and I run the tournament on it.",
    kpi: "4",
    kpiLabel: "production systems on one Postgres database",
    featured: true,
    liveUrl: "https://pyramidsqueue.com",
    metrics: [
      { value: "536", label: "Players, one edition" },
      { value: "195+", label: "Matches operated" },
      { value: "147K", label: "Live views" },
      { value: "4,394", label: "Hours watched" },
    ],
    keyProblems: [
      {
        title: "Wild Rift scoreboards print no champion names",
        body:
          "Only a circular portrait. Everything about extracting them is image recognition rather than text, so the prompt instructs the model to return blank when unsure. Returning nothing is correct behaviour; returning a plausible wrong champion is the failure.",
      },
      {
        title: "Copy-pasting a Discord message destroys the data in it",
        body:
          "A mention renders as @name in the clipboard, and the numeric ID is gone. Registrations were losing every player ID silently, so roles were never granted and nobody could see why. Fixed by parsing the real mention and adding a way to pass the original message link instead of its text.",
      },
      {
        title: "The same substring bug in two alphabets",
        body:
          "A referee helper matched keywords to suggest rulebook answers. includes('sub') matched \"how do we submit the result\" and answered a results question with roster rules. Fixing it with word boundaries then exposed the Arabic version, which is worse: \\b is defined on ASCII characters so it never matches at the edge of an Arabic word, and Arabic joins the definite article directly to the noun, so النت (the internet) is a prefix of النتيجة (the result). Both found by writing the test cases out, not by reading the code.",
      },
    ],
    contributions: [
      {
        title: "Designed the data model first",
        body:
          "Four systems share one Postgres database. The bot writes, the staff platform verifies, the public site reads. The alternative, each system with its own store and a sync between them, is where the original problem came from, so it was ruled out before anything was written.",
      },
      {
        title: "Made row level security the privacy boundary, not the application",
        body:
          "Seven circuits on one deployment, each seeing only its own data, enforced in database policies. The public site reads nine public_* views rather than any table, so Discord handles, staff notes and unverified statistics cannot reach a visitor by construction rather than by remembering to filter.",
      },
      {
        title: "Built the verification gate",
        body:
          "Model-extracted player statistics land with verified_at empty and the public view filters them out until a person approves them in the staff app. The filter is in the view, so a future page cannot bypass it.",
      },
      {
        title: "Wrote the Discord bot",
        body:
          "Ten commands, TypeScript. Registers a team from a pasted roster, reads a Toornament bracket screenshot into a bracket, creates a private channel per match with the right roles, DMs every player a link, and reads end-of-game scoreboards into statistics.",
      },
    ],
    retro:
      "The public site and the season page were built as two implementations of the same standings table, three weeks apart. They drifted, and one of them never got the mobile work, so it forced a horizontal scrollbar on every phone. Merging them into one component was ninety lines deleted and the bug fixed at the same time. The lesson is not \"reuse components\", which everybody already knows. It is that the second implementation existed because I forgot the first one, and the fix was a search before a build.",
    techStack: [
      "TypeScript",
      "Node",
      "discord.js",
      "Next.js 15",
      "React 19",
      "Tailwind",
      "Flutter",
      "Riverpod",
      "Supabase",
      "Postgres with row level security",
      "Gemini for image extraction",
      "Vercel",
    ],
    sellable: false,
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
