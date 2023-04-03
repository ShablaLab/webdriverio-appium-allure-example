class LoginPage {
    get btnMyAccount() {
        return $$('.NavigationTabs-Button')[3]
    }
    get inputUsername() {
        return $('#email')
    }

    get inputPassword() {
        return $('#password')
    }

    get btnSubmit() {
        return $('.MyAccountOverlay-SignInButton button')
    }

    get btnSignOut() {
        return $$('.MyAccountTabListItem_type_SignOut button')
    }

    get flashAlert() {
        return $('.Notification-Text');
    }

    async login(username, password) {
        await this.btnMyAccount.click()
        await this.loginOutIfAlreadyLogin()
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await driver.pause(500)
        await this.btnSubmit.click()
    }

    async open() {
        await driver.pause(20000)
        await driver.getContexts()
        await driver.switchContext('WEBVIEW_chrome')
        await driver.deleteCookies()
    }

    async loginOutIfAlreadyLogin() {
        const count = await this.btnSignOut.length
        if (count > 0) {
            await this.btnSignOut[0].click()
            await driver.pause(20000)
            await this.btnMyAccount.click()
        }
    }
}

export default new LoginPage()
