# Roadmap — Abdelrahman Mohamed Ahmed Portfolio

---

## Completed

- [x] Project scaffold — Next.js 16, React 19, TypeScript, Tailwind v4
- [x] Root layout — Navbar, Footer, Geist font, SEO metadata
- [x] Design system — glass utilities, gradient text, glow, color tokens, `.container` class
- [x] HeroSection — headline, animated stats row, CTA buttons (See work / Get in touch / Download CV)
- [x] AboutSection — bio, target role callout, skills grid
- [x] ImpactSection — animated stat counters
- [x] ProductsSection — product cards (Nexaro AI, Vicious OS, Pyramids Cup)
- [x] CaseStudiesSection — case study cards grid
- [x] TimelineSection — sticky label + career timeline entries
- [x] ContactSection — contact links (Email, LinkedIn, Linktree) + form
- [x] Data layer — single `data/index.ts` with all content
- [x] TypeScript interfaces for all data shapes
- [x] Static export config (`output: 'export'`)
- [x] Vercel deployment
- [x] Layout centering fix — `.container` class applied to all sections
- [x] Container widened to `max-width: 1400px` — prevents squeeze on 1440px+ screens
- [x] HeroSection — removed double `max-w-4xl mx-auto` constraint; content now fills container width
- [x] ContactSection — migrated from `max-w-7xl mx-auto` to `.container` class
- [x] Navbar — migrated from `max-w-7xl mx-auto px-6` to `.container` class
- [x] CTA anchor `#systems` fixed → `#products`; added `id="products"` to ProductsSection

---

## In Progress

*(nothing)*

---

## To Fix

- [ ] **FounderSystemsSection** — appears unused; decide whether to include or remove
- [ ] **`app/_app.tsx`** — empty file in `app/` directory; should be removed
- [ ] **Resume PDF** — confirm `/public/resume.pdf` exists so the Download CV button works

---

## To Build

### Contact Section Enhancement
- [ ] Working contact form with form submission (email service: Resend, Formspree, or similar)
- [ ] Form validation and success/error states
- [ ] Rate limiting / spam protection

### Case Studies Page (`/case-studies`)
- [ ] Full listing page at `/case-studies` route (route exists, needs content)
- [ ] Filter/sort by tag or category
- [ ] Search functionality

### Individual Case Study Pages (`/case-studies/[slug]`)
- [ ] Dynamic route for each case study
- [ ] Full long-form content: Challenge → Approach → Outcome → Lessons
- [ ] Metrics display
- [ ] Related case studies
- [ ] Back navigation

### Individual Product Pages (`/products/[slug]`)
- [ ] Deep-dive page per product
- [ ] Full problem statement, solution, tech stack details
- [ ] Screenshots / visuals

### Timeline Page (`/timeline`)
- [ ] Standalone full-screen timeline page
- [ ] More detail per entry than the home section allows

### Missing Sections
- [ ] **Testimonials / Social proof** — quotes from collaborators or clients
- [ ] **Skills deep-dive** — expandable skills with context/proficiency
- [ ] **Open to work banner** — visible availability callout with expected start date

---

## UI/UX Improvements

- [ ] Active nav link highlighting based on scroll position (IntersectionObserver)
- [ ] Smooth anchor scroll with offset for sticky navbar
- [ ] Mobile navigation — hamburger menu for small screens
- [ ] Page loading skeleton or transition
- [ ] Dark/light mode toggle (optional — dark is intentional brand choice)
- [ ] Hover micro-interactions on cards — depth, lift effect
- [ ] Add real project screenshots or mockup images to product cards
- [ ] Favicon — replace placeholder with custom favicon

---

## Performance

- [ ] Audit Lighthouse score and Core Web Vitals
- [ ] Verify `next/image` is used for any images (currently none present)
- [ ] Review Framer Motion bundle size — consider lazy-loading animation-heavy sections
- [ ] Check static export output size and prune unused assets in `/public`

---

## Responsive / Mobile

- [ ] Test and fix mobile layout for HeroSection at 375px and 414px
- [ ] Navbar mobile menu (hamburger) — currently no mobile nav
- [ ] Timeline section on mobile — sticky label breaks, needs scroll behavior tweak
- [ ] ProductsSection card grid on mobile — verify spacing at small breakpoints
- [ ] ContactSection form — test on touch devices
- [ ] Test iPad/tablet breakpoints (768px–1024px)
