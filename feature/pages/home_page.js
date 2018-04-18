'use strict';

var HomePage = function() {

    //Pos
    this.detailBtn = element(by.css("#planosNextel > ul.contPos > li:nth-child(1) > ul > li:nth-child(4) > a.btnSaiba"));
    this.postPaidBtn = element(by.buttonText("Pós-pago"));
    this.postPlans = element(by.xpath('//*[@id="planosNextel"]/header/button[1]'));
    this.postContent = element(by.css('ul.contPos'));

    //Controle
    this.controlBtn = element(by.buttonText("Controle"));
    this.controlPlans = element(by.css('//*[@id="frmHome"]/section[2]/ul[2]'));
    this.controlContent = element(by.css('ul.contControle'));
};

module.exports = HomePage;