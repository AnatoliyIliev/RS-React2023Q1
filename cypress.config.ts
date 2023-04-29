import { defineConfig } from 'cypress';
import MyFunction from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:5003',
    setupNodeEvents(on, config) {
      MyFunction(on, config);
      return config;
    },
    video: false,
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents(on, config) {
      MyFunction(on, config);
      return config;
    },
    video: false,
  },
});
