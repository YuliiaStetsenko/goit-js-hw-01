function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bcgColorEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');


bcgColorEl.addEventListener('click', onBcgColorEl);

function onBcgColorEl() {
  document.body.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = getRandomHexColor();
}