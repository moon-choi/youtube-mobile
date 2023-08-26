const hamburger = document.querySelector('.nav_hamburger')
const menu = document.querySelector('.nav_menu_items');
const social = document.querySelector('.nav_social');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  social.classList.toggle('active');
});