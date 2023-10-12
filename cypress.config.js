const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1366,   // Ancho en píxeles
  viewportHeight: 768,   // Alto en píxeles
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Reporter Automation Project KOMAX',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
