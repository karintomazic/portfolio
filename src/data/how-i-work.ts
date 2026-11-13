// Text for the How I work page. Kept here (not in the .astro file) so the
// layout and the words can change independently.

export interface Step {
  id: string;
  title: string;
  summary: string;
  points: string[];
}

export const intro =
  "I'm in charge of the code, and I use AI to work faster. Here's how I get from an idea to something I'm happy to ship.";

export const steps: Step[] = [
  {
    id: 'plan',
    title: 'Plan',
    summary:
      'Before I write any code, I make sure I understand what we are building and why.',
    points: [
      'On my own projects, I write a plan and sketch the pages on my iPad.',
      'I build a moodboard on Pinterest with inspiration, colours, fonts and the overall vibe of the project.',
      'On an existing team project, I start by reading the codebase and talking to the people already working on it, so I know what is expected of me, what the goal is and what the client wants.',
    ],
  },
  {
    id: 'build',
    title: 'Build with AI',
    summary:
      'AI makes me faster and more productive, but I stay in charge of the code.',
    points: [
      'I write a CLAUDE.md together with Claude for every project, so the agent knows the stack, the setup and the rules before it writes a line.',
      'I let it write markup and styling classes, where a mistake is easy to spot.',
      'I ask it to pull up the relevant documentation when I work with a library I do not know yet.',
      'On agency projects, I used it to summarise what existing code does, so I could get familiar with a new codebase faster.',
      'Anything that matters, I check myself.',
    ],
  },
  {
    id: 'test',
    title: 'Test',
    summary: 'Tests are what make an AI-assisted workflow trustworthy.',
    points: [
      'Every component gets a Storybook story and unit tests.',
      'I write the tests after building a feature, then fix whatever they catch.',
      'I also ask AI to check for spelling mistakes and the small details that are easy to miss.',
    ],
  },
  {
    id: 'accessibility',
    title: 'Check accessibility',
    summary:
      'Nothing is done until everyone can use it. Before I call a page finished, I check:',
    points: [
      'Keyboard navigation',
      'Colour contrast',
      'Screen readers',
      'Semantic HTML',
      'Lighthouse',
    ],
  },
  {
    id: 'team',
    title: 'Work with people',
    summary:
      'I love working with designers, project managers and other developers.',
    points: [
      'I care about how a page looks, but I also keep a firm hand on UI and UX: it has to be usable and serve its purpose.',
      'I like peer code reviews, asking questions early and regular sync meetings.',
    ],
  },
];

// Who does what: shown as a side-by-side comparison
export const aiDoes: string[] = [
  'Markup and styling classes',
  'Finding the right documentation',
  'Summarising unfamiliar code',
  'Spotting typos and small details',
];

export const iDo: string[] = [
  'Plan, sketch and moodboard',
  'Decide how things are built',
  'Check everything that matters',
  'Test and accessibility checks',
];

export const closing =
  "I'm a fast learner. I adjust quickly to new teams and new tech, and I deliver what the project needs.";
