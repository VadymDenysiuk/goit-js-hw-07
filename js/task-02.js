const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector('#ingredients')

const elements = ingredients.map(ingradient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingradient;
  return itemEl;
})
ingredientsEl.append(...elements)