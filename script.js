function add(number, number2) {
    return number + number2;
}

function subtract(number, number2) {
    return number - number2;
}

function multiply(number, number2) {
    return number * number2;
}

function divide(number, number2) {
    return number / number2;
}

let firstNumber = 0
let secondNumber = 0
let operatorSign = ''

function operate(number, operatorSign, number2) {

}

const container = document.getElementById('container');

container.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (isButton) {
        console.log(event.target.textContent);
    }
})
