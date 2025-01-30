const timerElement = document.querySelector(".timer");
const timerLabelElement = document.querySelector(".timer-label");
const timerDuration = 60; // in seconds
let remainingTime = timerDuration;

function updateTimer() {
  const timeInPercentage = (remainingTime / timerDuration) * 100;
  timerElement.style.clip = `rect(0, 100px, 200px, ${timeInPercentage}%)`;
  timerLabelElement.textContent = `Time Remaining: ${remainingTime}s`;
  remainingTime--;
  
  if (remainingTime < 0) {
    clearInterval(intervalId);
    timerElement.style.background = "#F44336";
    timerLabelElement.textContent = "Time's up!";
  }
}

updateTimer();
const intervalId = setInterval(updateTimer, 1000);

// const timerElement = document.querySelector(".timer");
// const timerLabelElement = document.querySelector(".timer-label");
// const timerDuration = 60; // in seconds
// let remainingTime = timerDuration;

// function updateTimer() {
//   const timeInPercentage = (remainingTime / timerDuration) * 360;
//   timerElement.style.clip = `rect(auto, auto, auto, auto)`;
//   timerElement.style.transform = `rotate(${timeInPercentage}deg)`;
//   timerLabelElement.textContent = `Time Remaining: ${remainingTime}s`;
//   remainingTime--;
  
//   if (remainingTime < 0) {
//     clearInterval(intervalId);
//     timerElement.style.background = "#F44336";
//     timerLabelElement.textContent = "Time's up!";
//   }
// }

// updateTimer();
// const intervalId = setInterval(updateTimer, 1000);
