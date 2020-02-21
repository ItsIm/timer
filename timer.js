let hour = 0,
    minute = 0,
    second = 10,
    intervalId,
    runInterval = 1;

let inSecond = function (second, minute, hour) {
    let sum = second + minute * 60 + hour * 3600;
    return sum;
};

let sum = inSecond(second, minute, hour);

let timer = function () {
    sum --;
};

let outSecond = function () {
    hour = Math.floor(sum / 3600);
    minute = Math.floor((sum - hour * 3600) / 60);
    second = Math.floor((sum - hour * 3600 - minute * 60) % 60);
    console.log("часов: " + hour + " минут: " + minute + " секунд: " + second);
};

let all = function() {
    outSecond();
    timer();
};

let stopTimer = function () {
    all();
    if (runInterval) {
        intervalId = setInterval(stopTimer, 1000);
        runInterval = 0;
    } else if (!(sum + 1)) {
        clearInterval(intervalId);
        console.log("Время вышло!");
    }
};

stopTimer();