// spec.js
describe('Planos online website', function() {
  var detailBtn = element(by.css(".btnSaiba"));
  var boxFranchise = element(by.css(".box-franchise"));
  var purchaseBtn = element(by.css('[type="submit"]'));
  var checkoutPage = element(by.css(".contR"));

  beforeEach(function() {
    browser.get('http://planosonline-hmg.nexteldigital.com.br');

  });

  it('should have a Title', function() {
        expect(browser.getTitle()).toEqual('Planos Online');
});

it('get to see the details of a plan', function(){
  detailBtn.click();
});

it('should have a purchase button', function() {

  expect(boxFranchise.isPresent());
 browser.executeScript("arguments[0].click();", purchaseBtn);

});
/*
it('should go to the checkout page', function(){
  expect(browser.getCurrentUrl()).toBe("http://planosonline-hmg.nexteldigital.com.br/plano/checkout");
});

*/

});
