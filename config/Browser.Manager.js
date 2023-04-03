const { cmd } = require("./wdio.base.conf");

class Browser {
    constructor(browser) {
        this.browser = browser;
        this.headless = cmd.headless == undefined ? '0' : '1';
    }

    create() {
        const browser = this.browser;
        if (browser === 'chrome') {
            return this.chrome();
        } else if (browser === 'firefox') {
            return this.firefox();
        } else if (browser === 'safari') {
            return this.safari();
        } else {
            return this.chrome();
        }
    }

    chrome() {
        let chromeArgs;
        chromeArgs = [
            '--disable-gpu',
            '--disable-extensions',
            '--disable-infobars',
            '--disable-web-security',
            '--disable-dev-shm-usage',
            '--incognito'
        ]

        if (this.headless == '1') {
            chromeArgs.push('--headless', 'no-sandbox');
        }

        const caps = {
            "browserName": 'chrome',
            "acceptInsecureCerts": true,
            'goog:chromeOptions': {
                args: chromeArgs,
                useAutomationExtension: false,
            },
            "maxInstances": process.env.CI_MAX_INSTANCES == undefined ? 1 : parseInt(process.env.CI_MAX_INSTANCES),
        };
        return caps
    }

    firefox() {
        const ffArgs = [];

        if (this.headless == '1') {
            ffArgs.push('--headless');
        }

        const caps = {
            "browserName": 'firefox',
            "acceptInsecureCerts": true,
            "moz:firefoxOptions": {
                args: ffArgs,
            },
            "maxInstances": process.env.CI_MAX_INSTANCES == undefined ? 1 : parseInt(process.env.CI_MAX_INSTANCES),
        };
        return caps
    }
}
module.exports = Browser;
