function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorValSpan = document.querySelector(".color");

btn.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  body.style.color = getRandomHexColor();
  colorValSpan.textContent = getRandomHexColor();
});