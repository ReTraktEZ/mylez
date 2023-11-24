document.addEventListener("DOMContentLoaded", function () {
    const testimonialContainer = document.querySelector(".testimonial-container");
    const prevArrow = document.querySelector(".arrow.prev");
    const nextArrow = document.querySelector(".arrow.next");
  
    if (!testimonialContainer || !prevArrow || !nextArrow) {
      console.error("Elementos não encontrados. Verifique suas classes.");
      return;
    }
  
    let currentIndex = 0;
  
    nextArrow.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % testimonialContainer.children.length;
      updateCarousel();
    });
  
    prevArrow.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + testimonialContainer.children.length) % testimonialContainer.children.length;
      updateCarousel(); 
    });
  
    function updateCarousel() {
      const translateValue = -currentIndex * 100 + "%";
      testimonialContainer.style.transform = "translateX(" + translateValue + ")";
    }
  });
  