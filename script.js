let first = '';
let second;
let operator;
let result = 0;

const add = function () {
    return first + second;
}

const subtract = function () {
    return first - second;
}

const multiply = function () {
    return first * second;
}

const divide = function () {
    return first / second;
}

const handleOperation = function () {
    console.log(`First: ${first} Second: ${second} Operator: ${operator} Result: ${result}`)
    first = parseInt(first);
    second = parseInt(second);
    if (operator === "+") {
        result = add();
    } else if (operator === "-") {
        result = subtract();
    } else if (operator === "x") {
        result = multiply();
    } else if (operator === "÷") {
        second !== 0 ? result = divide() : alert('noope');
    }
}

const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        let isNumber = new RegExp('^[0-9]$').test(button.innerText);
        let isOperator = /^[+\-÷x]$/.test(button.innerText);

        if (isNumber) {
            let num = button.innerText;
            if (first === '') {
                first += num;
                display.innerText = first;
            }
            else if (second === undefined) {
                first += num;
                display.innerText = first;
            } else {
                second += num;
                display.innerText = second;
            }
        }

        if (isOperator) {
            // if there's a first and second, do the operation
            // update the first to the result
            if (first && second) {
                handleOperation();
                first = result;
                display.innerText = result;
            }
            operator = button.innerText;
            if (first !== '') {
                second = ''
                second += second;
            }
            if (first && second) {
                // updateDisplay();
                handleOperation();
                first = result;
                console.log(`First: ${first} Second: ${second} Operator: ${operator}`)
            }
        }

        if (button.innerText === "C") {
            result = 0;
            first = '';
            second = undefined;
            updateDisplay();
        }

        if (button.innerText == "=") {
            handleOperation();
            updateDisplay();
        }

    })
});

const updateDisplay = function () {
    display.innerText = result;
}