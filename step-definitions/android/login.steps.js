import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../../pageobjects/android/login.page";
import HomePage from "../../pageobjects/android/home.page";

Given(/^I am on the login page$/, async () => {
  await LoginPage.open();
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see HomePage$/, async () => {
  await expect(HomePage.flashAlert).toBeExisting();
});

Then(/^I should see a Error Message$/, async () => {
  await expect(HomePage.flashAlert).not.toBeExisting();
});
