/* eslint-disable @typescript-eslint/no-unused-vars */
// Plugins enable you to tap into, modify, or extend the internal behavior of Cypress
// For more info, visit https://on.cypress.io/plugins-api

import * as browserify from '@cypress/browserify-preprocessor';
import * as reporter from 'multiple-cucumber-html-reporter';
import cucumber from 'cypress-cucumber-preprocessor';

const options = {
  ...browserify.defaultOptions,
  typescript: 'node_modules/typescript',
};

const report = {
  jsonDir: 'dist/e2e/report/json',
  reportPath: 'dist/e2e/report/html',
};

export default (on: (arg1, arg2) => void, config: object): void => {
  on('file:preprocessor', cucumber(options));
  on('after:run', () => reporter.generate(report));
};
