AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const menuLinks = document.querySelectorAll(".menu a"); // Links do menu
    const submenuToggle = document.getElementById("submenu-toggle");
    const submenuItems = document.getElementById("submenu-items");
    const body = document.body;

    // Função para abrir/fechar menu mobile
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show");
        body.classList.toggle("no-scroll"); // Impede rolagem ao abrir o menu
    });

    // Fechar menu ao clicar em qualquer link
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("show");
            body.classList.remove("no-scroll");
        });
    });

    // Alternar submenu
    submenuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita fechamento imediato
        submenuItems.classList.toggle("show");
    });

    // Fechar o submenu se clicar fora dele
    document.addEventListener("click", function (event) {
        if (!submenuToggle.contains(event.target) && !submenuItems.contains(event.target)) {
            submenuItems.classList.remove("show");
        }
    });

    // Fechar o menu ao clicar fora dele no mobile
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("show");
            body.classList.remove("no-scroll");
        }
    });

        // Alterna o submenu
        submenuToggle.addEventListener("click", function (event) {
            event.stopPropagation(); // Evita fechar o menu ao clicar dentro dele
            submenuItems.classList.toggle("show");
            submenuItems.style.display = submenuItems.style.display === "block" ? "none" : "block";
        });
});