// Selecting DOM elements
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');

let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetDisplay = false;

// Update display
function updateDisplay() {
  display.textContent = firstOperand + (currentOperator ?? '') + secondOperand;
}

// Handle number button clicks
numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (shouldResetDisplay) {
      firstOperand = '';
      secondOperand = '';
      shouldResetDisplay = false;
    }

    if (!currentOperator) {
      firstOperand += number.textContent;
    } else {
      secondOperand += number.textContent;
    }
    updateDisplay();
  });
});

// Handle operator button clicks
operators.forEach(operator => {
  operator.addEventListener('click', () => {
    if (firstOperand && !secondOperand) {
      currentOperator = operator.textContent;
      updateDisplay();
    }
  });
});

// Handle equals button click
equalsButton.addEventListener('click', () => {
  if (firstOperand && secondOperand && currentOperator) {
    const result = operate(currentOperator, parseFloat(firstOperand), parseFloat(secondOperand));
    display.textContent = result;
    firstOperand = result.toString();
    secondOperand = '';
    currentOperator = null;
    shouldResetDisplay = true;
  }
});

// Handle clear button click
clearButton.addEventListener('click', () => {
  display.textContent = '0';
  firstOperand = '';
  secondOperand = '';
  currentOperator = null;
  shouldResetDisplay = false;
});

// Basic calculator operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Error: Cannot divide by zero';
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Invalid operator';
  }
}


















