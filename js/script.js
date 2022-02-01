AOS.init();

let menu_hidden = document.querySelector('.menu')

let bars = document.querySelector('.fa-bars').addEventListener('click', () => {
    menu_hidden.classList.toggle('menu-block');
});