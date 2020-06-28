import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

let addGlass = document.querySelector('.main-section__button--js-add');
let deleteGlass = document.querySelector('.main-section__button--js-delete');
let counter = document.querySelector('.main-section__counter--js');

const key = new Date().toISOString().slice(0, 10);
let value;

if(!localStorage.getItem('key')) {
    localStorage.setItem('key', 0);
}

addGlass.addEventListener('click', () => {
    value = parseInt(localStorage.getItem('key'));
    localStorage.setItem('key', ++value);
    counter.innerHTML = localStorage.getItem('key');
});

deleteGlass.addEventListener('click', () => {
    if(localStorage.getItem('key') > 0){
        value = parseInt(localStorage.getItem('key'));
        localStorage.setItem('key', --value);
        counter.innerHTML = localStorage.getItem('key');
    }
});

counter.innerHTML = localStorage.getItem('key');

//localStorage.removeItem('key');