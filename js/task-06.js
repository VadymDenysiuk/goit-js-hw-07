const inputEl = document.querySelector('#validation-input')
inputEl.addEventListener('input', validationOfInput);
function validationOfInput() {
let classInvalid = (inputEl.value.length != inputEl.dataset.length) ? inputEl.classList.add('invalid') : inputEl.classList.remove('invalid') 
let classValid = (inputEl.value.length != inputEl.dataset.length) ? inputEl.classList.remove('valid') : inputEl.classList.add('valid') 
}