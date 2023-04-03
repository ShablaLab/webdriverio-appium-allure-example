import Page from './page';

class LoginPage extends Page {
    get btnMyAccount() {
        return $('#myAccount');
    }
    get inputUsername() {
        return $('#email');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('.MyAccountOverlay-SignInButton>button');
    }

    get flashAlert() {
        return $('.Notification-Text');
    }

    async login(username, password) {
        await this.btnMyAccount.click();
        await driver.pause(15000);
        await this.waitUntilAuthGoogleNotDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await driver.pause(100);
        await this.btnSubmit.click();
    }

    async open() {
        return await super.open();
    }

    async waitUntilAuthGoogleNotDisplayed() {
        await this.flashAlert.waitForDisplayed({ reverse: true });
    }
}

export default new LoginPage();
