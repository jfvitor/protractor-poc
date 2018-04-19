const CheckOutPage = require('../pages/checkout_page');
const HomePage = require('../pages/home_page');

describe('Purchasing a new bill pay', () => {
    var checkoutpage = new CheckOutPage();
    var homepage = new HomePage();

    beforeAll(async () => {
        browser.get('http://planosonline-hmg.nexteldigital.com.br');
    });

    it('should go to checkout page', async () => {
        await expect(browser.getTitle()).toEqual('Planos Online');
        await homepage.purchaseBtn.click();
        await homepage.checkoutBtn.click();
        await expect(browser.getTitle()).toEqual('Planos Online - Checkout');
    });

    it('should fill out the step 0 form', async () => {
        await expect(checkoutpage.nameForm.isPresent()).toEqual(true);
        await expect(checkoutpage.nameField.isPresent()).toEqual(true);
        await checkoutpage.nameField.clear().sendKeys('Marta');
        await checkoutpage.lastnameField.clear().sendKeys('Rita');
        await checkoutpage.emailField.clear().sendKeys('jacqueline.vitor@nextel.com.br');
        await checkoutpage.step0.click();
        await expect(checkoutpage.cpfField.isPresent()).toEqual(true);
    });

    it('should fill out step 1 form', async () => {
        await expect(checkoutpage.nameForm.isPresent()).toEqual(true);
        await expect(checkoutpage.cpfField.isPresent()).toEqual(true);
        await checkoutpage.dateBirth.clear().sendKeys('10/10/1980');
        await checkoutpage.genderList.sendKeys('F');
        await checkoutpage.civilStatus.sendKeys('Solteiro(a)');
        await checkoutpage.cpfField.clear().sendKeys('25918201807');
        await checkoutpage.rgField.clear().sendKeys('21545124124');
        await checkoutpage.cellField.sendKeys('11947874226');
        await checkoutpage.motherNameField.clear().sendKeys('Ana Maria');
        await checkoutpage.submitBtn.click();
    });

    it('should fill out the step 2 form', async () => {
        await expect(checkoutpage.nameForm2.isPresent()).toEqual(true);
        await checkoutpage.postalCodeField.clear().sendKeys('05550000');
        await browser.sleep(1000);
        await checkoutpage.numberField.clear().sendKeys('12457812');
        await checkoutpage.checkBox.click();
        await checkoutpage.submitBtnStep2.click();
    });

    it('should fill out the step 3 form and finish solicitation', async () => {
        await expect(checkoutpage.nameForm3.isPresent()).toEqual(true);
        await checkoutpage.payDay.sendKeys('17')
        await browser.actions().mouseMove(checkoutpage.finishBtn).perform();
        await checkoutpage.finishBtn.click();
        await browser.sleep(1000);
        await expect(checkoutpage.successMessage.isPresent()).toEqual(true, 'Sua solicitação foi enviada com sucesso');
    });

});