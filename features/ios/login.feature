Feature: iOS - Login Feature

  Scenario Outline: As a user, I can log into the application area "<username>"
    Given I am on the login page
    When I login with "<username>" and "<password>"
    Then I should see HomePage

    Examples:
      | username      | password     | 
      | standard_user | secret_sauce |

  Scenario: An invalid user should not be able to log-in
    Given I am on the login page
    When I login with "test@yopmail.com" and " Random@1234"
    Then I should see a Error Message