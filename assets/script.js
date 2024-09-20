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

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão do submenu
    const submenuToggle = document.querySelector('.submenu-toggle');
    const submenuParent = submenuToggle.parentElement;

    // Adiciona um evento de clique para mostrar/esconder o submenu
    submenuToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Evita comportamento padrão do link
        submenuParent.classList.toggle('active'); // Alterna a classe 'active' para mostrar/esconder o submenu
    });

    // Fecha o submenu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!submenuParent.contains(event.target) && !submenuToggle.contains(event.target)) {
            submenuParent.classList.remove('active'); // Remove a classe 'active' se o clique for fora do submenu
        }
    });
});
