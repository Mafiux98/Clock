let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function printTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

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
