Feature: Home Page

  Scenario: Opening the home page
    Given I open the home page
    Then I see "Welcome" in the toolbar
    And I see "Angular app is running!" in the rocket section
