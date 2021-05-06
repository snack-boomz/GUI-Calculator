/*
 *
 * Starting Box Dimensions: 800px, broken down into a 16x16 grid of squares, with a width of 50px, height of 50px
 * 
 */

const playArea = document.getElementById('play-area');

const sketchBox = document.getElementById('sketch-box');

const resetDimensionsBtn = document.getElementById('reset-dimensions');

let sketchBoxElement = document.createElement('div');

// Starting Dimension: 800 / 16 = 50(50px width, 50px height) (This is the height and width of each element inside sketch box)

let sketchBoxElements = [];

// create 256 elements in an array
for (let i = 0; i < 256; i++) {
    sketchBoxElements.push(i);
}
// append those 256 elements into the grid
for (let element of sketchBoxElements) {
    element = document.createElement('div');

    element.classList = 'starting-sketch-box-element';
    sketchBox.appendChild(element);
}

const elements = document.querySelectorAll('.starting-sketch-box-element');

elements.forEach((element) => {

    //add a hover listener to each element that
    element.addEventListener('mouseover', () => {
        element.classList.add("sketch-color");
    });
});

/*
 * 
 *
 * New Box Dimensions: 800px, broken down into user's input of up to 100x100 squares, with a width of
 * 800 / userInput of Squares = width and height
 */
