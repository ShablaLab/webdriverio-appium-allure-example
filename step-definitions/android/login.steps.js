import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../../pageobjects/android/login.page';
import HomePage from '../../pageobjects/android/home.page';

Given(/^I am on the login page$/, async () => {
    await LoginPage.open()
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying "([^"]*)"$/, async (message) => {
    await expect(HomePage.flashAlert).toBeExisting();
    await expect(HomePage.flashAlert).toHaveTextContaining(message);
  });
