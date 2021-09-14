const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector('#ingredients')
let itemEl;

ingredients.forEach(ingradient => {
  itemEl = document.createElement('li');
  itemEl.textContent = ingradient;
  ingredientsEl.appendChild(itemEl)
})