module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['import-helpers'],
  rules: {
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', ['parent', '/^~/'], ['sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['public/', 'node_modules/', 'src/serviceWorker.ts'],
};
