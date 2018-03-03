exports.config = {
  framework: 'jasmine',
  directConnect: true,
  specs: ['spec.js'],
  onPrepare: function () {
      browser.driver.manage().window().maximize()
     // browser.ignoreSynchronization = true;
  }
};
