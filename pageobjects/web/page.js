export default class Page {
    async open () {
        await browser.setWindowSize(2560, 1440)
        return await browser.url('https://uat.masafi.com/')
    }
}
