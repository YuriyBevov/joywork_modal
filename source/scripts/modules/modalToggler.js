let togglers = document.querySelectorAll('.tab__controls-toggler');
let views = document.querySelectorAll('.modal__body');

const onClickChangeModalView = (evt) => {
    togglers.forEach(toggler => {
        toggler.classList.contains('is-active') ?
        toggler.classList.remove('is-active') : null;
    })

    let viewType = evt.target.getAttribute('data-view-type');
    let activeTogglers = document.querySelectorAll('.tab__controls-toggler[data-view-type="' + viewType + '"]')

    activeTogglers.forEach(toggler => {
        toggler.classList.add('is-active');
    })

    views.forEach(view => {
        view.classList.contains('is-active') ?
        view.classList.remove('is-active') : null;

        if( view.getAttribute('data-view') === viewType ) {
            view.classList.add('is-active');
        }
    })

}

if(togglers) {
    togglers.forEach(toggler => {
        toggler.addEventListener('click', onClickChangeModalView);
    })
}