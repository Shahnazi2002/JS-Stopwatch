var seconds = 0;
var minutes = 0;
var secondsDisplay = document.getElementById("seconds");
var minutesDisplay = document.getElementById("minutes");
var timerOn = false;
var timeOut = null;

function display() {
    if (timerOn) {
        seconds += 1;

        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes < 10) {
            minutesDisplay.innerHTML = "0" + minutes;
        } else {
            minutesDisplay.innerHTML = minutes;
        }

        if (seconds < 10) {
            secondsDisplay.innerHTML = "0" + seconds;
        } else {
            secondsDisplay.innerHTML = seconds;
        }

        timeOut = setTimeout(display, 1000);
    }
}

function start() {
    if (!timerOn) {
        timerOn = true;
        document.getElementById("start").innerText = "STOP";
        timeOut = setTimeout(display, 1000);
    } else {
        timerOn = false;
        clearTimeout(timeOut);
        timeOut = null;
        document.getElementById("start").innerText = "START";
    }
}

function reset() {
    document.getElementById("start").innerText = "START";
    clearTimeout(timeOut);
    timeOut = null;
    timerOn = false;
    seconds = 0;
    minutes = 0;
    secondsDisplay.innerHTML = "00";
    minutesDisplay.innerHTML = "00";
}
