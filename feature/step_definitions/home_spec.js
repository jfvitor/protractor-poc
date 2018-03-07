const page = require('esquadro/page');
const HomePage = require('../pages/home_page');

describe('Planos online website', function() {
  var homepage = new HomePage();

  beforeAll(function() {
    browser.get('http://planosonline-hmg.nexteldigital.com.br');
    //browser.ignoreSynchronization = true;
  });

  it('should have a Title', function() {
    expect(browser.getTitle()).toEqual('Planos Online');
  });

  it('should show Pós-pago and Controle options', function() {
    expect(homepage.postPlans.isDisplayed()).toBe(true);
    page.waitForElementToBeClickable(homepage.controlBtn);
    homepage.controlBtn.click();
    page.waitForElementToBeClickable(homepage.postPaidBtn);
    homepage.postPaidBtn.click();
  });

  it('get to see the details of a plan', function() {
    homepage.detailBtn.click();

  });


});
