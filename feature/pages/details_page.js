'use strict';

var Detail = function() {

    this.purchaseBtn = element(by.css('[type="submit"]'));

    //change to bill pay and control plans
    this.changePlans = element(by.css('.link-p')); 

    //div plans
    this.detailsList = element(by.css('body > section.bannerServ > div > div > div.col.col-info.col-xs-12.col-sm-7 > div:nth-child(1) > div'));

    //bill pay plans
    this.detailsP = element(by.xpath('/html/body/section[1]/div/div/div[2]/div[1]/div/h2[1]'));
    this.detailsPActive = element(by.css('section.bannerServ > div > div > div.col.col-info.col-xs-12.col-sm-7 > div:nth-child(1) > div > h2.plan-box.active >'));
    this.detailsM = element(by.xpath('/html/body/section[1]/div/div/div[2]/div[1]/div/h2[2]'));
    this.detailsG = element(by.xpath('/html/body/section[1]/div/div/div[2]/div[1]/div/h2[3]'));
    this.detailsGG = element(by.xpath('/html/body/section[1]/div/div/div[2]/div[1]/div/h2[4]'));

    //control plans
    this.detailsControl1 = element(by.xpath('/html/body/section[1]/div/div/div[2]/div[1]/div/h2[1]'));
    this.detailsControl2 = element(by.xpath('/html/body/section[1]/div/div/div[2]/div[1]/div/h2[2]')); 
};

module.exports = Detail;