/* eslint-disable */
import { defineConfig } from 'cypress';
import registerCodeCoverageTasks from '@cypress/code-coverage/task';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5004',
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
      return config;
    },
  },
  env: {
    codeCoverage: {
      exclude: './cypress/**/*.*',
    },
  },
});
