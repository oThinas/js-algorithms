/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  testMatch: ['**/tests/**/*.test.ts', '**/playground.test.ts'],
};