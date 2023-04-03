import Page from './page';

class LoginPage extends Page {
    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('#login-button');
    }

    async login(username, password) {
        await this.waitUntilLoginDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await driver.pause(100);
        await this.btnSubmit.click();
    }

    async open() {
        return await super.open();
    }

    async waitUntilLoginDisplayed() {
        await this.inputUsername.waitForDisplayed();
    }
}

export default new LoginPage();
