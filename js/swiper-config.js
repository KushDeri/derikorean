(function(){

})()

let swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 5,
    slidesPerView: 6,
    dynamicBullets: true,
    breakpoints: {
        270: {
            slidesPerView: 1
        },
        340: {
            slidesPerView: 1
        },
        560: {
            slidesPerView: 2
        },
        720: {
            slidesPerView: 3
        },
        910: {
            slidesPerView: 4
        },
        1060: {
            slidesPerView: 5
        },
        1290: {
            slidesPerView: 6
        }
    },
    navigation: {
        nextEl: ".swiper-next_1",
        prevEl: ".swiper-prev_1",
    }
});

let swiper2 = new Swiper(".myTopik", {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1,
    dynamicBullets: true,
    breakpoints: {
        340: {
            slidesPerView: 1
        },
        1240: {
            slidesPerView: 1
        }
    },
    navigation: {
        nextEl: ".swiper-next_2",
        prevEl: ".swiper-prev_2",
    }
});
