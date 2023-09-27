document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll('.product');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const closeButton = document.querySelector('.close-button');
    
    products.forEach(product => {
      product.addEventListener('click', () => {
        const productName = product.querySelector('h3').textContent;
        const productDescription = product.querySelector('p').textContent;
        const productImage = product.querySelector('img').getAttribute('src');
        // Simulação de preço fictício
        const productPrice = (Math.random() * 100).toFixed(2);
    
        modalContent.querySelector('.product-image').src = productImage;
        modalContent.querySelector('.product-name').textContent = productName;
        modalContent.querySelector('.product-description').textContent = productDescription;
        modalContent.querySelector('.product-price span').textContent = productPrice;
    
        modal.classList.add('show');
      });
    });
    
  
    closeButton.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  
    window.addEventListener('click', event => {
      if (event.target === modal) {
        modal.classList.remove('show');
      }
    });
  });
  