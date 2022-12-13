// Basic Functions
function add(num1, num2) {
    return num1 + num2;    
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function power(num1, num2) {
    return Math.pow(num1, num2);
}

function root(num1) {
    return Math.sqrt(num1)
}

function operate(operator, num1, num2){
    if (operator === "+") return add(Number(num1), Number(num2))
    if (operator === "-") return subtract(Number(num1), Number(num2))
    if (operator === "*") return multiply(Number(num1), Number(num2))
    if (operator === "/") return divide(Number(num1), Number(num2))
    if (operator === "^") return power(Number(num1), Number(num2))
}

//Setting up variables and event handling functions
const displayValue = document.querySelector('#display');
let value = "";
let operator = "";
let nextValue = "";

//Push numbers to display
const numPad = document.querySelectorAll('.num');
numPad.forEach((div) => {
    div.addEventListener('click',function(e) {
       if(!operator) {
        value = value + `${e.target.innerText}`;
        displayValue.textContent = value;
       } else {
        nextValue = nextValue + `${e.target.innerText}`;
        displayValue.textContent = nextValue;
       }
    })
})

//Operating functions
const operators = document.querySelectorAll('.operator');
operators.forEach((div) => {
    div.addEventListener('click', function(e) {
    if( `${e.target.innerText}` === "AC"){
        value = "";
        displayValue.textContent = value;
        nextValue = "";
        operator = "";
    } else if(`${e.target.innerText}` === "√") {
        value = root(value);
        displayValue.textContent = value;
        nextValue = "";
        operator = "";
    } else if(`${e.target.innerText}` === "=") {
        value = operate(operator, value, nextValue);
        if(value === undefined) value = "0";
        displayValue.textContent = value;
        nextValue = "";
        operator = "";
    } else if(nextValue){
        value = operate(operator, value, nextValue);
        displayValue.textContent = value;
        nextValue = "";
        operator = `${e.target.innerText}`;
    }  else{
        operator = `${e.target.innerText}`;
    }
})
})
