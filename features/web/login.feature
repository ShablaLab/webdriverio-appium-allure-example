Feature: Login Feature

  Scenario Outline: As a user, I can log into the application area "<username>"
    Given I am on the login page
    When I login with "<username>" and "<password>"
    Then I should see a flash message saying "<message>"

    Examples:
      | username      | password     | message   |
      | standard_user | secret_sauce | Swag Labs |
# | test@yopmail.com        | Random@1234 | You are successfully logged in! |


Scenario: An invalid user should not be able to log-in
  Given I am on the login page
  When I login with "test@yopmail.com" and " Random@1234"
  Then I should not be able to login
  # Then I should see a flash message saying "Sorry we didn't recognize your details. Please check your email and password"