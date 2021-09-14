const categoriesEl = document.querySelector('#categories').children
console.log(`В списке ${categoriesEl.length} категории.`)

for (let item of categoriesEl) {
  console.log(`Категория: ${item.firstElementChild.textContent}`)
  console.log(`Количество элементов: ${item.querySelector('ul').children.length}`)
}