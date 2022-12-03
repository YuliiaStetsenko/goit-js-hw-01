function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector('[type="number"]');

function createBoxes() {
  boxes.innerHTML = "";

  const num = input.value;
  const items = [];

  for (let i = 1; i <= num; i += 1) {
    const createDiv = document.createElement("div");

    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.width = i * 10 + 20 + "px";
    createDiv.style.height = i * 10 + 20 + "px";

    items.push(createDiv);
  }

  boxes.append(...items);
}

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);