(function () {
    let TopikBook = document.querySelector(".topik_book");
    let Topik1Class = document.querySelector(".topik1_books .swiper-wrapper");

    Topik1Class.insertAdjacentHTML("beforeend", `
    	${TopikBook}
    `);

}());