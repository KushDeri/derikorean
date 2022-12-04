let swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 15,
    slidesPerView: 6,
    dynamicBullets: true,
    breakpoints: {
        340: {
            slidesPerView: 1
        },
        565: {
            slidesPerView: 3
        },
        790: {
            slidesPerView: 4
        },
        1015: {
            slidesPerView: 5
        },
        1240: {
            slidesPerView: 6
        }
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    }
});

let swiper2 = new Swiper(".myTopik", {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 15,
    slidesPerView: 2,
    dynamicBullets: true,
    breakpoints: {
        340: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        }
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    }
});