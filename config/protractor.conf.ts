const path = require('path');

exports.config = {
  specs: '../test/specs/**/*.spec.ts',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: { args: [ '--disable-popup-blocking', '--disable-translate', '--headless' ] }
  },
  skipSourceMapSupport: true,
  // directConnect: true,
  maxSessions: 15,
  allScriptsTimeout: 600000,
  getPageTimeout: 600000,

  debug: true,
  beforeLaunch: () => {
    require('ts-node').register();
    require('tsconfig-paths').register();
  },

  baseUrl: 'http://tele2.nl',
  onPrepare: () => {
    var AllureReporter = require('jasmine-allure-reporter');

    const { SpecReporter } = require('jasmine-spec-reporter');
    browser.waitForAngularEnabled(false);

    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      })
    );
  },

  onComplete: () => {},

  // highlightDelay: 100,

  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 240000,
    print: function() {}
  }

  // SELENIUM_PROMISE_MANAGER: false
};
