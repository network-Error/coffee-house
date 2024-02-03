"use strict"
import products from './products.json' assert {type: 'json'};

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

// Load more products
const loadBtn = document.querySelector('.menu-items__refresh-btn');
const itemsProductCoffee = document.querySelectorAll('.item-coffee');
const itemsProductDesert = document.querySelectorAll('.item-desert');

loadBtn.addEventListener('click', () => {

  if (desertBtn.closest('.active-drink-btn')) {
    for (let j = 0; j < itemsProductDesert.length; j++) {
      itemsProductDesert[j].style.display = 'flex';
    }
  } else {
    for (let i = 0; i < itemsProductCoffee.length; i++) {
      itemsProductCoffee[i].style.display = 'flex';
    }
  }
})


// Modal
// console.log(products);
console.log(products)
const modalWindow = document.querySelector('.modal-window');
const modalWindowImg = document.querySelector('.modal-window__img');
const modalWindowHeading = document.querySelector('.modal-window__heading');
const modalWindowSubHeading = document.querySelector('.modal-window__sub-heading');
const modalWindowSizeText = document.querySelector('.modal-window__size-text');
const modalWindowSizeBtn = document.querySelectorAll('.modal-window__size-btn');
const modalWindowSizeBtnSize = document.querySelectorAll('.modal-window__size-btn-size');
const modalWindowAdditivesText = document.querySelector('.modal-window__additives-text');
const modalWindowAdditivesBtn = document.querySelectorAll('.modal-window__additives-btn');
const modalWindowAdditivesBtnOption = document.querySelectorAll('.modal-window__additives-btn-option');
const modalWindowTotalText = document.querySelector('.modal-window__total-heading_total-text');
const modalWindowTotalPrice = document.querySelector('.modal-window__total-heading_total-price');
const modalWindowDescriptionText = document.querySelector('.modal-window__description-text');
const modalWindowCloseBtn = document.querySelector('.modal-window__close-btn');

const itemCoffee = document.querySelectorAll('.item-coffee');
const itemTea = document.querySelectorAll('.item-tea');
const itemDesert = document.querySelectorAll('.item-desert');
const blurModal = document.querySelector('.blur-modal');
const btnSizeS = modalWindowSizeBtn[0];
const btnSizeM = modalWindowSizeBtn[1];
const btnSizeL = modalWindowSizeBtn[2];
const btnOptionSugar = modalWindowAdditivesBtn[0];
const btnOptionChinnamon = modalWindowAdditivesBtn[1];
const btnOptionSyrup = modalWindowAdditivesBtn[2];

modalWindow.classList.add('hide-modal-window');

// itemCoffee[0].addEventListener('click', showModalWindow);
modalWindowCloseBtn.addEventListener('click', hideModalWindow);

function showModalWindow(modalCoffee, productsName, productsDescription, sizeText, additivesText) {
  modalWindow.classList.remove('hide-modal-window');
  blurModal.classList.remove('hide-modal-window');
  modalWindow.classList.add('show-modal-window');
  modalWindowImg.classList.add(modalCoffee);
  modalWindowHeading.textContent = productsName.name;
  modalWindowSubHeading.textContent = productsDescription.description;
  modalWindowSizeText.textContent = sizeText;
  modalWindowSizeBtnSize[0].textContent = productsName.sizes.s.size;
  modalWindowSizeBtnSize[1].textContent = productsName.sizes.m.size;
  modalWindowSizeBtnSize[2].textContent = productsName.sizes.l.size;
  modalWindowAdditivesText.textContent = additivesText;
  modalWindowAdditivesBtnOption[0].textContent = productsName.additives[0].name;
  modalWindowAdditivesBtnOption[1].textContent = productsName.additives[1].name;
  modalWindowAdditivesBtnOption[2].textContent = productsName.additives[2].name;
  modalWindowTotalPrice.textContent = `$${productsName.price}`;
  clearActiveSizeBtn();
  btnSizeS.classList.add('active-btn-drink-wrapper');
  btnSizeS.children[0].classList.add('active-btn-drink');
  btnSizeS.children[1].classList.add('active-btn-drink-text');
}

function hideModalWindow() {
  modalWindow.classList.remove('show-modal-window');
  blurModal.classList.add('hide-modal-window');
  modalWindow.classList.add('hide-modal-window');
  modalWindowImg.classList.remove('modal-coffee1');
  modalWindowImg.classList.remove('modal-coffee2');
  modalWindowImg.classList.remove('modal-coffee3');
  modalWindowImg.classList.remove('modal-coffee4');
  modalWindowImg.classList.remove('modal-coffee5');
  modalWindowImg.classList.remove('modal-coffee6');
  modalWindowImg.classList.remove('modal-coffee7');
  modalWindowImg.classList.remove('modal-coffee8');
  modalWindowImg.classList.remove('modal-tea1');
  modalWindowImg.classList.remove('modal-tea2');
  modalWindowImg.classList.remove('modal-tea3');
  modalWindowImg.classList.remove('modal-tea4');
  modalWindowImg.classList.remove('modal-desert1');
  modalWindowImg.classList.remove('modal-desert2');
  modalWindowImg.classList.remove('modal-desert3');
  modalWindowImg.classList.remove('modal-desert4');
  modalWindowImg.classList.remove('modal-desert5');
  modalWindowImg.classList.remove('modal-desert6');
  modalWindowImg.classList.remove('modal-desert7');
  modalWindowImg.classList.remove('modal-desert8');
  clearActiveBtn();
}


