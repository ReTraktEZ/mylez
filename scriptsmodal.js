document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões que abrem o modal
  const openModalButtons = document.querySelectorAll(".open-modal");

  // Adiciona um listener de clique a cada botão
  openModalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Obtém o ID do modal correspondente do atributo data-target
      const targetModalId = button.getAttribute("data-target");
      
      // Seleciona o modal correspondente
      const targetModal = document.getElementById(targetModalId);

      // Exibe o modal
      targetModal.style.display = "block";
    });
  });

  // Se você desejar adicionar a funcionalidade de fechar o modal, você precisará adicionar lógica adicional.
});
