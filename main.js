'use strict'

class Country {
    name;
    capital;
    flag;
    money;
    region;
    linkForGoogle;
    linkForWiki;

    constructor(name, capital, flag, money, region, linkForGoogle, linkForWiki) {
        this.name = name;
        this.capital = capital;
        this.flag = flag;
        this.money = money;
        this.region = region;
        this.linkForGoogle = linkForGoogle;
        this.linkForWiki = linkForWiki;
    }
}