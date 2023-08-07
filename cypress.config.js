const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl : 'https://qa.d1ainun5cjrnni.amplifyapp.com',
    defaultCommandTimeout : 30000,

    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
