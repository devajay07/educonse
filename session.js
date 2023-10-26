document.addEventListener("DOMContentLoaded", function () {
  // Find the elements
  const loadingScreen = document.getElementById("loading-screen");
  const bookSessionButton = document.getElementById("book-session-button");
  const meeting = document.getElementById("meeting");

  // Attach click event to the "Book Session" button
  bookSessionButton.addEventListener("click", function () {
    // Display the loading screen
    loadingScreen.style.display = "flex";
    ;

    // Simulate a delay for demonstration purposes
    setTimeout(function () {
      // Hide the loading screen
      loadingScreen.style.display = "none";
      meeting.style.display = "flex";
      bookSessionButton.textContent = "Session Booked";
      bookSessionButton.disabled = true;
      bookSessionButton.style.backgroundColor = "grey";
      bookSessionButton.style.cursor = "not-allowed";
      const scrollY = window.scrollY;
      const targetY = scrollY + 1500;
      scrollToY(targetY, 1000); // Adjust the duration (1000ms) as needed
    }, 300); // Replace 3000 with the actual confirmation process duration
  });

  function scrollToY(targetY, duration) {
    const startingY = window.scrollY;
    const diffY = targetY - startingY;
    const startTime = performance.now();

    function step() {
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < duration) {
        window.scrollTo(
          0,
          startingY + diffY * easeInOutCubic(elapsedTime / duration)
        );
        requestAnimationFrame(step);
      } else {
        window.scrollTo(0, targetY);
        const video_intro=document.getElementById("intro-video");
    video_intro.autoplay=true;
    video_intro.play();

  }
    }

    requestAnimationFrame(step);
  }

  // Easing function for smooth scrolling
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
});
