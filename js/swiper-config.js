

(function(){
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
        nextEl: ".swiper-next_1",
        prevEl: ".swiper-prev_1",
    }
});

let swiper2 = new Swiper(".myTopik1", {
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
        nextEl: ".swiper-next_2",
        prevEl: ".swiper-prev_2",
    }
});

let swiper3 = new Swiper(".myTopik2", {
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
        nextEl: ".swiper-next_3",
        prevEl: ".swiper-prev_3",
    }
});

})()

