# Testing an Angular app with Cypress and Cucumber

This project provides a baseline code base to help you kick start an Angular project with functional tests.
It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13 and [Node.js](https://nodejs.org/en/about/releases) version 14.

## Overview

[Cucumber](https://cucumber.io/) is a *Behavioral Driven Development* (BDD) testing framework.
Cucumber uses [Gherkin](https://cucumber.io/docs/gherkin/reference/), a set of special keywords to give structure and meaning to executable specifications.
In Cucumber, whatever you write must go into *Given-When-Then* steps. Lets consider the next example:

```gherkin
Feature: Is it Friday yet?

  Scenario: Sunday isn't Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"
```

The first line starts with the keyword `Feature` followed by a description.
The third line, `Scenario: Sunday isn't Friday` is a scenario, which is a concrete example illustrating how the software should behave.
The last three lines starting with `Given`, `When` and `Then` are the steps of our scenario. This is what Cucumber will execute.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.

The next scripts should be executed in a console inside the root directory:

- `start` - Runs the application.
- `check` - Runs all checks.
- `lint` - Runs several static code analysis.
- `lint:fix` - Applies lint rules to project code.
- `test` - Runs the unit tests.
- `test:watch` - Runs the unit tests in watch mode.
- `e2e` - Runs the functional tests.
- `e2e:watch` - Runs the functional tests in watch mode.
- `build` - Builds the dist files.

For more details, read the [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) documentation.

## Linting and formatting code

Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.
This project includes [ESLint](https://eslint.org/) and [Gherkin lint](https://www.npmjs.com/package/gherkin-lint).

Use `npm run lint` to analyze your code and `npm run gherkin` to check the syntax of `*.feature` files.
Many problems can be automatically fixed with `npm run lint:fix`.

Depending on your editor, you may want to add an editor extension to lint and format your code while you type or on-save.

## Running unit tests

Unit tests are responsible for testing of individual methods or classes by supplying input and making sure the output is as expected.

Use `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Use `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.

If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

You can see the HTML coverage report opening the [index.html](dist/coverage/index.html) file in your web browser.
Code coverage measures and reports the number of executed code lines covered by automated tests.

## Running functional tests

Functional tests validate the software system against the functional requirements/specifications.
Several *Feature* files (i.e. `*.feature` files) are stored in the `e2e/integration/` directory.
The test implementation can be found in the `*.steps.ts` files in the `e2e/integration/` directory,

Use `ng e2e` to execute the functional tests via [Cypress](https://www.cypress.io/) and [Cucumber](https://cucumber.io/).
Use `npm run e2e:watch` to keep executing your tests while watching for file changes in the background.
You can see the HTML report opening the [index.html](dist/e2e/report/html/index.html) file in your web browser.
A screenshot is attached to the report when a test fails.

As with unit tests, you can exclude or focus on some tests. You can exclude features ou scenarios with the `@ignore` tag or run specific features or scenarios with the `@focus` tag.

## Debugging

You can debug the client-side Angular code, adding breakpoints, inspect variables and see the call stack of the client-side Angular application.
These functionalities are provided natively or based on plugins.
[Angular DevTools](https://angular.io/guide/devtools/) is a Chrome extension that provides debugging and profiling capabilities for Angular applications.

You can use our IDE for debugging unit and end-to-end tests.
Also, you can debug unit tests with `debugger` keyword if you use `npm run test:debug`.
Cypress also exposes a shortcut for debugging commands, `.debug()`.
These functionalities are provided natively or based on plugins.

## Build

Use `npm run build` to build the project. The build artifacts will be stored in the `dist/app/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
