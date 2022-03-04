//start function

let count = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;

let interval = 0;
let timerRunning = false;

let startTimer = () => {
    count++;

    minutes = Math.floor((count/100)/60);
    seconds = Math.floor((count/100) - (minutes * 60));
    milliSeconds = Math.floor(count - (seconds*100) - (minutes*6000));

    document.querySelector('#min').innerText = zeroFill(minutes);
    document.querySelector('#sec').innerText = zeroFill(seconds);
    document.querySelector('#msec').innerText = zeroFill(milliSeconds);
};


//click on start button

let startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', function(){
    if(!timerRunning){
        interval = setInterval(startTimer, 10);
        timerRunning = true;
    }
});

//stop Button

let stopButton = document.querySelector("#stop-btn");
stopButton.addEventListener('click', function(){
    clearInterval(interval);
    timerRunning = false;
});

//reset button
let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', function(){
    clearInterval(interval);
    count = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
    timerRunning = false;

    document.querySelector('#min').innerText = '00';
    document.querySelector('#sec').innerText = '00';
    document.querySelector('#msec').innerText = '00';
});


let zeroFill = (time) => {
    if(time<=9){
        return '0' + time;
    }
    else{
        return time;
    }
};