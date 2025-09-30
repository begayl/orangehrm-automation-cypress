import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    experimentalStudio: true,
    setupNodeEvents(on, config) {
    },
  },
})
