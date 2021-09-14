const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
const defaultValue = outputEl.textContent;
inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
  if (inputEl.value === '') {return outputEl.textContent = defaultValue}
  outputEl.textContent = event.currentTarget.value;
}