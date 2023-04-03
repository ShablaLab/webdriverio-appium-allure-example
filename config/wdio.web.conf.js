const { cmd, wdioBase } = require('./wdio.base.conf');
const hooks = require('./hooks').hooks
const browser = cmd.browser == undefined ? 'chrome' : cmd.browser;

const localConfig = Object.assign(
    wdioBase,
    hooks,
    {
        port: 4723,
        maxInstances: 1,
        services: ['devtools', 'selenium-standalone'],
        runner: 'local',
        logLevel: 'info',
    }
);

// localConfig.reporters[1][1].outputDir = `reports/web/${browser}/allure-results`
localConfig.reporters[1][1].outputDir = `allure-results`
localConfig.cucumberOpts.require = ['./step-definitions/web/*.js']
localConfig.specs = ['./features/web/**/*.feature']

exports.config = localConfig;
