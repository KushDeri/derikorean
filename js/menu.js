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



//Calendar
(function () {
    let calendarHeader = document.querySelector('.calendar-header h1 span');
    let calendar = document.querySelector(".calendar");
    
    let dt = new Date();
    let month = dt.getMonth();
    let year = dt.getFullYear();
    let firstDay = dt.getDate() - dt.getDay();
    let lastDay = firstDay + 6;
    let time = dt.toLocaleTimeString('en-US');
    calendarHeader.textContent = dt.toLocaleString("en", {month: "long"});
    
    
    calendar.insertAdjacentHTML("beforeend", `
        <div class="time time--past"><span class="hour">${new Date(year, month, firstDay).getDate()}</span></div>
    `);

    for (let i = 1; i < 8; i++) {
        if ((new Date(year, month, firstDay + i).getDate() < new Date(year, month, dt.getDate()).getDate())) {
            if (new Date(year, month, firstDay).getDate() === new Date(year, month, dt.getDate()).getDate()
                && new Date(year, month, firstDay - 7 + i).getDate() < new Date(year, month, firstDay).getDate()) {
                for (let j = firstDay - 7; j !== firstDay; j++) {
                    calendar.insertAdjacentHTML("beforeend", `
                        <div class="day day--past"><span class="date">${new Date(year, month, firstDay - 7 + i).getDate()}</span></div>
                    `);
                    break;
                }
            } else {
                for (let j = firstDay; j !== lastDay; j++) {
                    calendar.insertAdjacentHTML("beforeend", `
                        <div class="day day--past"><span class="date">${new Date(year, month, firstDay + i).getDate()}</span></div>
                    `);
                    break;
                }
            }
        } else {
            if (new Date().getDate() === new Date(year, month, firstDay + i).getDate()
                || new Date().getDate() === new Date(year, month, firstDay).getDate()) {
                if (new Date().getDate() === new Date(year, month, firstDay).getDate()) {
                   calendar.insertAdjacentHTML("beforeend", `
                    <div class="day day--current" data-date="${new Date(year, month, i).toISOString().split("T")[0]}"><span class="date">${new Date(year, month, firstDay).getDate()}</span></div>
                `); 
                } else{
                    calendar.insertAdjacentHTML("beforeend", `
                        <div class="day day--current" data-date="${new Date(year, month, i).toISOString().split("T")[0]}"><span class="date">${new Date(year, month, firstDay + i).getDate()}</span></div>
                    `);
                }
            } else {
                if (new Date().getDate() < new Date(year, month, i).getDate()) {                    
                    calendar.insertAdjacentHTML("beforeend", `
                        <div class="day day--disabled"><span class="date">${new Date(year, month, firstDay + i).getDate()}</span></div>
                    `);                    
                } else {
                    calendar.insertAdjacentHTML("beforeend", `
                        <div class="day" data-date="${new Date(year, month, i).toISOString().split("T")[0]}"><span class="date">${new Date(year, month, firstDay + i).getDate()}</span></div>
                    `);
                }               
            }           
        }
    }


    for (let f = 0; f < 1; f++) {
        calendar.insertAdjacentHTML("beforeend", `
                    <div class="time time--past"><span class="hour">${f}:00</span></div>
                `);

        for (let i = 1; i < 8; i++) {
            if ((new Date(year, month, firstDay + i).getDate() < new Date(year, month, dt.getDate()).getDate()
                && new Date(year, month, firstDay).getMonth() === new Date(year, month, firstDay + 7).getMonth())
            || (new Date(year, month, firstDay).getDate() === new Date(year, month, dt.getDate()).getDate()
                && new Date(year, month, firstDay - 7 + i).getDate() < new Date(year, month, firstDay).getDate())
            ||((new Date(year, month, firstDay + i, f, 0, 0) < new Date(year, month, firstDay + i, time)
                || new Date(year, month, firstDay, f, 0, 0) < new Date(year, month, firstDay, time))
                && (new Date(year, month, firstDay + i).getDate() === new Date(year, month, dt.getDate()).getDate()
                    || new Date(year, month, firstDay).getDate() === new Date(year, month, dt.getDate()).getDate()))) {
                
                if (new Date(year, month, firstDay).getDate() === new Date(year, month, dt.getDate()).getDate()
                && new Date(year, month, firstDay - 7 + i).getDate() < new Date(year, month, firstDay).getDate()) {
                    for (let j = firstDay - 7; j !== firstDay; j++) {
                        calendar.insertAdjacentHTML("beforeend", `
                            <div class="class lesson--past"><span class="lesson"></span></div>
                        `);
                        break;
                    }
                } else {
                    for (let j = firstDay; j !== lastDay; j++) {
                        calendar.insertAdjacentHTML("beforeend", `
                            <div class="class lesson--past"><span class="lesson"></span></div>
                        `);
                        break;
                    }
                }

                if ((new Date(year, month, firstDay + i, f, 0, 0) < new Date(year, month, firstDay + i, new Date().getHours(), new Date().getMinuts(), 0)
                    || new Date(year, month, firstDay, f, 0, 0) < new Date(year, month, firstDay, time))
                && (new Date(year, month, firstDay + i).getDate() === new Date().getDate()
                    || new Date(year, month, firstDay).getDate() === new Date().getDate())) {
                    for (let j = 0; j !== time; j++) {
                        calendar.insertAdjacentHTML("beforeend", `
                            <div class="class lesson--past"><span class="lesson"></span></div>
                        `);
                        break;
                    }
                }
            } else {
                if (new Date().getDate() === new Date(year, month, firstDay + i).getDate()
                || new Date().getDate() === new Date(year, month, firstDay).getDate()) {
                    if (new Date().getDate() === new Date(year, month, firstDay).getDate()) {
                        calendar.insertAdjacentHTML("beforeend", `
                            <div class="class lesson--current"><span class="lesson"><a href="#"><iconify-icon icon="fluent:people-28-filled" width="25" height="25"></iconify-icon><p>${f}:00-${f+1}:00</p></a></span></div>
                        `);
                    } else {
                        calendar.insertAdjacentHTML("beforeend", `
                            <div class="class lesson--current"><span class="lesson"><a href="#"><iconify-icon icon="fluent:people-28-filled" width="25" height="25"></iconify-icon><p>${f}:00-${f+1}:00</p></a></span></div>
                        `);
                    }
                } else {
                    if (new Date().getDate() < new Date(year, month, i).getDate()) {                    
                        calendar.insertAdjacentHTML("beforeend", `
                            <div class="class day--disabled"><span class="lesson"></span></div>
                        `);                    
                    } else {
                        calendar.insertAdjacentHTML("beforeend", `
                            <div class="class"><span class="lesson"><a href="#"><iconify-icon icon="fluent:people-28-filled" width="25" height="25"></iconify-icon><p>${f}:00-${f+1}:00</p></a></span></div>
                        `);
                    }               
                }           
            }
        }
    }

    
}());