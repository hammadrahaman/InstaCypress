const { defineConfig } = require("cypress");

/* export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: "**/  //.cy.ts" 
//},
//});



module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 20000,
    responseTimeout: 200000,
    requestTimeout: 20000,
    pageLoadTimeout: 50_0000,
    numTestsKeptInMemory: 2,
    experimentalMemoryManagement: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern: "**/*.cy.{js, ts}"
  },
})