import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in src/content/projects/.
// The schema checks every file's frontmatter at build time: a typo or a
// missing field fails the build instead of silently breaking a page.
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(), // short line on the project card
      description: z.string(), // 1–2 sentences under the title on the case study
      badge: z.enum(['Client project', 'Web app', 'Coming soon']),
      role: z.string().optional(), // e.g. "Solo, design and development"
      tags: z.array(z.string()),
      cover: image(),
      coverAlt: z.string(),
      panel: z.enum(['bg-surface', 'bg-surface-alt']), // colour behind the screenshot
      links: z.object({
        live: z.url().optional(),
        github: z.url().optional(),
      }),
      order: z.number(), // position in lists: 1 comes first
      draft: z.boolean().default(false), // drafts get a card but no page yet
    }),
});

export const collections = { projects };
