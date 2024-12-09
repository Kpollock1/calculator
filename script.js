function add(number, number2) {
    return Number(number) + Number(number2);
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

let firstNumberArr = []
let secondNumberArr = []
let operatorSign = ''
let state = 'left'
let firstNumberJoined = firstNumberArr.join('')
let secondNumberJoined = secondNumberArr.join('')

function operate(number, number2) {
    if (operatorSign === "+") {
        return add(number, number2);
    } else if (operatorSign === "-") {
        return subtract(number, number2);
    } else if (operatorSign === "*") {
        return multiply(number, number2);
    } else if (operatorSign === "/") {
        return divide(number, number2);
    }
}
const display = document.getElementById('displayScreen')
const container = document.getElementById('container');

container.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    // add number to array firstNumberArr
    if (state === 'left' && isButton && !isNaN(Number(event.target.textContent))) {
        firstNumberArr.push(event.target.textContent);
        display.textContent = firstNumberArr.join('');
    }

    if (state === 'right' && isButton && !isNaN(Number(event.target.textContent))) {
        secondNumberArr.push(event.target.textContent);
        display.textContent = secondNumberArr.join('');
    }

    // flip state to 'right'
    if (isButton && (event.target.textContent === '+'
        || event.target.textContent === '-'
        || event.target.textContent === '*'
        || event.target.textContent === '/')) {
        operatorSign = event.target.textContent;
        display.textContent = event.target.textContent;
        state = 'right';
    }
    // clear screen
    if (isButton && event.target.textContent === 'AC') {
        firstNumberArr = []
        secondNumberArr = []
        operatorSign = ''
        display.textContent = '';
        state = 'left';
    }

    if (isButton && event.target.textContent === '=') {
        display.textContent = operate(firstNumberArr.join(''), secondNumberArr.join(''), '-');
    }


})
