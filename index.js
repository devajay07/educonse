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

const carouselContainer = document.querySelector(".carousel-container");
const carouselSlide = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselSlide.length;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselSlide.length) % carouselSlide.length;
  updateCarousel();
});

function updateCarousel() {
  const slideWidth = carouselSlide[0].clientWidth;
  carouselContainer.style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;
}
