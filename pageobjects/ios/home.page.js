class HomePage {

    get btnHome() { return $('button[aria-label="Home"]') }

    async openWebView() {
        await driver.pause(1000)
        let contexts = [];
        for (let i = 0; i < 10; i++) {
            contexts = await driver.getContexts()
            console.log(contexts)
            await driver.pause(500)
            if (contexts.length === 2) {
                break
            }
        }
        await driver.switchContext(contexts[1])
        await driver.pause(10000)
        await this.btnHome.waitForDisplayed({ timeout: 30000 })
    }
}

export default new HomePage();
