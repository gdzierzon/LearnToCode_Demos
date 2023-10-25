
// functions CAN return a value
function multiply(number1 = 1, number2 = 1) {
    return number1 * number2;
}

// OR functions can DO some work WITHOUT returning a value
function displayOutput(answer) {
    console.log(answer);
}

answer = multiply(15, 1.5);
displayOutput(answer)
