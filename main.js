// Burger menu
const bodyBlock = document.querySelector('body');
const burgerBtn = document.querySelector('.nav__burger-btn');
const burgerBtnSpan = document.querySelector('.nav__burger-btn span');
const burgerList = document.querySelector('.nav__burger-wrapper-list');

burgerBtn.addEventListener('click', () => {
  burgerBtnSpan.classList.toggle('_active-burger-btn');
  burgerList.classList.toggle('_show');
  bodyBlock.classList.toggle('_block');
});
