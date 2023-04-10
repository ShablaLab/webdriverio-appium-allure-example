const baseConfig = require('./wdio.base.conf').wdioBase;
const hooks = require('./hooks').hooks
const buildName = `Native app: ${new Date().getTime()}`;

const androidConfig = Object.assign(
    baseConfig,
    hooks,
    {
        user: 'sample_saucelabs',
        key: 'c97f3cf2-864e-41ef-9c72-56a5e38d3750',
        region: 'us',
        maxInstances: 1,
        capabilities: [{
            'platformName': 'Android',
            'appium:platformVersion': '12',
            'appium:deviceName': 'Google Pixel 4a (5G) GoogleAPI Emulator',
            'appium:app': './apps/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
            'appium:noReset': false,
            'appium:appWaitDuration': 180000,
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

// androidConfig.reporters[1][1].outputDir = 'reports/android/allure-results'
androidConfig.reporters[1][1].outputDir = `allure-results`
androidConfig.specs = ['./features/android/**/*.feature']
androidConfig.cucumberOpts.require = ['./step-definitions/android/*.js']

exports.config = androidConfig;
