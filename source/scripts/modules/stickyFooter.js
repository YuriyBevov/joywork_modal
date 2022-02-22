let header = document.querySelector('.modal__header');
let footer = document.querySelector('.modal__footer');
let upBtn = document.querySelector('.up-btn');
let modal = document.querySelector('.modal__container');

if(upBtn) {
    upBtn.addEventListener('click', function() {
        modal.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if(entry.isIntersecting) {
                footer.classList.contains('is-active') ?
                footer.classList.remove('is-active') : null
            } else {
                footer.classList.add('is-active');
            }
        });
    });

    observer.observe(header);
}