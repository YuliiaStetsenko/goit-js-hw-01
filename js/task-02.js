const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

listEl.innerHTML = list;

console.log(listEl);
