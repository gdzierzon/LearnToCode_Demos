window.onload = init;

function init()
{
    document.getElementById("buttonAdd").onclick = add;
}

function add()
{
    // 1. get the user input numbers
    // number1Field, number2Field
    // get the values from the fields and convert to numberic
    const number1 = Number(document.getElementById("number1Field").value);
    const number2 = Number(document.getElementById("number2Field").value);

    // 2. perform calculation
    const answer = number1 + number2;
    console.log(answer);

    // 3. set the output
    // display the results
    document.getElementById("answerField").value = answer

}

function subtract()
{

}

function multiply()
{

}

function divide()
{

}