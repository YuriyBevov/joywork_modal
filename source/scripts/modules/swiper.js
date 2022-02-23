import Swiper, { Navigation, Pagination } from 'swiper';

let objectSlider = document.querySelectorAll('.js-object-swiper');

objectSlider ?
objectSlider.forEach(slider => {
    new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 10,
    
        modules: [Navigation],
        
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    })
}) : null;
 