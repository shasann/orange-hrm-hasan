const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      username: 'Admin',
      password: 'admin123'
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280, // Set the viewport width for all browsers
    viewportHeight: 720, // Set the viewport height for all browsers
  },
});
