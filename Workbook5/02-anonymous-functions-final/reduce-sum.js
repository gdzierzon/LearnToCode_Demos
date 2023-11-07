
let scores = [98, 92, 100, 95, 89, 100, 90];


// function addNumber(runningTotal, number) {
//     return number + runningTotal;
// }


// let sum = scores.reduce(addNumber, 0)

let sum = scores.reduce((runningTotal, number) => number + runningTotal, 0)


console.log(sum);





