const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Reporter Automation Project KOMAX',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: 2,
  defaultCommandTimeout: 5000,
  fixturesFolder: 'cypress/fixtures',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

