let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")
// console.log(sumEl);

// Create four functions: add(), subtract(), divide(), multiply()
function add(){
let addNum = num1 + num2

  sumEl.textContent = "Sum:" + " " + addNum
}

function subtract(){
    let subNum = num1 - num2

  sumEl.textContent = "Sum:" + " " + subNum
}

function divide(){
    let divNum = num1 / num2

  sumEl.textContent = "Sum:" + " " + divNum
}

function multiply(){
    let mulNum = num1 * num2

  sumEl.textContent = "Sum:" + " " + mulNum
}
// Call the correct function when the user clicks on one of the buttons
// add()
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"



