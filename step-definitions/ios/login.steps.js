import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../../pageobjects/ios/home.page';
import LoginPage from '../../pageobjects/ios/login.page';

Given(/^I am on the login page$/, async () => {
    await HomePage.openWebView()
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying "([^"]*)"$/, async (message) => {
    await expect(LoginPage.flashAlert).toBeExisting();
    await expect(LoginPage.flashAlert).toHaveTextContaining(message);
});
