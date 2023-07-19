import { defineConfig } from 'cypress';
import registerCodeCoverageTasks from '@cypress/code-coverage/task';
export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-var-requires
      registerCodeCoverageTasks(on, config);
      return config;
    },
  },
});
