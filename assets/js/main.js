const header = document.querySelector('header');
const menu = header.querySelector('#menu');
const closeMenu = header.querySelector('#closeMenu');
const nav = header.querySelector('nav');

menu.addEventListener('click', () => { nav.style.display = 'flex'; });
closeMenu.addEventListener('click', () => { nav.style.display = 'none'; });