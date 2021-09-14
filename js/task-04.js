let counterValue = 0;
const increaseBtnEl = document.querySelector('[data-action="increment"]');
const decreaseBtnEl = document.querySelector('[data-action="decrement"]');

const increment = () => {
  document.querySelector("#value").textContent = counterValue;
  counterValue += 1;
}
const decrement = () => {
  document.querySelector("#value").textContent = counterValue;
  counterValue -= 1;
}

increaseBtnEl.addEventListener('click', increment)
decreaseBtnEl.addEventListener('click', decrement)