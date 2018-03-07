'use strict';

var Detail = function() {

    this.boxFranchise = element(by.css(".box-franchise"));
    this.purchaseBtn = element(by.css('[type="submit"]'));
    this.checkoutPage = element(by.css(".contR"));
};
    module.exports = Detail;
