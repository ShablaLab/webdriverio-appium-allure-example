module.exports.cmd = global.cmd = require('minimist')(process.argv.slice(2));
const BrowserManager = require('./Browser.Manager');

function browserCaps() {
    const browserCaps = [];
    if (cmd.browser === undefined) {
        browserCaps.push(new BrowserManager('chrome').create());
        return browserCaps;
    } else {
        return [new BrowserManager(cmd.browser).create()];
    }
}

global.sauce = cmd.sauce == undefined ? false : true;

exports.wdioBase = {
    maxInstances: 1,
    capabilities: browserCaps(),
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    framework: 'cucumber',
    reporters: [
        'spec',
        ['allure', {            
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: true
        }]
    ],
    cucumberOpts: {
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: 'not @Pending',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
}
