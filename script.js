const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function printTime(time) {
    hours.innerHTML = time.h + "<br><span>Hours</span>";
    seconds.innerHTML = time.s + "<br><span>Seconds</span>";
    minutes.innerHTML = time.m + "<br><span>Minutes</span>";
}

setInterval(() => printTime(getTime()), 1000);
