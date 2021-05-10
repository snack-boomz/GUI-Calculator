
const calculatorContainer = document.getElementById('calculator-container');

const calculatorDisplay = document.getElementById('calculator-display');

const calculatorDisplayContent = document.createElement('p');
calculatorDisplayContent.classList.add('calculator-display-content');

/* SOLUTION NUMBERS */
let firstNumber = null;
let secondNumber = null;
let operator = null;

/* CALCULATOR BUTTONS */
const btnSeven = document.getElementById('button-seven');
const btnEight = document.getElementById('button-eight');
const btnNine = document.getElementById('button-nine');
const btnDivide = document.getElementById('button-divide');
const btnFour = document.getElementById('button-four');
const btnFive = document.getElementById('button-five');
const btnSix = document.getElementById('button-six');
const btnMultiply = document.getElementById('button-multiply');
const btnOne = document.getElementById('button-one');
const btnTwo = document.getElementById('button-two');
const btnThree = document.getElementById('button-three');
const btnSubtract = document.getElementById('button-subtract');
const btnZero = document.getElementById('button-zero');
const btnDecimal = document.getElementById('button-decimal');
const btnEqual = document.getElementById('button-equal');
const btnAdd = document.getElementById('button-add');
const btnClear = document.getElementById('button-clear');

btnSeven.addEventListener('click', () => {
    console.log(firstNumber, secondNumber, operator);
    if (firstNumber) {
            calculatorDisplayContent.textContent += '7';
            calculatorDisplay.appendChild(calculatorDisplayContent);
            phaseInAllExpressions();
    } else {
        calculatorDisplayContent.textContent += '7';
        calculatorDisplay.appendChild(calculatorDisplayContent);
        phaseInAllExpressions();
    }

});

btnEight.addEventListener('click', () => {
    if (firstNumber) {
            calculatorDisplayContent.textContent += '8';
            calculatorDisplay.appendChild(calculatorDisplayContent);
            phaseInAllExpressions();
    } else {
        calculatorDisplayContent.textContent += '8';
        calculatorDisplay.appendChild(calculatorDisplayContent);
        phaseInAllExpressions();
    }
});

btnNine.addEventListener('click', () => {
    if (firstNumber) {
            calculatorDisplayContent.textContent += '9';
            calculatorDisplay.appendChild(calculatorDisplayContent);
            phaseInAllExpressions();
    } else {
        calculatorDisplayContent.textContent += '9';
        calculatorDisplay.appendChild(calculatorDisplayContent);
        phaseInAllExpressions();
    }

});

btnDivide.addEventListener('click', () => {
    if (!firstNumber) {
        firstNumber = parseInt(calculatorDisplayContent.textContent);
        console.log(firstNumber);
    } else if (!secondNumber) {
        secondNumber = parseInt(calculatorDisplayContent.textContent);
    }


});

btnFour.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '4';
    calculatorDisplay.appendChild(calculatorDisplayContent);

});

btnFive.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '5';
    calculatorDisplay.appendChild(calculatorDisplayContent);

});

btnSix.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '6';
    calculatorDisplay.appendChild(calculatorDisplayContent);

});

btnMultiply.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '×';
    calculatorDisplay.appendChild(calculatorDisplayContent);

});

btnOne.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '1';
    calculatorDisplay.appendChild(calculatorDisplayContent);

});

btnTwo.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '2';
    calculatorDisplay.appendChild(calculatorDisplayContent);

});

btnThree.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '3';
    calculatorDisplay.appendChild(calculatorDisplayContent);

});

btnSubtract.addEventListener('click', () => {
    console.log(`
    First Number: ${firstNumber}
    Second Number: ${secondNumber}
    Operator: ${operator}`)
    if (!firstNumber) {
        firstNumber = parseFloat(calculatorDisplayContent.textContent);
        console.log(firstNumber);
        calculatorDisplayContent.textContent = '';
    }
    console.log(`
    First Number: ${firstNumber}
    Second Number: ${secondNumber}
    Operator: ${operator}`)

    // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
    if (operator) {

        console.log(`Operator length: ${operator.length}`)

            console.log("Operator has already been entered, evaluating")
            // if an operator has already been entered, don't allow two operators to be entered consecutively checking length

            secondNumber = parseFloat(calculatorDisplayContent.textContent);
            solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            calculatorDisplayContent.textContent = '';
            calculatorDisplayContent.textContent = `${solution}`;

            firstNumber = null;
            secondNumber = null;
            // the current solution inside the calculator display will now be the first Number
            firstNumber = solution;
            phaseOutAllExpressions();
    }
  
    operator = "-"
    phaseOutAllExpressions();
    
});

