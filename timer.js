



let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const numberInput = document.getElementById('number');

function updateTimeDisplay() {
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    timeDisplay.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
    clearInterval(timer);

    minutes = parseInt(numberInput.value) || 0; // مقدار اولیه دقیقه‌ها را از ورودی دریافت می‌کند
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    seconds = 0;

    timer = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    clearInterval(timer);
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                    alert("Time's up!");
                }
            }
        }
        updateTimeDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimeDisplay();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);


 updateTimeDisplay();
