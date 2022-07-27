const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function printTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    //0 before single digit number, 2 ways
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    if (s < 10) {
        s = "0" + s;
    }

    hours.innerHTML = h + "<br><span>Hours</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
}
setInterval(printTime, 1000);
