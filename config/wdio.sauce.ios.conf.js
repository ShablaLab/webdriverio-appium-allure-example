const baseConfig = require('./wdio.base.conf').wdioBase;
const hooks = require('./hooks').hooks
const buildName = `Native app: ${new Date().getTime()}`;

const iosConfig = Object.assign(
    baseConfig,
    hooks,
    {
        user: 'sample_saucelabs',
        key: 'c97f3cf2-864e-41ef-9c72-56a5e38d3750',
        region: 'us',
        maxInstances: 1,
        capabilities: [{
            'platformName': 'iOS',
            'appium:platformVersion': '15.2',
            'appium:app': 'storage:filename=iOS.SauceLabs.Mobile.Sample.app.2.7.1.zip', // The filename of the mobile app
            'appium:deviceName': 'iPhone 11 Pro Simulator', //'iPhone .*',
            'appium:orientation': 'PORTRAIT',
            'appium:appWaitDuration': 120000,
            'appium:newCommandTimeout': 240,
            'sauce:options': {
                build: buildName,
                name: "Sample Test",
            }
        }],
        services: ['sauce'],
        logLevel: 'info',
    }
);

// iosConfig.reporters[1][1].outputDir = 'reports/ios/allure-results'
iosConfig.reporters[1][1].outputDir = `allure-results`
iosConfig.specs = ['./features/ios/**/*.feature']
iosConfig.cucumberOpts.require = ['./step-definitions/ios/*.js']

exports.config = iosConfig;
