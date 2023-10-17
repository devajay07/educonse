document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling; // Get the next sibling
      if (answer.style.display === "block" || answer.style.display === "") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const tagline = document.querySelector(".financial h2.animated-tagline");
  if (isElementInViewport(tagline)) {
    tagline.classList.add("active");
    window.removeEventListener("scroll", handleScroll);
  }
  const elements = document.querySelectorAll(".animated-tagline");
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleScroll);