// Active btn style
function clearActiveSizeBtn() {
  btnSizeS.classList.remove('active-btn-drink-wrapper');
  btnSizeS.children[0].classList.remove('active-btn-drink');
  btnSizeS.children[1].classList.remove('active-btn-drink-text');
  btnSizeM.classList.remove('active-btn-drink-wrapper');
  btnSizeM.children[0].classList.remove('active-btn-drink');
  btnSizeM.children[1].classList.remove('active-btn-drink-text');
  btnSizeL.classList.remove('active-btn-drink-wrapper');
  btnSizeL.children[0].classList.remove('active-btn-drink');
  btnSizeL.children[1].classList.remove('active-btn-drink-text');
}

function clearActiveBtn() {
  btnOptionSugar.classList.remove('active-btn-drink-wrapper');
  btnOptionSugar.children[0].classList.remove('active-btn-drink');
  btnOptionSugar.children[1].classList.remove('active-btn-drink-text');
  btnOptionChinnamon.classList.remove('active-btn-drink-wrapper');
  btnOptionChinnamon.children[0].classList.remove('active-btn-drink');
  btnOptionChinnamon.children[1].classList.remove('active-btn-drink-text');
  btnOptionSyrup.classList.remove('active-btn-drink-wrapper');
  btnOptionSyrup.children[0].classList.remove('active-btn-drink');
  btnOptionSyrup.children[1].classList.remove('active-btn-drink-text');
}

function activeBtnStyle(btn) {
  btn.classList.add('active-btn-drink-wrapper');
  btn.children[0].classList.add('active-btn-drink');
  btn.children[1].classList.add('active-btn-drink-text');
}

const addPriceM = Number(products[0].sizes.m['add-price']);
const addPriceL = Number(products[0].sizes.l['add-price']);
const currPrice = modalWindowTotalPrice;

btnSizeS.addEventListener('click', () => {
  clearActiveSizeBtn();
  activeBtnStyle(btnSizeS);
  console.log(currPrice);
})

btnSizeM.addEventListener('click', () => {
  clearActiveSizeBtn();
  activeBtnStyle(btnSizeM);
})

btnSizeL.addEventListener('click', () => {
  clearActiveSizeBtn();
  activeBtnStyle(btnSizeL);
})

btnOptionSugar.addEventListener('click', () => {
  clearActiveBtn();
  activeBtnStyle(btnOptionSugar);
})

btnOptionChinnamon.addEventListener('click', () => {
  clearActiveBtn();
  activeBtnStyle(btnOptionChinnamon);
})

btnOptionSyrup.addEventListener('click', () => {
  clearActiveBtn();
  activeBtnStyle(btnOptionSyrup);
})

// function calcFinalPrice(currentPrice, plusPrice) {
//   return Number(currentPrice + plusPrice)
// }



// Active modal

itemCoffee[0].addEventListener('click', () => {
  showModalWindow('modal-coffee1', products[0], products[0], 'Sizes', 'Additives');
})

itemCoffee[1].addEventListener('click', () => {
  showModalWindow('modal-coffee2', products[1], products[1], 'Sizes', 'Additives');
})

itemCoffee[2].addEventListener('click', () => {
  showModalWindow('modal-coffee3', products[2], products[2], 'Sizes', 'Additives');
})

itemCoffee[3].addEventListener('click', () => {
  showModalWindow('modal-coffee4', products[3], products[3], 'Sizes', 'Additives');
})

itemCoffee[4].addEventListener('click', () => {
  showModalWindow('modal-coffee5', products[4], products[4], 'Sizes', 'Additives');
})

itemCoffee[5].addEventListener('click', () => {
  showModalWindow('modal-coffee6', products[5], products[5], 'Sizes', 'Additives');
})

itemCoffee[6].addEventListener('click', () => {
  showModalWindow('modal-coffee7', products[6], products[6], 'Sizes', 'Additives');
})

itemCoffee[7].addEventListener('click', () => {
  showModalWindow('modal-coffee8', products[7], products[7], 'Sizes', 'Additives');
})

// Tea modal
itemTea[0].addEventListener('click', () => {
  showModalWindow('modal-tea1', products[8], products[8], 'Sizes', 'Additives');
})

itemTea[1].addEventListener('click', () => {
  showModalWindow('modal-tea2', products[9], products[9], 'Sizes', 'Additives');
})

itemTea[2].addEventListener('click', () => {
  showModalWindow('modal-tea3', products[10], products[10], 'Sizes', 'Additives');
})

itemTea[3].addEventListener('click', () => {
  showModalWindow('modal-tea4', products[11], products[11], 'Sizes', 'Additives');
})

// Desert modal
itemDesert[0].addEventListener('click', () => {
  showModalWindow('modal-desert1', products[12], products[12], 'Sizes', 'Additives');
})

itemDesert[1].addEventListener('click', () => {
  showModalWindow('modal-desert1', products[13], products[13], 'Sizes', 'Additives');
})

itemDesert[2].addEventListener('click', () => {
  showModalWindow('modal-desert1', products[14], products[14], 'Sizes', 'Additives');
})

itemDesert[3].addEventListener('click', () => {
  showModalWindow('modal-desert1', products[15], products[15], 'Sizes', 'Additives');
})

itemDesert[4].addEventListener('click', () => {
  showModalWindow('modal-desert1', products[16], products[16], 'Sizes', 'Additives');
})

itemDesert[5].addEventListener('click', () => {
  showModalWindow('modal-desert1', products[17], products[17], 'Sizes', 'Additives');
})

itemDesert[6].addEventListener('click', () => {
  showModalWindow('modal-desert1', products[18], products[18], 'Sizes', 'Additives');
})

itemDesert[7].addEventListener('click', () => {
  showModalWindow('modal-desert1', products[19], products[19], 'Sizes', 'Additives');
})