let counterValue = 0;
const increaseBtnEl = document.querySelector('[data-action="increment"]');
const decreaseBtnEl = document.querySelector('[data-action="decrement"]');

const increment = () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
  
}
const decrement = () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
}

increaseBtnEl.addEventListener('click', increment)
decreaseBtnEl.addEventListener('click', decrement)
