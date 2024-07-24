function menuShow() {
    // Seleciona o elemento do menu móvel
    let menuMobile = document.querySelector('.mobile-menu');
    
    // Seleciona o checkbox
    let checkbox = document.getElementById('menuCheckbox');

    // Verifica se o checkbox está marcado
    if (checkbox.checked) {
        // Adiciona a classe 'open' para abrir o menu móvel
        menuMobile.classList.add('open');
        // Altera a origem da imagem do ícone para o ícone de fechar
        document.querySelector('.icon').src ="assets/close_white_36dp.svg";
    } else {
        // Remove a classe 'open' para fechar o menu móvel
        menuMobile.classList.remove('open');
        // Altera a origem da imagem do ícone para o ícone de menu
        document.querySelector('.icon').src = "./assets/menu_white_36dp.svg";
    }
}
