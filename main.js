'use strict'

class Country {
    name;
    capital;
    flag;
    money;
    region;

    constructor(name, capital, flag, currencies, region) {
        this.name = name;
        this.capital = capital;
        this.flag = flag;
        this.currencies = currencies;
        this.region = region;
    }
}

let foundCountries = [];

function createCountry(country) {
    let c = new Country(country.name, country.capital, country.flag, country.currencies[0].name, country.region);
    foundCountries.push(c);
    return c;
}

function createCountryElem(country) {
    let elem = document.createElement('div');
    elem.setAttribute('id', 'card-id');
    elem.setAttribute('style', 'padding-bottom: 50px');
    elem.innerHTML = `
        <div class="card" style="width: 400px; margin: 0 auto;">
            <img src="${country.flag}" class="card-img-top" alt="${country.name}">
            <div class="card-body">
                <h5 class="card-title">${country.name}</h5>
                <p class="card-text">Capital: ${country.capital}</p>
                <p class="card-text">Region: ${country.region}</p>
                <p class="card-text">Money: ${country.currencies[0].name}</p>
                <a href="https://www.google.com/search?q=${country.name}" class="btn btn-primary" target="_blank">Google</a>
                <a href="https://ru.m.wikipedia.org/wiki/${country.name}" class="btn btn-primary" target="_blank">Wiki</a>
            </div>
        </div>`;

    return elem;
}

function addElemToHtml(elem) {
    document.getElementsByClassName('main')[0].prepend(elem);
}

async function getCountry(nameOfCounty) {
    return await fetch('https://restcountries.eu/rest/v2/name/' + nameOfCounty)
}

const form = document.getElementById('form-id');

form.addEventListener('submit', formHandler);


function formHandler(e) {
    e.preventDefault();
    const form = e.target;
    const textFromForm = new FormData(form).get('country');
    if (textFromForm === '' || textFromForm.length < 2) {
        alert("1. Пустое поле отправить нельзя.\n" +
            "2. Минимальная длина поиска - 2 символа")
    } else {
        getCountry(textFromForm).then(result => {
            if (result.ok) {
                result.json().then(data => {
                    let c = data[0];
                    // var country = createCountry(result);
                    var htmlDivElement = createCountryElem(c);
                    addElemToHtml(htmlDivElement);
                });
            } else {
                alert('Sorry, we cant find ' + textFromForm + ', try again ');
            }
        });
    }
}