let btns = document.querySelectorAll('.modal-opener');
let modals = document.querySelectorAll('.modal');

if(btns) {
    const onClickOpenModal = (evt) => {
        let modalName = evt.target.getAttribute('data-modal');
        let modal = document.querySelector('.' + modalName);

        modals.forEach(modal => {
            modal.classList.contains('is-opened') ?
            modal.classList.remove('is-opened') : null;
        });

        !modal.classList.contains('is-opened') ?
        modal.classList.add('is-opened') : null;
        let modalContainer = modal.querySelector('.modal__container');

        modalContainer.scrollTo({
            top: 0
        });
    };

    btns.forEach(btn => {
        btn.addEventListener('click', onClickOpenModal);
    });
}
