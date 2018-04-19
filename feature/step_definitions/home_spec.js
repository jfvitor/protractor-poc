//const page = require('esquadro/page');
const HomePage = require('../pages/home_page');

describe('Planos online website', () => {
    var homepage = new HomePage();

    beforeAll(async() => {
        browser.get('http://planosonline-hmg.nexteldigital.com.br');
    });

    it('should have a Title', async() => {
        await expect(browser.getTitle()).toEqual('Planos Online');
    });

    it('should show Controle options', async() => {
        await expect(homepage.controlBtn.isPresent()).toEqual(true);
        await homepage.controlBtn.click();
        await expect(homepage.controlContent.isPresent()).toEqual(true);

    });

    it('should show Pós-pago options', async() => {
        await expect(homepage.postPaidBtn.isPresent()).toEqual(true);
        await homepage.postPaidBtn.click();
        await expect(homepage.postContent.isPresent()).toEqual(true);
    });

    it('gets to see the details of a plan', async() => {
        await expect(homepage.detailBtn.isPresent()).toEqual(true);
        await homepage.detailBtn.click();
        handles = await browser.getAllWindowHandles(); // aguarda a execução deste bloco
        browser.switchTo().window(handles[2]); // pega o segundo item (indice 1) que é a nova aba
        await expect(browser.getTitle()).toEqual('Planos Online - POS P');
    });

});