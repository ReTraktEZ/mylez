const carouselImages = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-image");
let currentIndex = 0;
const slideInterval = 3000; // Intervalo de 3 segundos (ajuste conforme necessário)
let intervalId;

function updateCarousel() {
  carouselImages.style.transform = `translateX(-${currentIndex * 33.8}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
}

function startCarousel() {
  intervalId = setInterval(nextSlide, slideInterval);
}

function stopCarousel() {
  clearInterval(intervalId);
}

startCarousel();
