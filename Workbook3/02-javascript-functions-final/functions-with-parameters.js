
// application start
function main() {

    const number1 = 5;
    const number2 = 6;

    const answer = add(number1, number2);
    
    // string interpolation
    const message = `${number1} + ${number2} = ${answer}`;
    console.log(message);

    console.log(add(4,12));
    console.log(add(14,12));
    console.log(add(21,1));

}

function add(first, second) {

    return first + second;
}

main();
