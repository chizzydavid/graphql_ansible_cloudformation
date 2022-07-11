/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/**/*.(test|spec).ts"],
  verbose: true,
  clearMocks: true,
  forceExit: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};