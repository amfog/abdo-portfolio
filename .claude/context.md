# Claude Session Context

## Project Summary

Personal portfolio for **Abdelrahman Mohamed Ahmed** — Founder, Operations Architect, Product Systems Leader.  
Static Next.js site deployed on Vercel. Dark navy/blue/purple design language with glass card aesthetic.

**Stack**: Next.js 16.2.3 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion 12 · Geist font  
**Build mode**: Static export (`output: 'export'`) → deploys to Vercel or GitHub Pages

---

## Current Status (as of April 2026)

All 7 sections are built and rendering. Layout centering fix was the main recent work.

**Sections on home page (app/page.tsx):**
1. HeroSection — headline, stats, CTAs
2. AboutSection — bio + skills
3. ImpactSection — animated stat counters
4. ProductsSection — 3 product cards
5. CaseStudiesSection — case study cards
6. TimelineSection — career timeline
7. ContactSection — links + form

---

## The Layout Problem (Fixed)

**Symptom**: All content left-aligned on wide screens; looked centered only when browser was narrow.

**Root cause**: Sections used `max-w-7xl mx-auto` + `px-4 sm:px-6` padding BUT the inner content divs had no `mx-auto` to center them within their containers.

**Fix applied**:
1. Added `.container` class to `app/globals.css`:
   - `max-width: 1200px; margin: auto; padding: 2rem → 3rem → 4rem`
2. Replaced `max-w-7xl mx-auto + inline px-*` with `container` class on the inner wrapper div in every section.
3. Added `mx-auto` to `max-w-4xl` inner div in HeroSection.

**Sections updated**: HeroSection, AboutSection, ImpactSection, ProductsSection, CaseStudiesSection, TimelineSection.  
**ContactSection**: needs verification — may still use old pattern.

---

## What Was Last Worked On

1. Fixing the layout centering/alignment bug across all sections
2. Creating PROJECT_OVERVIEW.md and ROADMAP.md
3. This context file

---

## Immediate Next Steps

1. Open `http://localhost:3001` and verify layout is centered on wide viewport
2. Check `ContactSection.tsx` — update to `.container` if it still uses `max-w-7xl`
3. Fix broken CTA: "See my work" links to `#systems` but no section has that id — should be `#products`
4. Confirm `/public/resume.pdf` exists (Download CV button)
5. Build individual case study pages at `/case-studies/[slug]`

---

## Common Commands

```bash
npm run dev      # Start dev server → http://localhost:3000 (or :3001 if in use)
npm run build    # Build static export to /out
npm run lint     # ESLint

# Deploy
vercel deploy --prod
```

---

## Important File Locations

| What | Where |
|---|---|
| All site content (data) | `data/index.ts` |
| TypeScript types | `types/index.ts` |
| Global styles + design tokens | `app/globals.css` |
| Root layout (Navbar/Footer) | `app/layout.tsx` |
| Home page (section assembly) | `app/page.tsx` |
| All section components | `components/sections/` |
| UI primitives | `components/ui/` |
| Next.js config | `next.config.ts` |

---

## Design Tokens (Quick Ref)

```
bg:        #0d0d20
primary:   #4f75ff
secondary: #7b5cf6
font:      Geist (--font-geist)

.glass        → bg 3%, border 6%, blur 6px
.glass-card   → bg 8%, border 12%, blur 8px
.glass-strong → bg 5%, border 8%, blur 10px
.container    → max-w 1200px, centered, responsive padding
```

---

## Known Issues / Watch Out For

- **Tailwind v4** — no `tailwind.config.js`; all config is CSS-first via `@theme` in `globals.css`
- **Static export** — no server-side features (no API routes, no `useSearchParams` without Suspense)
- **`app/_app.tsx`** — empty file inside `app/` dir; leftover from Pages Router thinking; doesn't affect anything but should be cleaned up
- **`FounderSystemsSection.tsx`** — exists in `components/sections/` but not rendered anywhere; unused
- **Port conflict** — dev server may start on 3001 instead of 3000 if another process is running
