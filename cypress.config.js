const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  env: {
    DEV_AUTH_URL: "https://auth.dev.edge.revix.com/authentication",
    QA_AUTH_URL: "https://auth.qa.edge.revix.com/authentication",
    DEV_BASE_URL: "https://app-api.dev.edge.revix.com",
    QA_BASE_URL: "https://app-api.qa.edge.revix.com",
    USERNAME: 'Martin.M@revix.com',
    PASSWORD: 'Thisisatest1'
  },
});
