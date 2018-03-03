const page = require('esquadro/page');

describe('Planos online website', function() {
  var detailBtn = element(by.css(".btnSaiba"));
  var boxFranchise = element(by.css(".box-franchise"));
  var purchaseBtn = element(by.css('[type="submit"]'));
  var checkoutPage = element(by.css(".contR"));

  beforeAll(function() {
    browser.get('http://planosonline-hmg.nexteldigital.com.br');
  });

  it('should have a Title', function() {
    expect(browser.getTitle()).toEqual('Planos Online');
  });

  it('get to see the details of a plan', function(){
    detailBtn.click();
  });

  it('should have a purchase button', async() => { // declara que o escopo trabalha de modo assincrono
    handles = await browser.getAllWindowHandles(); // aguarda a execução deste bloco
    browser.switchTo().window(handles[1]);         // pega o segundo item (indice 1) que é a nova aba
    page.waitForElementToBeClickable(purchaseBtn); // usa uma Expected Condition de botão renderizado
    purchaseBtn.click();                           
    expect(boxFranchise.isPresent());
  });
 
  it('should go to the checkout page', function(){
    expect(browser.getCurrentUrl()).toBe("http://planosonline-hmg.nexteldigital.com.br/plano/checkout");
  });

});