resetDimensionsBtn.addEventListener('click', () => {

    // reset grid colors and elements

    const allElements = document.querySelectorAll('.starting-sketch-box-element');

    allElements.forEach((element) => {
        sketchBox.removeChild(element);
    });

    const allNewElements = document.querySelectorAll('.new-sketch-box-element');

    allNewElements.forEach((element) => {
        sketchBox.removeChild(element);
    });

    let looping = true;
    while (looping) {
        try {
            let userDimensions = parseInt(prompt(`Enter your new Grid dimensions, up to 100x100 (1-100)`));
            
            if (!Number.isInteger(userDimensions) ) {
                throw "Your input needs to be a number."
            
            } else if (userDimensions > 100) {
                throw "Provide a number up to 100.";
            
            } else {

                let totalSquares = userDimensions * userDimensions;
                let squareWidth = 800 / userDimensions;
                let squareHeight = 800 / userDimensions;
            
                let sketchBoxElements = [];
            
                // i is less than the total amount of squares inside the new grid
                for (let i = 0; i < totalSquares; i++) {
                    let string = `sketchBoxElement${i}`;
                    sketchBoxElements.push(string);
                }
            
                for (let element of sketchBoxElements) {
                    element = document.createElement('div');
                    element.style.width = `${squareWidth}`;
                    element.style.height = `${squareHeight}`;
                    element.classList.add('new-sketch-box-element');
                    sketchBox.appendChild(element);
                }
            
                const newElements = document.querySelectorAll('.new-sketch-box-element');
                console.log(newElements)
                newElements.forEach((element) => {
                    let max = 255;
                    let increment = 0;
                    const rgbValue1 = Math.floor(Math.random() * max);
                    const rgbValue2 = Math.floor(Math.random() * max);
                    const rgbValue3 = Math.floor(Math.random() * max);
            
                    element.addEventListener('mouseover', () => {
            
                        // https://stackoverflow.com/questions/35306632/how-to-check-if-a-variable-is-empty-in-javascript
                        if (!element.style.background || !element.style.background.length) {
                            element.style.background = `rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3})`;
                            console.log(element.style.background);
                        } else {
                            // reserved: if else statement is hit, make colors 10% darker each mouseover
                            let tenPercentIncrementValue1 = rgbValue1 / 10;
                            let tenPercentIncrementValue2 = rgbValue2 / 10;
                            let tenPercentIncrementValue3 = rgbValue3 / 10;
            
                            if (increment == 0) {
                                element.style.background = `rgb(${rgbValue1 - tenPercentIncrementValue1}, 
                                                                ${rgbValue2 - tenPercentIncrementValue2}, 
                                                                ${rgbValue3 - tenPercentIncrementValue3})`;
                                console.log(element.style.background);
                            } else if (increment == 1) {
                                element.style.background = `rgb(${rgbValue1 - (tenPercentIncrementValue1 * 2)}, 
                                                                ${rgbValue2 - (tenPercentIncrementValue2 * 2)}, 
                                                                ${rgbValue3 - (tenPercentIncrementValue3 * 2)})`;
                                console.log(element.style.background);
                            } else if (increment == 2) {
                                element.style.background = `rgb(${rgbValue1 - (tenPercentIncrementValue1 * 3)}, 
                                                                ${rgbValue2 - (tenPercentIncrementValue2 * 3)}, 
                                                                ${rgbValue3 - (tenPercentIncrementValue3 * 3)})`;                    
                                console.log(element.style.background);
                            } else if (increment == 3) {
                                element.style.background = `rgb(${rgbValue1 - (tenPercentIncrementValue1 * 4)}, 
                                                                ${rgbValue2 - (tenPercentIncrementValue2 * 4)}, 
                                                                ${rgbValue3 - (tenPercentIncrementValue3 * 4)})`;                    
                                console.log(element.style.background);
                            } else if (increment == 4) {
                                element.style.background = `rgb(${rgbValue1 - (tenPercentIncrementValue1 * 5)}, 
                                                                ${rgbValue2 - (tenPercentIncrementValue2 * 5)}, 
                                                                ${rgbValue3 - (tenPercentIncrementValue3 * 5)})`;                    
                                console.log(element.style.background);
                            } else if (increment == 5) {
                                element.style.background = `rgb(${rgbValue1 - (tenPercentIncrementValue1 * 6)}, 
                                                                ${rgbValue2 - (tenPercentIncrementValue2 * 6)}, 
                                                                ${rgbValue3 - (tenPercentIncrementValue3 * 6)})`;                    
                                console.log(element.style.background);
                            } else if (increment == 6) {
                                element.style.background = `rgb(${rgbValue1 - (tenPercentIncrementValue1 * 7)}, 
                                                                ${rgbValue2 - (tenPercentIncrementValue2 * 7)}, 
                                                                ${rgbValue3 - (tenPercentIncrementValue3 * 7)})`;                    
                                console.log(element.style.background);
                            } else if (increment == 7) {
                                element.style.background = `rgb(${rgbValue1 - (tenPercentIncrementValue1 * 8)}, 
                                                                ${rgbValue2 - (tenPercentIncrementValue2 * 8)}, 
                                                                ${rgbValue3 - (tenPercentIncrementValue3 * 8)})`;                    
                                console.log(element.style.background);
                            } else if (increment == 8) {
                                element.style.background = `rgb(${rgbValue1 - (tenPercentIncrementValue1 * 8)}, 
                                                                ${rgbValue2 - (tenPercentIncrementValue2 * 8)}, 
                                                                ${rgbValue3 - (tenPercentIncrementValue3 * 8)})`;                    
                                console.log(element.style.background);
                            } else if (increment == 9) {
                                element.style.background = `rgb(${rgbValue1 - (tenPercentIncrementValue1 * 9)}, 
                                                                ${rgbValue2 - (tenPercentIncrementValue2 * 9)}, 
                                                                ${rgbValue3 - (tenPercentIncrementValue3 * 9)})`;                    
                                console.log(element.style.background);
                            } else if (increment == 10) {
                                element.style.background = `rgb(${rgbValue1 - (tenPercentIncrementValue1 * 10)}, 
                                                                ${rgbValue2 - (tenPercentIncrementValue2 * 10)}, 
                                                                ${rgbValue3 - (tenPercentIncrementValue3 * 10)})`;                    
                                console.log(element.style.background);
                            }
            
                            increment += 1;
            
                        }
            
                    });
                
                });
                
                looping = false;

            }
        } catch(err) {
            alert(`You've managed to produce an error, great job.\n
                Error: ${err}`);
            
        }
    }
    


});


