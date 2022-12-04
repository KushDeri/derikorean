let menuOpener = document.querySelector(".icon");
const menu = document.getElementById("menu");
const blok = document.querySelector('.blok');
let bgColor1 = {
    r: 201,
    g: 144,
    b: 139,
    a: 0
}; //Из какого цвета
let bgColor2 = {
    r: 127,
    g: 74,
    b: 69,
    a: 1
}; //В какой цвет



window.onload = function () {
    window.dispatchEvent(new Event("scroll"));
    if (document.body.clientWidth > 600) {
        menu.classList.remove("responsive");
    }
};
window.addEventListener('resize', () => {
    if (document.body.clientWidth > 600) {
        menu.classList.remove("responsive");
    }
});
window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; //текущая позиция скролла
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    ) - innerHeight; //Получаем высоту видимой части окна

    let percent = scrollTop / scrollHeight;
    let color = {
        r: 201,
        g: 144,
        b: 139,
        a: 0
    };
    let color_shadow = {
        r: 127,
        g: 74,
        b: 69
    };
    let tmp = Math.abs(bgColor1.r - bgColor2.r) * percent;
    color.r = Math.ceil(bgColor1.r > bgColor2.r ? bgColor1.r - tmp : bgColor1.r + tmp);

    tmp = Math.abs(bgColor1.g - bgColor2.g) * percent;
    color.g = Math.ceil(bgColor1.g > bgColor2.g ? bgColor1.g - tmp : bgColor1.g + tmp);

    tmp = Math.abs(bgColor1.b - bgColor2.b) * percent;
    color.b = Math.ceil(bgColor1.b > bgColor2.b ? bgColor1.b - tmp : bgColor1.b + tmp);

    tmp = Math.abs(bgColor1.a - bgColor2.a) * percent;
    color.a = Math.ceil(bgColor1.a > bgColor2.a ? bgColor1.a - tmp : bgColor1.a + tmp);

    if (menu.classList.contains('responsive')) {
        document.getElementById("menu").style.background = "rgba(" + color.r + "," + color.g + "," + color.b + ", 1)";
    } else {
        document.getElementById("menu").style.background = "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";
    }



});

// Открывашка меню
menuOpener.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("responsive");
    document.getElementById("menu").style.background = "linear-gradient(#C9908B, #7F4A45)";
    //document.getElementById("menu").style.height = "100%";
});
//
// menuCloser.addEventListener("click", (e) => {
//     e.preventDefault();
//     menu.classList.toggle("responsive");
//     document.getElementById("menu").style.background = "rgba(255, 255, 255, 0)";
// });
