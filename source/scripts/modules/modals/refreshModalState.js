let tabs = document.querySelectorAll('.js-modal-tab');
let controls = document.querySelector('.tab__controls');

let submitBtn = document.querySelector('.filter__submit-btn');
let filterControls = document.querySelector('.filter__drop');

let views = document.querySelectorAll('.modal__body');
let togglers = document.querySelectorAll('.tab__controls-toggler');

let innerModals = document.querySelectorAll('.inner-modal');

function refreshModalState(refreshTabs = false, refreshViews = true, refreshFilterDrop = true) {
    if(innerModals) {
        innerModals.forEach(modal => {
            modal.classList.contains('is-opened') ?
            modal.classList.remove('is-opened') : null;
        })
    }

    if(refreshTabs === true) {
        tabs.forEach(tab => {
            tab.classList.contains('is-active') ?
            tab.classList.remove('is-active') : null;
        })

        tabs[0].classList.add('is-active');

        controls.classList.contains('is-active') ?
        controls.classList.remove('is-active') : null;
    }

    if(refreshFilterDrop) {
        if(filterControls.classList.contains('is-active')) {
            filterControls.classList.remove('is-active');
            submitBtn.classList.remove('is-showed');
        }
    }

    if(refreshViews) {
        views.forEach(view => {
            view.classList.contains('is-active') ?
            view.classList.remove('is-active') : null;

            if(view.getAttribute('data-view') === 'list') {
                view.classList.add('is-active');
            }
        })

        togglers.forEach(toggler => {
            toggler.classList.contains('is-active') ?
            toggler.classList.remove('is-active') : null;

            if(toggler.getAttribute('data-view-type') === 'list') {
                toggler.classList.add('is-active');
            }
        })
    }
}

export { refreshModalState };