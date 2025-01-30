const timerEl = document.querySelector('.timer');
const animationCircleEl = document.querySelector('.animation-circle');

const duration = 10; // in seconds

function countdown(duration) {
  const startTime = Date.now(); // Record start time
  const intervalId = setInterval(function() {
    const elapsed = Date.now() - startTime; // Calculate elapsed time
    const remaining = duration - Math.floor(elapsed / 1000); // Calculate remaining time
    if (remaining < 0) { // If timer is done
      clearInterval(intervalId);
      animationCircleEl.style.opacity = 1; // Show animation circle
    } else {
      // Update timer display
      timerEl.innerText = remaining + 1;
      
      // Update animation circle
      const progress = elapsed / (duration * 1000);
      animationCircleEl.style.opacity = 1 - progress;
    }
  }, 10);
}

countdown(duration);
