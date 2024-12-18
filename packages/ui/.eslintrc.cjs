/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@jaeheesong-ktc/eslint-config/index.js', 'plugin:storybook/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  ignorePatterns: ['vite.config.ts', 'global.d.ts', 'dist', 'storybook-static'],
}