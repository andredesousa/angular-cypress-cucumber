# Testing an Angular app with Cypress and Cucumber

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13 and [Node.js](https://nodejs.org/en/about/releases) version 14.
It provides a baseline code base to help you kick start an Angular project with functional tests.

## Project Structure

When working in a large team with many developers that are responsible for the same codebase, having a common understanding of how the application should be structured is vital.
This project is based on best practices from the community, [Angular coding style guide](https://angular.io/guide/styleguide), other github Angular projects, and developer experience.

All of the app's code goes in a folder named `src`. The functional tests are in the `e2e` folder.
In Angular, everything is organized in modules, and every application have at least one of them, the `app` root module.
The `app` module is the entry point of the application, and is the module that Angular uses to bootstrap the application.
The global styles for the project are placed in a `scss` folder under `assets`.
The `styles.scss` file imports all the partials to apply their styling.

## Development server

Use `npm start` for a dev server. Navigate to <http://localhost:4200/>.
The app will automatically reload if you change any of the source files.

## Linting and formatting code

Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.
This project includes [ESLint](https://eslint.org/) and [Gherkin lint](https://www.npmjs.com/package/gherkin-lint).
Use `npm run lint` to analyze your code and `npm run gherkin` to check the `*.feature` files.
Many problems can be automatically fixed with `npm run lint:fix`.

Depending on your editor, you may want to add an editor extension to lint and format your code while you type or on-save.

## Running unit tests

Unit tests are responsible for testing of individual methods or classes by supplying input and making sure the output is as expected.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.

If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

You can see the HTML coverage report opening the [index.html](dist/coverage/index.html) file in your web browser.

## Running functional tests

Functional tests validate the software system against the functional requirements/specifications.

Run `ng e2e` to execute the functional tests via [Cypress](https://www.cypress.io/) and [Cucumber](https://cucumber.io/).
Run `npm run e2e:watch` to keep executing your tests while watching for file changes in the background.
You can see the HTML report opening the [index.html](dist/e2e/report/html/index.html) file in your web browser.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
