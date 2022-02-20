import { refreshModalState } from '../modals/refreshModalState.js';

let tabs = document.querySelectorAll('.js-modal-tab');
let controls = document.querySelector('.tab__controls');

const onClickChangeTab = (evt) => {
    controls.classList.contains('is-active') ?
    controls.classList.remove('is-active') : null;

    !evt.target.classList.contains('is-active') ?
    refreshModalState() : null;

    tabs.forEach(tab => {
        tab.classList.contains('is-active') ?
        tab.classList.remove('is-active') : null;
    })

    evt.target.classList.add('is-active');

    let tabID = evt.target.getAttribute('data-id');

    if(tabID !== 'tab_1') {
        !controls.classList.contains('is-active') ?
        controls.classList.add('is-active') : null;
    }
}

tabs.forEach(tab => {
    tab.addEventListener('click', onClickChangeTab);
})