document.addEventListener('DOMContentLoaded', function () {
    // mobile menu
    const body = document.querySelector('body');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', function () {
        body.classList.toggle('menu-active');
    });

    // swiper
    const swiper = new Swiper('.services-slider', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 26,
            },
        },
    });
});
