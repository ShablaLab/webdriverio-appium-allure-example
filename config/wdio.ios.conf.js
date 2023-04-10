const baseConfig = require('./wdio.base.conf').wdioBase;
const hooks = require('./hooks').hooks

const iosConfig = Object.assign(
    baseConfig,
    hooks,
    {
        port: 4723,
        maxInstances: 1,
        capabilities: [
            {
                platformName: 'iOS',
                maxInstances: 1,
                'appium:deviceName': 'iPhone 13 Pro',
                // 'appium:platformVersion': '15.5',
                'appium:orientation': 'PORTRAIT',
                'appium:automationName': 'XCUITest',
                'appium:app': './apps/iOS.SauceLabs.Mobile.Sample.app.2.7.1.zip',
                'appium:appWaitDuration': 120000,
                'appium:newCommandTimeout': 240,
            },
        ],
        services: [
            [
                'appium',
                {
                    command: 'appium',
                    args: {
                        relaxedSecurity: true,
                        allowCors: true,
                        address: 'localhost',
                        log: './reports/appium.log',
                    },
                },
            ]
        ],
        runner: 'local',
        logLevel: 'info',
    }
);

iosConfig.reporters[1][1].outputDir = 'reports/ios/allure-results'
iosConfig.specs = ['./features/ios/**/*.feature']
iosConfig.cucumberOpts.require = ['./step-definitions/ios/*.js']

exports.config = iosConfig;
