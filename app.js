const countDate = new Date("jan 1 2021 00:00:00").getTime();
console.log(newYear);

const hour = document.getElementById('html-hour');
const minute = document.getElementById('html-min');
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
        console.log(s, m, h)

        seconds.innerHTML = `${s}s`;
        minute.innerHTML = `${m}min`;
        hour.innerHTML = `${h}h`;
}

setInterval(newYear, 1000);