let btn = document.querySelector('.filter__opener');
let submitBtn = document.querySelector('.filter__submit-btn');
let filterControls = document.querySelector('.filter__drop');

const onClickToggleFilter = () => {

    filterControls.classList.toggle('is-active');
    submitBtn.classList.toggle('is-showed');

    if(filterControls.classList.contains('is-active')) {
        btn.innerHTML = 'Скрыть';
    } else {
        btn.innerHTML = 'Уточнить';
    }
}

if(btn) {
    btn.addEventListener('click', onClickToggleFilter);
}