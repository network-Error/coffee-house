"use strict"
// Menu
const wrapperCoffee = document.querySelector('.menu-items__wrapper_coffee');
const wrapperTea = document.querySelector('.menu-items__wrapper_tea');
const wrapperDesert = document.querySelector('.menu-items__wrapper_desert');
const coffeeBtn = document.querySelector('.menu__btn-drink_coffee');
const teaBtn = document.querySelector('.menu__btn-drink_tea');
const desertBtn = document.querySelector('.menu__btn-drink_desert');

function hideElements() {
  wrapperCoffee.classList.remove('_show-wrapper');
  wrapperTea.classList.remove('_show-wrapper');
  wrapperDesert.classList.remove('_show-wrapper');
  wrapperCoffee.classList.add('_hide-wrapper');
  wrapperTea.classList.add('_hide-wrapper');
  wrapperDesert.classList.add('_hide-wrapper');
}
hideElements();

wrapperCoffee.classList.remove('_hide-wrapper');
wrapperCoffee.classList.add('_show-wrapper');
coffeeBtn.classList.add('active-drink-btn');
coffeeBtn.children[0].classList.add('active-drink-light');
coffeeBtn.children[1].classList.add('active-drink-light-text');

function buttonEvent(button) {
  button.addEventListener('click', () => {
    if (button === coffeeBtn) {
      hideElements();
      removeButton(teaBtn);
      removeButton(desertBtn);
      activeButton(coffeeBtn)
      wrapperCoffee.classList.remove('_hide-wrapper');
      wrapperCoffee.classList.add('_show-wrapper');
    } else if (button === teaBtn) {
      hideElements();
      removeButton(coffeeBtn);
      removeButton(desertBtn);
      activeButton(teaBtn);
      wrapperTea.classList.remove('_hide-wrapper');
      wrapperTea.classList.add('_show-wrapper');
    } else if (button === desertBtn) {
      hideElements();
      removeButton(coffeeBtn);
      removeButton(teaBtn);
      activeButton(desertBtn)
      wrapperDesert.classList.remove('_hide-wrapper');
      wrapperDesert.classList.add('_show-wrapper');
    } else {
      console.log('Error!');
    }
  })
}

buttonEvent(coffeeBtn);
buttonEvent(teaBtn);
buttonEvent(desertBtn);

function removeButton(button) {
  button.classList.remove('active-drink-btn');
  button.children[0].classList.remove('active-drink-light');
  button.children[1].classList.remove('active-drink-light-text');
}

function activeButton(button) {
  button.classList.add('active-drink-btn');
  button.children[0].classList.add('active-drink-light');
  button.children[1].classList.add('active-drink-light-text');
}