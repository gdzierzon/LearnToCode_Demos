
let scores = [98, 92, 100, 95, 89, 100, 90];


// function addNumber(number, runningTotal) {
//     return number + runningTotal;
// }


// let sum = scores.reduce(addNumber, 0)

let sum = scores.reduce((number, runningTotal) => number + runningTotal, 0)



console.log(sum);