btnZero.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '0';
    calculatorDisplay.appendChild(calculatorDisplayContent);

});

btnDecimal.addEventListener('click', () => {


    calculatorDisplayContent.textContent += '.';
    calculatorDisplay.appendChild(calculatorDisplayContent);

    if (calculatorDisplayContent.textContent.includes(".")) {
        phaseOut(btnDecimal);
        btnDecimal.classList.add("cover");
        btnDecimal.classList.add("phase-out");
    }

});

btnEqual.addEventListener('click', () => {
    secondNumber = parseFloat(calculatorDisplayContent.textContent);
    console.log(firstNumber, secondNumber, operator);
    solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    calculatorDisplayContent.textContent = '';
    calculatorDisplayContent.textContent = `${solution}`;

    // reset the first and second numbers to blank
    firstNumber = null;
    secondNumber = null;

    // reset the operator to blank
    operator = null;

    // the current solution inside the calculator display will now be the first Number
    firstNumber = solution;
});

btnAdd.addEventListener('click', () => {
    console.log(`
    First Number: ${firstNumber}
    Second Number: ${secondNumber}
    Operator: ${operator}`)
    if (!firstNumber) {
        firstNumber = parseFloat(calculatorDisplayContent.textContent);
        console.log(firstNumber);
    }
    /*} else if (!secondNumber) {
        secondNumber = parseFloat(calculatorDisplayContent.textContent);
        console.log(secondNumber);
    }*/

    console.log(`
    First Number: ${firstNumber}
    Second Number: ${secondNumber}
    Operator: ${operator}`)
    // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
    if (operator) {
        secondNumber = parseFloat(calculatorDisplayContent.textContent);
        solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        calculatorDisplayContent.textContent = '';
        calculatorDisplayContent.textContent = `${solution}`;

        firstNumber = null;
        secondNumber = null;

        // the current solution inside the calculator display will now be the first Number
        firstNumber = solution;
    }
     
    operator = "+"
});

btnClear.addEventListener('click', () => {
    firstNumber = null;
    secondNumber = null;
    solution = null;
    operator = null;
    console.log(`CLEAR VARIABLES:
                First Number: ${firstNumber}
                Second Number: ${secondNumber}
                Solution: ${solution}
                Operator: ${operator}`)
    calculatorDisplayContent.textContent = '';
    phaseInAllExpressions();
    phaseIn(btnDecimal);
});

/* MATH FUNCTIONS */
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

function operate(operator, num1, num2) {
    if (operator == "+") {
        console.log(`Adding ${num1} + ${num2}`)
        return Number(add(num1, num2)).toFixed(3);
    } else if (operator == "-") {
        console.log(`Subtracting ${num1} - ${num2}`)
        return Number(subtract(num1, num2)).toFixed(3);
    } else if (operator == "×") {
        console.log(`Multiplying ${num1} × ${num2}`)
        return multiply(num1, num2);
    } else if (operator == "÷") {
        console.log(`Dividing ${num1} ÷ ${num2}`)
        return divide(num1, num2);
    }
}

function phaseOut(btn) {
    btn.classList.add('cover');
    btn.classList.add('phase-out');
}

function phaseIn(btn) {
    btn.classList.remove('cover');
    btn.classList.remove('phase-out');
}

function phaseOutAllExpressions() {
    btns = document.querySelectorAll('.calculator-button-expression');
    for (btn of btns) {
        btn.classList.add('cover');
        btn.classList.add('phase-out');
    }
}

function phaseInAllExpressions() {
    btns = document.querySelectorAll('.calculator-button-expression');
    for (btn of btns) {
        btn.classList.remove('cover');
        btn.classList.remove('phase-out');
    }
}

