module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testResultsProcessor: 'jest-sonar-reporter',
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  }
}
