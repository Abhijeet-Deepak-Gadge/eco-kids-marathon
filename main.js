// Set your marathon date and time here (YYYY-MM-DDTHH:MM:SS format)
const marathonDate = new Date("2025-10-05T07:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = marathonDate - now;

  if (timeLeft <= 0) {
    document.getElementById("countdownBar").innerHTML = `
      <div class="text-white font-bold text-lg">🏁 The marathon has started!</div>
    `;
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update values in countdown bar
  document.getElementById("sticky-days").textContent = days;
  document.getElementById("sticky-hours").textContent = hours;
  document.getElementById("sticky-minutes").textContent = minutes;
  document.getElementById("sticky-seconds").textContent = seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

    // Scroll hide/show logic
    let lastScrollY = window.scrollY;
    const countdownBar = document.getElementById("countdownBar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScrollY) {
        countdownBar.classList.remove("show-bar");
        countdownBar.classList.add("hide-bar");
      } else {
        countdownBar.classList.remove("hide-bar");
        countdownBar.classList.add("show-bar");
      }
      lastScrollY = window.scrollY;
    });


// sponsors Section (Rotation logic)
function openSponsorModal(title, image, description) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalImage').src = image;
  document.getElementById('modalDescription').innerText = description;

  document.getElementById('sponsorModal').classList.remove('hidden');
  document.getElementById('sponsorModal').classList.add('flex');
}

function closeSponsorModal() {
  document.getElementById('sponsorModal').classList.remove('flex');
  document.getElementById('sponsorModal').classList.add('hidden');
}



// Logic for QNA 
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.classList.toggle('hidden');
      button.querySelector('svg').classList.toggle('rotate-180');
    });
  });