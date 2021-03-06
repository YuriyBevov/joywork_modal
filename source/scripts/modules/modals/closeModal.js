import { refreshModalState } from './refreshModalState.js';

const modal = document.querySelector('.modal');
const modalContainer = modal.querySelector('.modal__container');
const closeBtns = document.querySelectorAll('.modal__close');

const ESC_BTN_CODE = 27;

if(modal) {
    const onClickByOverlayCloseModal = (evt) => {
        if(evt.target === modal) {
            modal.classList.remove('is-opened');

            modalContainer.style.overflowY === 'hidden' ?
            modalContainer.style.overflowY = 'auto' : null;
            refreshModalState(true);
        }
    }

    const onClickCloseModal = () => {
        modal.classList.remove('is-opened');
        refreshModalState(true);
    }

    const onEscBtnCloseModal = (evt) => {
        if( evt.keyCode === ESC_BTN_CODE ) {
            let innerModal = document.querySelector('.inner-modal.is-opened');

            if(innerModal) {
                innerModal.classList.remove('is-opened');
                modalContainer.style.overflowY === 'hidden' ?
                modalContainer.style.overflowY = 'auto' : null;
            } else {
                modal.classList.remove('is-opened');

                refreshModalState(true);
            }
        }
    }

    window.addEventListener('keydown', onEscBtnCloseModal);
    modal.addEventListener('click', onClickByOverlayCloseModal);
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', onClickCloseModal);
    })
}