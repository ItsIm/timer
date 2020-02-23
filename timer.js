let hour = 0,
    minute = 0,
    second = 10,
    intervalId,
    runInterval = 1;

let sum = second + minute * 60 + hour * 3600;

let outSecond = function () {
    hour = Math.floor(sum / 3600);
    minute = Math.floor((sum - hour * 3600) / 60);
    second = Math.floor((sum - hour * 3600 - minute * 60) % 60);
    sum --;
    console.log("часов: " + hour + " минут: " + minute + " секунд: " + second);
};

let timer = function () {
    outSecond();
    if (!(sum + 1)) {
        clearInterval(intervalId);
        console.log("Время вышло!");
    }
};

intervalId = setInterval(timer, 1000);