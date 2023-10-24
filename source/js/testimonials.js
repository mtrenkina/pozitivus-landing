const slider = document.querySelector('.slider-controls');
const buttonPrev = slider.querySelector('.slider-controls__button--prev');
const buttonNext = slider.querySelector('.slider-controls__button--next');

const blockedCheck = (button) => {
  return button.classList.contains('slider-controls__button--blocked');
};

const checkButtonsDisability = () => {
  const list = slider.querySelector('.slick-dots');
  const dots = list.querySelectorAll('li');
  const active = slider.querySelector('li.slick-active');
  let slideNumber = [...dots].indexOf(active);

  switch (slideNumber) {
    case [...dots].length - 1:
      if (blockedCheck(buttonPrev))
      buttonPrev.classList.remove('slider-controls__button--blocked');
      buttonNext.classList.add('slider-controls__button--blocked');
      break;
    case 0:
      if (blockedCheck(buttonNext))
      buttonNext.classList.remove('slider-controls__button--blocked');
      buttonPrev.classList.add('slider-controls__button--blocked');
      break;
    case -1:
      checkButtonsDisability();
      break;
    default:
      if (blockedCheck(buttonPrev))
      buttonPrev.classList.remove('slider-controls__button--blocked');
      if (blockedCheck(buttonNext))
      buttonNext.classList.remove('slider-controls__button--blocked');
      break;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  slider.onclick = (event) => {
    let target = event.target;

    if (target.tagName !== 'BUTTON') {
      return;
    } else {
      checkButtonsDisability();
    }
  };
});
