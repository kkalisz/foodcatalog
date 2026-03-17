// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginPromise from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  ignores: [
    'node_modules/**',
    'public/**',
    'build/**',
    'tsconfig.json',
    'node_modules',
    'postcss.config.js',
    'coverage/**',
    '.next/**',
  ],
}, {
  files: ['**/*.js', '**/*.ts', '**/*.tsx', '**/*.jsx'],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    prettierConfig,
    pluginPromise.configs['flat/recommended'],
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    eslintPluginPrettierRecommended,
    eslintPluginImport.flatConfigs.recommended,
    eslintPluginImport.flatConfigs.typescript,
  ],
  plugins: {
    'jsx-a11y': jsxA11y,
    'react-hooks': pluginReactHooks,
    'unused-imports': unusedImports,
  },
  languageOptions: {
    parser: tseslint.parser,
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: import.meta.dirname,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extension': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
      node: {
        project: ['tsconfig.json'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'n/no-missing-import': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'react/forbid-prop-types': 0,
    'react/no-danger': 0,
    'react/jsx-no-target-blank': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 1,
    'react/default-props-match-prop-types': 1,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-newline': 0,
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'linebreak-style': 0,
    'no-confusing-arrow': 0,
    'arrow-body-style': 0,
    'spaced-comment': 0,
    camelcase: 0,
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/jsx-key': 1,
    'react/display-name': 1,
    curly: ['error', 'all'],
    'no-console': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/sort-comp': 'off',
    '@typescript-eslint/no-non-null-assertion': 0,
    'lines-between-class-members': 'off',
    'react/function-component-definition': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'promise/catch-or-return': 'off',
  },
}, {
  files: ['**/*.ts', '**/*.tsx'],
  rules: {
    'react/prop-types': 0,
  },
}, {
  files: ['**/*.test.*'],
  rules: {
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-param-reassign': 0,
  },
}, storybook.configs["flat/recommended"]);
