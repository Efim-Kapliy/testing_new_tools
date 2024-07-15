export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          modules: true,
        },
      },
    },
  },
  {
    rules: {
      // Note: you must disable the base rule as it can report incorrect errors
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
    },
  },
];
