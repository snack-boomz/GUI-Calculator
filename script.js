
const calculatorContainer = document.getElementById('calculator-container');

const calculatorDisplay = document.getElementById('calculator-display');

const calculatorDisplayContent = document.createElement('p');
calculatorDisplayContent.classList.add('calculator-display-content');

/* SOLUTION NUMBERS */
let firstNumber = null;
let secondNumber = null;
let operator = null;


/* SET EXPRESSIONS TO BE INITIALLY PHASED OUT */
phaseOutAllExpressions();


/* KEEP EQUALS PHASED OUT UNTIL EXPRESSION IS AVAILABLE */

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
    checkIfEvaluationIsSolvable();

    calculatorDisplayContent.textContent += '7';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseInAllExpressions();


});

btnEight.addEventListener('click', () => {
    checkIfEvaluationIsSolvable();
    console.log(firstNumber, secondNumber, operator);

    calculatorDisplayContent.textContent += '8';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseInAllExpressions();
    
});

btnNine.addEventListener('click', () => {
    console.log(firstNumber, secondNumber, operator);

    calculatorDisplayContent.textContent += '9';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseInAllExpressions();
    
});

btnDivide.addEventListener('click', () => {
    console.log(`
    First Number: ${firstNumber}
    Second Number: ${secondNumber}
    Operator: ${operator}`)
    firstNumber = parseFloat(calculatorDisplayContent.textContent);
    // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
    if (operator) {
            // if an operator has already been entered, don't allow two operators to be entered consecutively checking length
            console.log("Operator has already been entered, evaluating")
            
            
            secondNumber = grabSecondNumberFromDisplay();
            solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            calculatorDisplayContent.textContent = '';
            calculatorDisplayContent.textContent = `${solution}`;

            firstNumber = null;
            secondNumber = null;
            // the current solution inside the calculator display will now be the first Number
            firstNumber = solution;
            phaseOutAllExpressions();
            console.log("Please enter a second number: ");
    }
  
    operator = "÷"
    calculatorDisplayContent.textContent += '÷';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseOutAllExpressions();
    phaseIn(btnDecimal);
});

btnFour.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '4';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseInAllExpressions();

});

btnFive.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '5';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseInAllExpressions();

});

btnSix.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '6';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseInAllExpressions();

});

btnMultiply.addEventListener('click', () => {
    console.log(`
    First Number: ${firstNumber}
    Second Number: ${secondNumber}
    Operator: ${operator}`)
    firstNumber = parseFloat(calculatorDisplayContent.textContent);
    // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
    if (operator) {
            // if an operator has already been entered, don't allow two operators to be entered consecutively checking length
            console.log("Operator has already been entered, evaluating")
            
            
            secondNumber = grabSecondNumberFromDisplay();
            solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            calculatorDisplayContent.textContent = '';
            calculatorDisplayContent.textContent = `${solution}`;

            firstNumber = null;
            secondNumber = null;
            // the current solution inside the calculator display will now be the first Number
            firstNumber = solution;
            phaseOutAllExpressions();
            console.log("Please enter a second number: ");
    }
  
    operator = "×"
    calculatorDisplayContent.textContent += '×';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseOutAllExpressions();
    phaseIn(btnDecimal);
});

btnOne.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '1';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseInAllExpressions();

});

btnTwo.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '2';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseInAllExpressions();

});

btnThree.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '3';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseInAllExpressions();

});

btnSubtract.addEventListener('click', () => {
    console.log(`
    First Number: ${firstNumber}
    Second Number: ${secondNumber}
    Operator: ${operator}`)
    firstNumber = parseFloat(calculatorDisplayContent.textContent);
    // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
    if (operator) {
            // if an operator has already been entered, don't allow two operators to be entered consecutively checking length
            console.log("Operator has already been entered, evaluating")
            
            
            secondNumber = grabSecondNumberFromDisplay();
            solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            calculatorDisplayContent.textContent = '';
            calculatorDisplayContent.textContent = `${solution}`;

            firstNumber = null;
            secondNumber = null;
            // the current solution inside the calculator display will now be the first Number
            firstNumber = solution;
            phaseOutAllExpressions();
            console.log("Please enter a second number: ");
    }
  
    operator = "-"
    calculatorDisplayContent.textContent += '-';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseOutAllExpressions();
    phaseIn(btnDecimal);
});

btnZero.addEventListener('click', () => {
    calculatorDisplayContent.textContent += '0';
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseInAllExpressions();

});

btnDecimal.addEventListener('click', () => {


    calculatorDisplayContent.textContent += '.';
    calculatorDisplay.appendChild(calculatorDisplayContent);

    if (calculatorDisplayContent.textContent.includes(".")) {
        phaseOut(btnDecimal);
    }

});

btnEqual.addEventListener('click', () => {
    phaseOutAllNumbers();
    // convert string to array, identify operator, and pull secondNumber from slicedArray, like so: tempArray.slice(indexOfOperator + 1)
    tempArray = Array.from(calculatorDisplayContent.textContent);
    console.log(tempArray);
    indexOfOperator = tempArray.lastIndexOf(`${operator}`);
    console.log(indexOfOperator);
    secondNumber = parseFloat(tempArray.slice(indexOfOperator + 1).join(''))
    console.log(secondNumber);
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
    firstNumber = parseFloat(calculatorDisplayContent.textContent);
    // if operator button is pressed again when an operator has already been added, then evaluate first and second numbers
    if (operator) {

            console.log("Operator has already been entered, evaluating")
            // if an operator has already been entered, don't allow two operators to be entered consecutively checking length
            secondNumber = grabSecondNumberFromDisplay();
            console.log(secondNumber);
            solution = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            calculatorDisplayContent.textContent = '';
            calculatorDisplayContent.textContent = `${solution}`;

            firstNumber = null;
            secondNumber = null;
            // the current solution inside the calculator display will now be the first Number
            firstNumber = solution;
            phaseOutAllExpressions();
            console.log("Please enter a second number: ");
    }
  
    operator = "+"
    calculatorDisplayContent.textContent += '+'
    calculatorDisplay.appendChild(calculatorDisplayContent);
    phaseOutAllExpressions();
    phaseIn(btnDecimal);
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
    phaseOutAllExpressions();
    phaseInAllNumbers();
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

function grabSecondNumberFromDisplay() {

    /*
     * convert string to array, identify operator, and pull secondNumber 
     * from slicedArray, like so: tempArray.slice(indexOfOperator + 1)
     *
     * make sure to reference the original operator value with ${operator}, 
     * not what this specific button's operator is (7 + 7 - 3 should equal 11, not 17)
    */
    tempArray = Array.from(calculatorDisplayContent.textContent);
    console.log(tempArray);
    
    indexOfOperator = tempArray.lastIndexOf(`${operator}`);
    console.log(indexOfOperator);
    return secondNumber = parseFloat(tempArray.slice(indexOfOperator + 1).join(''))
    console.log(secondNumber);
}

function checkIfEvaluationIsSolvable() {
    if (Number.isInteger(grabSecondNumberFromDisplay())) {
        console.log(`Second Number is ${grabSecondNumberFromDisplay()}`)
        phaseIn(btnEqual);
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

function phaseOutAllNumbers() {
    btns = document.querySelectorAll('.calculator-button-number');
    for (btn of btns) {
        btn.classList.add('cover');
        btn.classList.add('phase-out');
    }
}

function phaseInAllNumbers() {
    btns = document.querySelectorAll('.calculator-button-number');
    for (btn of btns) {
        btn.classList.remove('cover');
        btn.classList.remove('phase-out');
    }
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

