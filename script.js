const menu = document.querySelector('#mob-mn');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-lin').forEach((n) => n.addEventListener('click', () => {
  menu.classList.remove('is-active');
  menuLinks.classList.remove('active');
}));