import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../../pageobjects/web/login.page";
import HomePage from "../../pageobjects/web/home.page";

Given(/^I am on the login page$/, async () => {
  await LoginPage.open();
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying "([^"]*)"$/, async (message) => {
  await expect(HomePage.flashAlert).toBeExisting();
  await expect(HomePage.flashAlert).toHaveTextContaining(message);
});

Then(/^I should not be able to login$/, async () => {
    await expect(HomePage.flashAlert).not.toBeExisting();
});
