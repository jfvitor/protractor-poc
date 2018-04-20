const HomePage = require('../pages/home_page');
const Detail = require('../pages/details_page');
const CheckOutPage = require('../pages/checkout_page');

describe('Checking the detail of a plan', () => {
    var checkoutpage = new CheckOutPage();
    var homepage = new HomePage();
    var detail = new Detail();

    beforeAll(async() => {
        browser.get('http://planosonline-hmg.nexteldigital.com.br');
    });

    it('should go to the detail page', async() => { // declara que o escopo trabalha de modo assincrono
        await homepage.detailBtn.click();
        handles = await browser.getAllWindowHandles(); // aguarda a execução deste bloco
        browser.switchTo().window(handles[1]); // pega o segundo item (indice 1) que é a nova aba
        await expect(browser.getCurrentUrl()).toBe("http://planosonline-hmg.nexteldigital.com.br/plano/pos/p");
    });

    it('should have the option to navigate among the plans', async() => {
        await expect(detail.detailsList.isPresent()).toEqual(true)
    });

    it('should go to Plan M', async() => {
        await detail.detailsM.click();
        await expect(browser.getTitle()).toEqual('Planos Online - POS M');
    });

    it('should go to Plan P', async() => {
        await detail.detailsP.click();
        await expect(browser.getTitle()).toEqual('Planos Online - POS P');
    });

    it('should go to Plan G', async() => {
        await detail.detailsG.click();
        await expect(browser.getTitle()).toEqual('Planos Online - POS G');
    });

    it('should go to Plan GG', async() => {
        await detail.detailsGG.click();
        await expect(browser.getTitle()).toEqual('Planos Online - POS GG');
    });

    it('should change to Control Plans detail page', async() => {
        await detail.changePlans.click();
        await expect(browser.getTitle()).toContain('Planos Online - CONTROLE');
    });

    it('should go to plan Control 5GB', async() => {
        await detail.detailsControl2.click();
        await expect(browser.getTitle()).toEqual('Planos Online - CONTROLE 5GB');

    });
    it('should go to plan Control 3GB', async() => {
        await detail.detailsControl1.click();
        await expect(browser.getTitle()).toEqual('Planos Online - CONTROLE 3GB');
    });

    it('should have a purchase button', async() => {
        await expect(detail.purchaseBtn.isPresent()).toEqual(true)
        await detail.purchaseBtn.click();
    });

    it('should go to step 0 of the checkout page', async() => {
        await expect(browser.getCurrentUrl()).toBe("http://planosonline-hmg.nexteldigital.com.br/plano/checkout");
        await expect(checkoutpage.step0.isPresent()).toEqual(true)
        await checkoutpage.step0.click();
    });

});