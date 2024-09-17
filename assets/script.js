AOS.init();

document.addEventListener('DOMContentLoaded', () => {
    // Função para fechar o menu
    const closeMenu = () => {
        document.getElementById('close-menu').checked = false;
    };

    // Seleciona todos os links dentro do menu
    const menuLinks = document.querySelectorAll('#menu-links a');

    // Adiciona o evento de clique para cada link no menu
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
