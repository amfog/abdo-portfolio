# Portfolio Website — Product Blueprint
## NX Code: NX-PORT.W
## Status: Live
## Live URL: abdofog.vercel.app

### 1. Core Statement
A personal portfolio website for Abdelrahman Mohamed Ahmed showcasing 3+ years of operations architecture, esports infrastructure, and AI-assisted systems building across MENA and EMEA. It serves as the primary conversion tool for product operations, program management, and esports operations job applications.

### 2. Target User
Two audiences:
- Hiring managers and recruiters in product ops, esports, and program management roles
- Potential clients or partners exploring Nexaro products and Pyramids Cup collaboration

Pain: They see hundreds of portfolios. They need to understand who you are, what you have shipped, and why you are different in under 30 seconds.

### 3. Feature Registry
| Feature | Description | Priority | Status |
|---|---|---|---|
| Hero section with photo orbit | Animated photo with 4 role nodes | High | Live |
| Mobile swipe hero | Card flip between headline and photo on mobile | High | Live |
| Animated headline | Word-by-word reveal with shimmer | Medium | Live |
| Impact stats | 6 key metrics from career | High | Live |
| About section with MENA map | Bio + SVG map showing Pyramids Cup origin | High | Live |
| Case study teasers | Short cards linking to full pages | High | Live |
| Case study full pages | Deep-dive pages per project | High | In Progress |
| Products section | 2 cards: Nexaro and Pyramids Queue | High | Live |
| Timeline | Career journey 2019 to 2026 | Medium | Live |
| Contact section | Links and form | Medium | Live |
| Arabic language toggle | RTL support with language switch in navbar | Low | Planned |
| Testimonials section | Social proof from partners and players | High | Planned |
| Methodology section | How I solve problems framework | Medium | Planned |
| Social proof logos strip | Riot Games, Vicious, The Purge logos | High | Planned |

### 4. AI Architecture
Not applicable for the portfolio frontend. Claude AI used during development via Claude Code for component generation and iteration.

### 5. Technical Stack
- Framework: Next.js 16.2.3, React 19, TypeScript
- Styling: Tailwind CSS v4, Framer Motion 12
- Font: Geist
- Build: Static export, deployed on Vercel
- Data: data/index.ts as single source of truth
- Dev workflow: Claude Code for AI-assisted development

### 6. Integration Points
- Links to Nexaro website: project-jelc4.vercel.app
- Links to Pyramids Queue website: project-c3kqs.vercel.app
- Links to Vicious Esports Instagram
- Links to Liquipedia profile
- Future: Supabase for contact form submissions

### 7. Open Questions
- Should the contact form submit to Supabase or a simple email service?
- Arabic RTL: full translation or just layout toggle?
- Should case study pages be statically generated or fetched from a CMS?
- Should testimonials be hardcoded or pulled from a form submission system?
