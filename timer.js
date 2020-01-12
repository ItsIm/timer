let hour = 0,
    minute = 0,
    second = 5,
    intervalId,
    stopTimer = 0,
    runTimer = 0;

var timer = function () {
    if (second) {
        second --;
    } else {
        second = 59;
        if (minute) {
            minute --;
        } else {
            minute = 59;
            if(hour) {
                hour--;
            } else {
                hour = 23;
            }
        }
    }
    console.log("часов: " + hour + " минут: " + minute + " секунд: " + second);
    if (second == 0 && minute == 0 && hour == 0) {
        console.log("Время вышло!");
        stopTimer = 1;
    }
};

var stopTimerFunction = function () {
    if (stopTimer == 1) {
        clearInterval(intervalId);
    } else {
        timer();
        if (!runTimer) {
            intervalId = setInterval(stopTimerFunction, 1000);
            runTimer = 1;
        }
    }
};

stopTimerFunction();