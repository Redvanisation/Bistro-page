// eslint-disable-next-line no-unused-vars
import home from './initial';
import menu from './menu';
import contact from './contact';
import nav from './nav';
import { content } from './shared';


nav();
home();
// menu();
// contact();

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');
const logo = document.querySelector('#logo');

const changeMenu = (e) => {
    if (e.srcElement === homeTab || e.srcElement === logo) {
        content.innerHTML = '';
        home();
    } else if (e.srcElement === menuTab) {
        menu();
    } else {
        content.innerHTML = '';
        contact();
    }
};

homeTab.addEventListener('click', changeMenu);
menuTab.addEventListener('click', changeMenu);
contactTab.addEventListener('click', changeMenu);
logo.addEventListener('click', changeMenu);

// console.log(theNav);
