import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // Vite's default dev server
    supportFile: false,               // Set to false if you're not using support files yet
    specPattern: 'cypress/e2e/**/*.cy.{ts,js}',

    setupNodeEvents(on, config) {
      // Add plugins or event hooks here if needed
      return config;
    },
  },
});
