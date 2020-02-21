let hour = 0,
    minute = 0,
    second = 10,
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
    if (!second && !minute && !hour) {
        console.log("Время вышло!");
        stopTimer = 1;
    }
};

var stopTimerFunction = function () {
    if (stopTimer) {
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