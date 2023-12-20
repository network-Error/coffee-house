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


// Slider Favorite
const btnLeft = document.querySelector('.favorite-coffee__slider-btn_left');
const btnRight = document.querySelector('.favorite-coffee__slider-btn_right');
const slides = document.querySelectorAll('.slide')
const slide1 = document.querySelector('.favorite-coffee__slide1');
const slide2 = document.querySelector('.favorite-coffee__slide2');
const slide3 = document.querySelector('.favorite-coffee__slide3');
let positionSlide = 0;
let positionDot = 0;
const numberOfSlides = slides.length;
const dots = document.querySelectorAll('.dots');
const numberOfDots = dots.length;
const sliderWrapper = document.querySelector('.favorite-coffee__slider-wrapper');

function hideAllSlides() {
  for (const slide of slides) {
    slide.classList.remove('_show-slide');
    slide.classList.add('_hide-slide');
  }
}

function hideAllDots() {
  for (const dot of dots) {
    dot.classList.remove('_active-dots');
    dot.classList.add('_base-dots');
  }
}

const moveToNextSlide = (e) => {
  hideAllSlides();
  hideAllDots();

  if (positionSlide === numberOfSlides - 1 && positionDot === numberOfDots - 1) {
    positionSlide = 0;
    positionDot = 0;
  } else {
    positionSlide++;
    positionDot++;
  }

  slides[positionSlide].classList.add('_show-slide');
  dots[positionDot].classList.add('_active-dots');
}

const moveToPrevSlide = (e) => {
  hideAllSlides();
  hideAllDots();

  if (positionSlide === 0 && positionDot === 0) {
    positionSlide = numberOfSlides - 1;
    positionDot = numberOfDots - 1;
  } else {
    positionSlide--;
    positionDot--;
  }

  slides[positionSlide].classList.add('_show-slide');
  dots[positionDot].classList.add('_active-dots');
}

btnRight.addEventListener('click', moveToNextSlide);
btnLeft.addEventListener('click', moveToPrevSlide);

sliderWrapper.addEventListener('touchend', (e) => {
  if (e.changedTouches[0].clientX < 300) {
    // console.log('Right!');
    moveToNextSlide();
  } else if (e.changedTouches[0].clientX > 300) {
    // console.log('Left!')
    moveToPrevSlide();
  }
})