import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the home page', () => {
  cy.visit('/');
});

Then('I see "Welcome" in the toolbar', () => {
  cy.get('.toolbar').contains('Welcome');
});

And('I see "Angular app is running!" in the rocket section', () => {
  cy.get('.content').contains('Angular app is running!');
});
