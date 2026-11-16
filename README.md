# karintomazic.com

My portfolio site: who I am, how I work, and case studies of the projects I've built.

**Live:** karintomazic.com (coming soon)

## Tech stack

- **Astro 7** with **TypeScript** (strict)
- **Tailwind CSS v4**
- **React** only for the interactive parts (Astro islands), so most pages ship no JavaScript
- **Content collections:** each project is a Markdown file in `src/content/projects/`, and a schema checks its frontmatter at build time
- **ESLint** (with `jsx-a11y`) and **Prettier**

## Accessibility

- Semantic HTML with a proper heading order and landmarks
- Visible focus styles and full keyboard support
- All animations respect `prefers-reduced-motion`

## Project structure

```
src/
├── content/projects/   # one Markdown file per project (case studies)
├── content.config.ts   # schema for the project files
├── data/               # text for the About and How I work pages
├── components/         # Astro components (Hero, ProjectCard, …)
├── pages/              # routes: /, /about, /how-i-work, /projects, /projects/[slug]
├── scripts/effects.ts  # intro animation, scroll reveal, card tilt
└── styles/global.css
```

## Run it locally

You need Node.js 22 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build the site into dist/
npm run check    # TypeScript and Astro checks
npm run lint
```

### Add a project

Add a Markdown file to `src/content/projects/` and a screenshot to `src/assets/projects/`.
Set `draft: true` to show the card without a case study page.
