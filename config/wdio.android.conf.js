const baseConfig = require('./wdio.base.conf').wdioBase;
const hooks = require('./hooks').hooks

const androidConfig = Object.assign(
    baseConfig,
    hooks,
    {
        port: 4723,
        maxInstances: 1,
        capabilities: [
            {
                platformName: 'Android',
                maxInstances: 1,
                'appium:deviceName': 'Android',
                'appium:platformVersion': '11.0',
                'appium:orientation': 'PORTRAIT',
                'appium:automationName': 'UIAutomator2',
                'appium:app': './apps/Masafi-debug.apk',
                'appium:noReset': false,
                'appium:fullReset': true,
                'appium:appWaitDuration': 120000,
                'appium:newCommandTimeout': 240,
                'appium:appPackage': 'com.bits.masafi.consumer',
                'appium:appActivity': 'com.bits.masafi.consumer.LauncherActivity'
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

androidConfig.reporters[1][1].outputDir = 'reports/android/allure-results'
androidConfig.specs = ['./features/android/**/*.feature']
androidConfig.cucumberOpts.require = ['./step-definitions/android/*.js']

exports.config = androidConfig;
