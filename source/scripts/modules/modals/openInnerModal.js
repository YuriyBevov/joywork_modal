import { closeInnerModal } from './closeInnerModal.js';
let innerModalOpeners = document.querySelectorAll('.inner-modal-opener');

const onClickOpenInnerModal = (evt) => {
    let modalName = evt.currentTarget.getAttribute('data-modal-name');
    let modal = document.querySelector('.' + modalName);

    modal.classList.add('is-opened');

    const parentModal = document.querySelector('.modal.is-opened');
    const parentContainer = parentModal.querySelector('.modal__container');

    parentContainer.style.overflowY = 'hidden';
    console.log(modalName)
    modal.style.top = parentContainer.scrollTop + 'px';
    if(modalName !== 'objects-modal') {
        
    } else {
        console.log('objects')

        modal.style.paddingTop = parentContainer.scrollTop + 'px';
    }
    
    closeInnerModal(modal, parentContainer);
}

innerModalOpeners.forEach(btn => {
    btn.addEventListener('click', onClickOpenInnerModal)
})
