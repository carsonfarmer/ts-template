module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [{ pattern: 'src/**/*.ts' }],
    preprocessors: {
      '**/*.ts': ['karma-typescript'],
    },
    reporters: ['mocha', 'karma-typescript'],
    browsers: ['PhantomJS'],
    phantomJsLauncher: {
      exitOnResourceError: true,
    },
    port: 9876,
    autoWatch: false,
    singleRun: true,
    karmaTypescriptConfig: {
      reports: {
        html: 'coverage',
        'text-summary': '', // destination "" will redirect output to the console
      },
    },
    karmaTypescriptConfig: {
      disableCodeCoverageInstrumentation: true,
    },
  })
}
