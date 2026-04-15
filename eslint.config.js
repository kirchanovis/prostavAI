import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import { defineConfig, globalIgnores } from 'eslint/config';

// ESLint v9 + "Airbnb-like" ruleset (since eslint-config-airbnb doesn't support v9 yet)
export default defineConfig([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      import: importPlugin,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    rules: {
      // --- import rules (Airbnb-ish) ---
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // --- React/TSX ergonomics ---
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // --- A11y basics (subset of airbnb) ---
      'jsx-a11y/alt-text': 'error',

      // --- TypeScript hygiene ---
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

      // --- Style/footguns ---
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },

  // Disable formatting-related ESLint rules that conflict with Prettier
  // (eslint-config-prettier)
  (await import('eslint-config-prettier')).default,
]);
