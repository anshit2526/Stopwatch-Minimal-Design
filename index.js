var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var milliSeconds = document.getElementById('milli-seconds');

var startBtn = document.getElementById('start-button');
var pauseBtn = document.getElementById('pause-button');
var resetBtn = document.getElementById('reset-button');
var lightModeBtn = document.getElementById('light-mode-btn');
var darkModeBtn = document.getElementById('dark-mode-btn');

var isStart = false;
var isPause = false;
var h = 0;
var m = 0;
var s = 0;
var ms = 0;

var timerH;
var timerM;
var timerS;
var timerMS;


const start = () => {

    isStart = true;
    isPause = false;
    pauseBtn.removeAttribute('disabled');

    timerH = setInterval(() => {

        h < 9 ? hours.innerText = '0' + ++h : hours.innerText = ++h;
        h === 60 ? h = 0 : h;

    }, 600000);
    timerM = setInterval(() => {

        m < 9 ? minutes.innerText = '0' + ++m : minutes.innerText = ++m;
        m === 60 ? m = 0 : m;

    }, 60000);
    timerS = setInterval(() => {

        s < 9 ? seconds.innerText = '0' + ++s : seconds.innerText = ++s;
        s === 60 ? s = 0 : s;

    }, 1000);
    timerMS = setInterval(() => {

        ms < 9 ? milliSeconds.innerText = '0' + ++ms : milliSeconds.innerText = ++ms;
        ms === 100 ? ms = 0 : ms;

    }, 0);

}


const reset = () => {

    pauseBtn.setAttribute('disabled', '');

    clearInterval(timerH);
    clearInterval(timerM);
    clearInterval(timerS);
    clearInterval(timerMS);
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    hours.innerText = '00';
    minutes.innerHTML = '00';
    seconds.innerText = '00';
    milliSeconds.innerText = '00';

    isStart = false;

}


const pause = () => {
    if (!isPause) {

        isPause = true;
        isStart = false;
        clearInterval(timerH);
        clearInterval(timerM);
        clearInterval(timerS);
        clearInterval(timerMS);
    } else {

        isPause = false;
        h < 9 ? hours.innerText = '0' + h : hours.innerText = h;
        m < 9 ? minutes.innerText = '0' + m : minutes.innerText = m;
        s < 9 ? seconds.innerText = '0' + s : seconds.innerText = s;
        ms < 9 ? milliSeconds.innerText = '0' + ms : milliSeconds.innerText = ms;
        start();
    }
}



startBtn.addEventListener('click', () => {
    if (!isStart) {
        start();
    } else {
        reset();
        setTimeout(start, 300);
    }
    console.log("isStart", isStart, "\nisPause", isPause);
});

pauseBtn.addEventListener('click', () => {
    pause();
    console.log("isStart", isStart, "\nisPause", isPause);
});

resetBtn.addEventListener('click', () => {
    reset();
    console.log("isStart", isStart, "\nisPause", isPause);
});


darkModeBtn.addEventListener('click', ()=>{
    Object.assign(document.body.style, {
        backgroundColor: 'rgb(15, 15, 15)',
        color: 'rgb(236, 236, 236)',
    });

})
lightModeBtn.addEventListener('click', ()=>{
    Object.assign(document.body.style, {
        color: 'rgb(15, 15, 15)',
        backgroundColor: 'rgb(236, 236, 236)'
    })
})
