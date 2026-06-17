function abrirMenu(event) {
    let dropdown = event.currentTarget;

    if (event.target.closest('.submenu') || event.target.closest('a')) {
        return;
    }

    event.preventDefault();

    let menu = dropdown.querySelector(".submenu");

    if (menu) menu.classList.toggle("ativo");
}