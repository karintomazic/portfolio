# Portfolio plan: karintomazic.com

**Stack:** Astro + TypeScript (strict) + Tailwind + React (islands only for interactive parts)
**Goal:** a portfolio that proves what my LinkedIn says: React/Next.js/TypeScript, AI-assisted workflow, tested UI, accessibility and good design.
**Pace:** ~4 weeks, 2–3 h/day, next to the TypeScript course and interview prep.
**Projects to feature:** tattoobyjs (live) · iobi (live ~December) · react-onboarding-nextjs (Storybook & testing showcase)

How I work on it: I run every command myself, commit after every step, and push to GitHub myself.

---

## Phase 1: Setup (days 1–2)
- [x] Create the Astro project (`npm create astro@latest portfolio`)
- [x] Add integrations: Tailwind, React, sitemap (`npx astro add ...`)
- [ ] `git init` + first commit
- [ ] Create a public GitHub repo and push
- [ ] Prettier + ESLint (incl. `eslint-plugin-jsx-a11y` and `eslint-plugin-astro`)
- [ ] Clean out the starter files (Welcome component, demo assets)

✅ Checkpoint: site runs locally (`npm run dev`), first commit on GitHub.

## Phase 2: Content and design (days 3–7)
Write the text first, then design around it.

**Content**
- [ ] Hero: one sentence on who I am and what I do
- [ ] About: environmental engineering → WordPress → Drupal → React/TypeScript → AI-first workflow
- [ ] Case study: tattoobyjs
- [ ] Case study: react-onboarding-nextjs (Storybook, Vitest, Playwright, 59 stories)
- [ ] Case study: iobi (draft now, publish when live)
- [ ] "How I work" page: AI-assisted workflow + testing + accessibility
- [ ] CV as PDF

Each case study: problem / what it is · my role and stack · 2–3 key decisions · how I used AI and checked the output · testing and accessibility · screenshots + live and GitHub links.

**Design**
- [ ] Moodboard: collect 5–10 portfolios/sites I like and note why
- [ ] Pick fonts (max 2) and a type scale
- [ ] Color palette with light and dark mode, all text pairs passing WCAG AA contrast (4.5:1)
- [ ] Spacing scale and a few components: button, link, card, tag
- [ ] Wireframe Home + Project page (paper, Figma or Claude Design)
- [ ] Put tokens into Tailwind config / CSS variables

✅ Checkpoint: all text in Markdown files, design tokens defined, wireframes done.

## Phase 3: Build the pages (week 2)
- [ ] Base layout: header, footer, **skip-to-content link**, landmarks (`header`, `nav`, `main`, `footer`)
- [ ] Home: hero, short intro, featured projects, tech stack
- [ ] Projects: list + one page per project via **Astro content collections**
- [ ] About: story + experience timeline
- [ ] How I work
- [ ] Contact: email + LinkedIn + GitHub links (no form for now)
- [ ] 404 page
- [ ] React island: dark mode toggle (accessible button, remembers choice, respects system setting)
- [ ] React island: project filter by tech (keyboard friendly, announces results to screen readers)

**Accessibility while building**
- [ ] Semantic HTML first, ARIA only when needed
- [ ] Visible focus styles on everything interactive
- [ ] Logical heading order (one `h1` per page)
- [ ] Meaningful alt text on all images
- [ ] Respect `prefers-reduced-motion` for any animation
- [ ] Works at 200% zoom and on 320px wide screens

✅ Checkpoint: all pages work on desktop and mobile, fully usable with keyboard only.

## Phase 4: Quality = proof (week 3)
- [ ] Storybook for the React components (+ `@storybook/addon-a11y`)
- [ ] Vitest + React Testing Library tests for the islands
- [ ] Playwright smoke tests: pages load, navigation, filter, dark mode
- [ ] Automated accessibility checks with `@axe-core/playwright` on every page
- [ ] Manual check with a screen reader (Orca on Linux) on Home and one project page
- [ ] GitHub Actions: lint + tests on every push
- [ ] Lighthouse 95+ (Performance, Accessibility, Best Practices, SEO)
- [ ] SEO: titles, descriptions, Open Graph images, sitemap, robots.txt
- [ ] README: architecture, testing, accessibility approach

✅ Checkpoint: green CI badge, Lighthouse 95+, zero axe violations.

## Phase 5: Go live (week 4)
- [ ] Find out the Hetzner setup: Cloud server (VPS) or Webhosting?
- [ ] `npm run build` → static files in `dist/`
- [ ] Serve the site (Caddy/nginx on a VPS, or upload to webhosting)
- [ ] Point karintomazic.com DNS to it, HTTPS working
- [ ] Optional: automatic deploy from GitHub Actions

✅ Checkpoint: karintomazic.com live with HTTPS.

## After launch
- [ ] December: publish the iobi case study when it's live
- [ ] LinkedIn to-do list (Featured, Projects, banner with URL, education + Udemy certificates, first post)
- [ ] Optional: small NestJS API project + case study
