const processList = document.querySelector('.process-list');
const listElements = processList.querySelectorAll('.process-list__item');

const changeClass = (el) => {
  if (el.classList.contains('process-list__item--opened')) {
    el.classList.remove('process-list__item--opened');
    el.querySelector('.process-list__button').classList.remove(
      '.process-list__button--opened'
    );
  } else {
    el.classList.add('process-list__item--opened');
    el.querySelector('.process-list__button').classList.add(
      '.process-list__button--opened'
    );
  }
};

processList.onclick = (event) => {
  let target = event.target;

  if (target.tagName !== 'BUTTON') {
    return;
  } else {
    changeClass(target.parentNode.parentElement);
  }
};
