console.log("campo minato")

const gridDOMElement = document.querySelector('.grid')
console.log(gridDOMElement)

for (let i = 0; i < 100; i++) {
    const number = i + 1
    
    const gridCell = `<div class="grid__cell">${number}</div>`
    
    gridDOMElement.innerHTML += gridCell
}