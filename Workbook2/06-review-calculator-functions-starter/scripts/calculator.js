window.onload = init;

function init()
{
    document.getElementById("buttonAdd").onclick = add;
    document.getElementById("buttonSubtract").onclick = subtract;
    document.getElementById("buttonMultiply").onclick = multiply;
    document.getElementById("buttonDivide").onclick = divide;
}

// DRY
// DON'T
// REPEAT 
// YOURSELF

function calculate(operation)
{

    // 1. get the user input numbers
    const number1 = Number(document.getElementById("number1Field").value);
    const number2 = Number(document.getElementById("number2Field").value);
    let answer = 0;

    // 2. perform calculation
    switch(operation)
    {
        case "+":
            answer = number1 + number2;
            break;
        case "-":
            answer = number1 - number2;
            break;
        case "*":
            answer = number1 * number2;
            break;
        case "/":
            answer = number1 / number2;
            break;
    }

    // 3. display the results
    document.getElementById("answerField").value = answer

}

function add()
{
    calculate("+");
}

function subtract()
{
    calculate("-");
}

function multiply()
{
    calculate("*");
}

function divide()
{
    calculate("/");
}