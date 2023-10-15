console.log("campo minato")

const startBtnElement = document.getElementById('start-btn')
console.log(startBtnElement)

const gridDOMElement = document.querySelector('.grid')
console.log(gridDOMElement)



startBtnElement.addEventListener ('click', function (){
    gridDOMElement.innerHTML = ''

    for (let i = 0; i < 100; i++) {
        const number = i + 1
        
        const gridCell = `<div class="grid__cell">${number}</div>`
    
        gridDOMElement.innerHTML += gridCell
    }

})