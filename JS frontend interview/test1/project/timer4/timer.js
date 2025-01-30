let timerInterval;
let seconds = 0;
let minutes = 10;

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (seconds === 0 && minutes === 0) {
      clearInterval(timerInterval);
      return;
    }
    if (seconds === 0) {
      seconds = 59;
      minutes--;
    } else {
      seconds--;
    }
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("timer").textContent = `${formattedMinutes}:${formattedSeconds}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 10;
  document.getElementById("timer").textContent = "10:00";
}


