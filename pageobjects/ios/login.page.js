import Page from "./page";

class LoginPage extends Page {
  get inputUsername() {
    return $("~test-Username");
  }

  get inputPassword() {
    return $("~test-Password");
  }

  get btnSubmit() {
    return $("~test-LOGIN");
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await driver.pause(500);
    await this.btnSubmit.click();
  }

  async open() {
    await driver.pause(10000);
  }
}

export default new LoginPage();
