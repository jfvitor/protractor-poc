'use strict'

//const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

module.exports.config = {

    framework: 'jasmine',
    directConnect: true,
    specs: [
        'feature/step_definitions/*.js',
  //      'feature/step_definitions/e2e/*.js',
    ],
    onPrepare: function () {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            }));

        //  browser.driver.manage().window().setSize(1680, 1050);
        browser.driver.manage().window().maximize()
        // browser.ignoreSynchronization = true;
    }
};