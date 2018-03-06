const page = require('esquadro/page');
const HomePage = require('../pages/home_page');
const Detail = require('../pages/details_page');

describe('Planos online website', function() {
  var homepage = new HomePage();
  var detail = new Detail();

  beforeAll(function() {
    browser.get('http://planosonline-hmg.nexteldigital.com.br');
  });

  it('should go to the details page', function() { // declara que o escopo trabalha de modo assincrono
    homepage.detailBtn.click();
  });

  it('should have a purchase button', async () => { // declara que o escopo trabalha de modo assincrono
    handles = await browser.getAllWindowHandles(); // aguarda a execução deste bloco
    browser.switchTo().window(handles[1]); // pega o segundo item (indice 1) que é a nova aba
    page.waitForElementToBeClickable(detail.purchaseBtn); // usa uma Expected Condition de botão renderizado
    detail.purchaseBtn.click();
  });

  it('should go to the checkout page', function() {
    expect(browser.getCurrentUrl()).toBe("http://planosonline-hmg.nexteldigital.com.br/plano/checkout");
  });

});
