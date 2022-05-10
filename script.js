const menu = document.querySelector('#mob-mn')
const menuLinks = document.querySelector('.nav-menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});