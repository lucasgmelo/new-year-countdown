const countDate = new Date("jan 1 2022 00:00:00").getTime();

const days = document.getElementById('html-day');
const hours = document.getElementById('html-hour');
const minutes = document.getElementById('html-min');
const seconds = document.getElementById('html-sec');

function newYear() {
    let now = new Date().getTime();
        gap = countDate - now;

        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;

        let d = Math.floor(gap / (day));
        let h = Math.floor((gap % (day)) / (hour));
        let m = Math.floor((gap % (hour)) / (minute));
        let s = Math.floor((gap % (minute)) / second);

        seconds.innerHTML = `${s}s`;
        minutes.innerHTML = `${m}min`;
        hours.innerHTML = `${h}h`;
        days.innerHTML = `${d}d`;

}

setInterval(newYear, 1000);