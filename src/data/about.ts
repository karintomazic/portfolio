// Text for the About page. Kept here (not in the .astro file) so the
// layout and the words can change independently.

export interface Fact {
  value: string;
  label: string;
}

export interface Job {
  years: string;
  role: string;
  place: string;
  text?: string;
}

export interface StorySection {
  heading: string;
  paragraphs: string[];
}

export const intro =
  "I'm a frontend developer from Maribor, Slovenia. I build accessible, well-tested web interfaces with React, Next.js and TypeScript.";

export const facts: Fact[] = [
  { value: '7+', label: 'years building for the web' },
  { value: '5+', label: 'long-running client projects' },
  { value: '2', label: 'own products with Next.js + PocketBase' },
  { value: 'Remote', label: 'from Maribor, Slovenia' },
];

export const story: StorySection[] = [
  {
    heading: 'How I got here',
    paragraphs: [
      "I didn't start out in tech. I studied environmental engineering, but along the way I fell in love with coding and creating beautiful websites. I also found out how much I enjoy working on projects together with a group of people.",
      'My first job in the industry was a year-long internship at AM Creative Agency, where I built WooCommerce online shops on WordPress: customising themes, building checkout pages and handling client change requests.',
      'In 2020 I joined Agiledrop, a staff-augmentation agency, and spent almost seven years there. I was placed on 5+ long-running projects for enterprise companies, international organisations and AI startups, mostly building and theming Drupal websites with Twig, SCSS and JavaScript. Each placement meant joining an existing team and codebase and being productive within a couple of days. That taught me to read unfamiliar code fast, write code that survives handovers, and communicate clearly with designers, developers and clients.',
    ],
  },
  {
    heading: 'How I work now',
    paragraphs: [
      'Over the last year and a half my work changed a lot. I moved to React, Next.js and TypeScript, and to an AI-assisted workflow with Claude and Codex. I now spend less time typing code and more time on the parts that matter: architecture, data models, how the pieces fit together, and reviewing what gets generated. Tests are what make that workflow trustworthy, so I build components in Storybook and test them with Vitest, React Testing Library and Playwright.',
      "Right now I'm deepening my TypeScript and extending into the backend with Node.js and NestJS.",
    ],
  },
  {
    heading: 'What I care about',
    paragraphs: [
      'I care about accessibility and good design because I strongly believe everyone should be able to use the web, and that nobody should be excluded from the pages I build. I want the people who use them to feel good doing it.',
    ],
  },
];

export const outsideWork =
  'I make pottery, go horseback riding and read a lot. I even run a book club with my friends. I love to travel, and I adore taking my dog on walks.';

export const hobbies: string[] = [
  'Pottery',
  'Book club',
  'Horseback riding',
  'Dog walks',
  'Travel',
];

export const experience: Job[] = [
  {
    years: '2020 – 2026',
    role: 'Frontend Developer',
    place: 'Agiledrop (remote)',
  },
  {
    years: '2019 – 2020',
    role: 'Frontend Developer (Intern)',
    place: 'AM Creative Agency',
  },
  {
    years: '2016 – 2018',
    role: 'Environmental Engineering',
    place: 'Higher Vocational College L.I.V.E.',
  },
];
