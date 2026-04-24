<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Portfolio — Architecture Guide for Claude

## Project
Abdelrahman Mohamed Ahmed — personal portfolio and product showcase
Live: https://abdofog.vercel.app
Repo: https://github.com/amfog/abdo-portfolio

## Tech Stack
Next.js 16 App Router, TypeScript strict, Tailwind CSS,
Framer Motion, Lucide React, Geist font

## Folder Structure
```
app/
  layout.tsx           root layout, metadata, Navbar + Footer
  page.tsx             homepage, assembles all sections
  globals.css          design system, utility classes
  products/[slug]/     dynamic product detail pages
  case-studies/[slug]/ dynamic case study pages

components/
  layout/              Navbar.tsx, Footer.tsx
  sections/            one file per homepage section
  ui/                  reusable cards and atoms

data/
  index.ts             ALL content: products, caseStudies, timeline, stats, skills

types/
  index.ts             TypeScript interfaces
```

## Data Flow
All content lives in `data/index.ts`.
Sections import: `import { products } from '@/data'`
Dynamic pages use `generateStaticParams` from `data/index.ts`.
No database. No API calls. No environment variables required.

## Design System
- Background: `#0d0d20`
- Primary: `#4f75ff`
- Secondary: `#7b5cf6`
- Glass cards: `rgba(255,255,255,0.08)` bg, `rgba(255,255,255,0.12)` border
- Key classes: `.glass-card` `.glass-card-hover` `.btn-primary` `.btn-secondary`
             `.gradient-text-brand` `.section-label` `.container`

## Deployment
Git push to `main` triggers Vercel auto-deploy.
Manual: `vercel --prod` then `vercel alias [URL] abdofog.vercel.app`

## Active Sections (in order)
1. HeroSection
2. AboutSection
3. ImpactSection
4. ProductsSection (5 products)
5. CaseStudiesSection (3 case studies)
6. TimelineSection (6 entries)
7. ContactSection
8. Footer

## Contact Form
Sends to `mailto:Abdo.fog@gmail.com`. Frontend only, no backend required.

## Rules — Do Not Violate
- Never add a `pages/` directory — App Router only
- Never create duplicate `globals.css` files
- Never import from `app/lib/data.ts` — always use `data/index.ts`
- Never add `FounderSystemsSection` — removed, duplicates ProductsSection
- Always use `.container` class for section wrappers — never `max-w-7xl mx-auto px-6`
