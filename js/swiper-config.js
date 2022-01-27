let swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 15,
    slidesPerView: 7,
    dynamicBullets: true,
    breakpoints: {
        340: {
            slidesPerView: 1
        },
        530: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        800: {
            slidesPerView: 5
        },
        992: {
            slidesPerView: 6
        },
        1240: {
            slidesPerView: 7
        }
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    }
});