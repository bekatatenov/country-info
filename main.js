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

function createCountry(country) {

}


function createCountryElem(country) {
    let elem = document.createElement('div');
    elem.setAttribute('id', 'card-id');
    elem.innerHTML = `
        <div class="card" style="width: 400px; margin: 0 auto">
            <img src="${country.flag}" class="card-img-top" alt="${country.name}">
            <div class="card-body">
                <h5 class="card-title">${country.name}</h5>
                <p class="card-text">Capital: ${country.capital}</p>
                <p class="card-text">Region: ${country.region}</p>
                <p class="card-text">Money: ${country.money}</p>
                <a href="https://www.google.com/search?q="+${country.name} class="btn btn-primary" target="_blank">Google</a>
                <a href="https://ru.m.wikipedia.org/wiki/"+${country.name} target="_blank">Wiki</a>
            </div>
        </div>`;

    return elem;
}

async function getCountry(nameOfCounty) {
    return await fetch('https://restcountries.eu/rest/v2/name/' + nameOfCounty)
}

const form = document.getElementById('form-id');

form.addEventListener('submit', formHandler);

function formHandler(e) {
    e.preventDefault();
    const form = e.target;
    const formC = new FormData(form).get('country');
    // const country = form.get('country');

    // fetchAuthorised(BASE_URL+'posts')
}