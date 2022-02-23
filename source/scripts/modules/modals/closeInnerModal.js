function closeInnerModal(modal, parentContainer) {
    const closeBtn = modal.querySelector('.inner-modal__close');

    const onClickByOverlayCloseModal = (evt) => {
        if(evt.target === modal) {
            modal.classList.remove('is-opened');

            parentContainer.style.overflow = 'auto';
        }
    }

    const onClickCloseModal = () => {
        modal.classList.remove('is-opened');
        parentContainer.style.overflow = 'auto';
    }

    modal.addEventListener('click', onClickByOverlayCloseModal);
    closeBtn.addEventListener('click', onClickCloseModal);
}

export { closeInnerModal };