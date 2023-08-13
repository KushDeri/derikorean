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



        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-10GRYRDN1R');
    