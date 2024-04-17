var intervalId;
var minutes;
var seconds;

function startTimer() {
    if (intervalId) {
        clearInterval(intervalId);
    }

    minutes = parseInt(document.getElementById("minutes").value);
    seconds = parseInt(document.getElementById("seconds").value);

    if (isNaN(minutes) || isNaN(seconds)) {
        alert("Vui lòng nhập thời gian hợp lệ.");
        return;
    }

    var totalSeconds = minutes * 60 + seconds;

    intervalId = setInterval(function () {
        if (totalSeconds <= 0) {
            clearInterval(intervalId);
            playAlarm();
            document.getElementById("timer").innerHTML = "Hết giờ!";
            return;
        }

        minutes = Math.floor(totalSeconds / 60);
        seconds = totalSeconds % 60;

        document.getElementById("timer").innerHTML = minutes + " phút " + seconds + " giây";

        totalSeconds--;
    }, 1000);
}

function resetTimer() {
    if (intervalId) {
        clearInterval(intervalId);
    }

    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
    document.getElementById("timer").innerHTML = "";
    stopAlarm();
}

function playAlarm() {
    var alarmSound = document.getElementById("alarmSound");
    alarmSound.play();
}

function stopAlarm() {
    var alarmSound = document.getElementById("alarmSound");
    alarmSound.pause();
    alarmSound.currentTime = 0;
}