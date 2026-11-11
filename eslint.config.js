import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';

export default [
  // Folders ESLint should skip (build output and generated files)
  { ignores: ['dist/', '.astro/', 'node_modules/'] },

  // Basic JavaScript + TypeScript rules
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Astro files, including accessibility checks
  ...astro.configs.recommended,
  ...astro.configs['jsx-a11y-recommended'],

  // Accessibility checks for React components
  {
    files: ['**/*.{jsx,tsx}'],
    ...jsxA11y.flatConfigs.recommended,
  },
  // Must be last: switch off rules that conflict with Prettier
  prettier,
];
