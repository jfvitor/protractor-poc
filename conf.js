'use strict'

module.exports.config = {

    framework: 'jasmine',
    directConnect: true,
    specs: [
        'feature/step_definitions/*.js',
        //      'feature/step_definitions/e2e/*.js',
    ],

    onPrepare: () => {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(
            new AllureReporter());
        jasmine.getEnv().afterEach(function(done) {
            browser.takeScreenshot().then(function(png) {
                allure.createAttachment('Screenshot', function() {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });;

        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(
            new SpecReporter({
                spec: {
                    displayErrorMessages: true,
                    displayStacktrace: true,
                    displayDuration: true,
                    displayFailed: true
                },
                summary: {
                    displayPending: true,
                    displayErrorMessages: true,
                    displayFailed: true,
                    displaySuccessful: true,
                    displayDuration: true
                },
                colors: {
                    enabled: true
                }
            }));
        //  browser.driver.manage().window().setSize(1680, 1050);
        browser.driver.manage().window().maximize()
    }
};