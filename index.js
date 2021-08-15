const numberButtons = document.querySelectorAll('.number-button')
const operatorButtons = document.querySelectorAll('.operator-buttons:not(.equal)')
const totalAmount = document.querySelector('.total-amount')
const divideButton = document.querySelector('.divide')
const multiplyButton = document.querySelector('.multiply')
const subtractButton = document.querySelector('.subtract')
const addButton = document.querySelector('.add')
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear')

let current = 0;
let stored = 0;
let operation = '';

function multiply(){
    totalAmount.value = current * globalTotal
    console.log(totalAmount.value)
}

function divide(input, globalTotal){
    console.log('hello')
}

function solve(input, globalTotal){
    console.log('hello')
}

function subtract(input, globalTotal){
    console.log('hello')
}

function add(stored){
    globalTotal = totalAmount.value;

}

function equal(input, globalTotal){
    console.log('hello')
}

console.log(totalAmount)

numberButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        current = Number(e.target.textContent)
        totalAmount.value += Number(e.target.textContent)
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
        console.log('click')
        operation = e.target.textContent
        stored = totalAmount.value;
        totalAmount.value = '';
    })
})

equalButton.addEventListener('click', function(){
    console.log(operation)
    switch (operation) {
        case '+':
            totalAmount.value = Number(totalAmount.value) + Number(stored);
            break;
        case '-':
            totalAmount.value = Number(stored) - Number(totalAmount.value)  ;
            console.log('-')
            break;
        case 'X':
            console.log('multiply')
            totalAmount.value = Number(stored) * Number(totalAmount.value);
            break;
        case '%':
            totalAmount.value = Number(stored) / Number(totalAmount.value)
            break;
        case 'Clear':
            totalAmount.value = ''
            stored = ''
            break;
        default:
            console.log('default')
            break;
    }
    console.log(`${stored}, ${operation}, ${totalAmount.value}`)
})
