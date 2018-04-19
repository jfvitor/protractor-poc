'use strict';

var CheckOutPage = function () {

    //Step 0
    this.nameForm = element(by.id('frmPersonalDataPass0'));
    this.nameField = element(by.id('iptFirstName2'));
    this.lastnameField = element(by.id('iptLastName2'));
    this.emailField = element(by.id('iptEmail'));
    this.cellField = element(by.id('CellOptional'));
    this.btnBack = element(by.css('btnV'));
    this.step0 = element(by.id('btnNextPass0'));

    //Step 1

    this.dateBirth = element(by.id('iptBirthDate'));
    this.genderList = element(by.id('selGender'));
    this.civilStatus = element(by.id('selCivilStatus'));
    this.cpfField = element(by.id('iptCpf'));
    this.rgField = element(by.id('iptRg'));
    this.cellField = element(by.id('iptCellPhone2'));
    this.motherNameField = element(by.id('iptMotherName'));
    this.submitBtn = element(by.xpath('//*[@id="frmPersonalDataPass1"]/div/div[8]/div[1]/button'));

    //Step 2
    this.nameForm2 = element(by.id('frmDeliveryPass2'));
    this.postalCodeField = element(by.id('iptAddressZipCode'));
    this.numberField = element(by.id('iptAddressNumber'));
    this.checkBox = element(by.id('chkPolicies'));
    this.submitBtnStep2 = element(by.xpath('//*[@id="frmDeliveryPass2"]/div/div[7]/div[1]/button'));

    //Step 3
    this.nameForm3 = element(by.id('frmDueDatePass3'));
    this.editStep1 = element(by.css('#frmDueDatePass3 > div > div:nth-child(1) > div:nth-child(1) > a'));
    this.editStep2 = element(by.css('#frmDueDatePass3 > div > div:nth-child(1) > div:nth-child(2) > a'));
    this.payDay = element(by.id('selPayDay'));
    this.finishBtn = element(by.xpath('//*[@id="frmDueDatePass3"]/div/div[4]/div[1]/button'));
    this.successMessage = element(by.xpath('/html/body/section[1]/article/div/div[1]/div[1]/div/div/h4'));
};

module.exports = CheckOutPage;