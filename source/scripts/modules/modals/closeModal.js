import { refreshModalState } from './refreshModalState.js';

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');

const ESC_BTN_CODE = 27;

if(modal) {
    const onClickByOverlayCloseModal = (evt) => {
        if(evt.target === modal) {
            modal.classList.remove('is-opened');
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
            } else {
                modal.classList.remove('is-opened');
                refreshModalState(true);
            }
        }
    }

    window.addEventListener('keydown', onEscBtnCloseModal);
    modal.addEventListener('click', onClickByOverlayCloseModal);
    closeBtn.addEventListener('click', onClickCloseModal);
}