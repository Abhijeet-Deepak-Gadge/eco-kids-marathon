// Countdown Timer
const countDownDate = new Date("2025-10-01T09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("sticky-days").innerText = days;
  document.getElementById("sticky-hours").innerText = hours;
  document.getElementById("sticky-minutes").innerText = minutes;
  document.getElementById("sticky-seconds").innerText = seconds;

  if (distance < 0) {
    document.getElementById("countdownBar").innerHTML = "🏁 The Marathon Has Started!";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Scroll hide/show effect
let lastScrollY = window.scrollY;
const countdownBar = document.getElementById("countdownBar");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scroll down – hide bar
    countdownBar.style.transform = "translateY(-100%)";
    countdownBar.style.opacity = "0";
  } else {
    // Scroll up – show bar
    countdownBar.style.transform = "translateY(0)";
    countdownBar.style.opacity = "1";
  }
  lastScrollY = window.scrollY;
});
