export default class Page {
    async open () {
        return await browser.url('https://www.saucedemo.com/')
    }
}
