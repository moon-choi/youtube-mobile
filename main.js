const more = document.querySelector('.title-more .more');
const title = document.querySelector('.title-more .title');

more.addEventListener('click', () => {
  more.classList.toggle('clicked');
  title.classList.toggle('clamp');
})
