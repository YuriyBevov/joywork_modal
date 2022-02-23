import { closeInnerModal } from './closeInnerModal.js';
let innerModalOpeners = document.querySelectorAll('.inner-modal-opener');

const onClickOpenInnerModal = (evt) => {
    let modalName = evt.currentTarget.getAttribute('data-modal-name');
    let modal = document.querySelector('.' + modalName);
        
    const openModal = () => {
        modal.classList.add('is-opened');

        const parentModal = document.querySelector('.modal.is-opened');
        const parentContainer = parentModal.querySelector('.modal__container');

        parentContainer.style.overflowY = 'hidden';
        console.log(modalName)
        modal.style.top = parentContainer.scrollTop + 'px';

        modal.style.paddingTop = parentContainer.scrollTop + 'px';
        
        closeInnerModal(modal, parentContainer);
    };

    if(modalName !== 'description-modal') {
        openModal();
    } else {
        if(window.innerWidth > 960) {
            let description = evt.target.parentNode.querySelector('.description-drop');
            description.classList.add('is-active');
            let closeBtn = description.querySelector('.drop-close');

            const onResizeCloseDrop = () => {
                console.log('resize')

                if( window.innerWidth < 961 ) {
                    description.classList.remove('is-active');
                    window.removeEventListener('resize', onResizeCloseDrop);
                    closeBtn.removeEventListener('click', onClickCloseDrop);
                }
            }

            const onClickCloseDrop = () => {
                description.classList.remove('is-active');
                window.removeEventListener('resize', onResizeCloseDrop);
                closeBtn.removeEventListener('click', onClickCloseDrop);
            }

            window.addEventListener('resize', onResizeCloseDrop);
            closeBtn.addEventListener('click', onClickCloseDrop);
        } else {
            openModal();
        }
    }
}

innerModalOpeners.forEach(btn => {
    btn.addEventListener('click', onClickOpenInnerModal)
})
