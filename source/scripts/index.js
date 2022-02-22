'use strict'

import swiper from "./modules/swiper.js";

import openModal from './modules/modals/openModal.js';
import closeModal from './modules/modals/closeModal.js';
import openInnerModal from './modules/modals/openInnerModal.js';
import closeInnerModal from './modules/modals/closeInnerModal.js';
import changeTab from './modules/tabs/changeTab.js';
import filter from './modules/filter/openFilter.js';
import modalToggler from './modules/modalToggler.js';
import range from './modules/range.js';

let footer = document.querySelector('.modal__footer');
let upBtn = document.querySelector('.up-btn');
let modal = document.querySelector('.modal__container');

upBtn.addEventListener('click', function() {
    console.log('scroll')
    modal.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

let header = document.querySelector('.modal__header');

let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if(entry.isIntersecting) {
            footer.classList.contains('is-active') ?
            footer.classList.remove('is-active') : null
        } else {
            footer.classList.add('is-active');
        }
    });
});

observer.observe(header);
