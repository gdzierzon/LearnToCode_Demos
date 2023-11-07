
let scores = [98, 92, 100, 95, 89, 100, 90];


function addNumber(number, runningTotal) {
    return number + runningTotal;
}

// reduce takes 2 input parameters
// 1 is the function that aggregates the current value to the runningTotal
// 2 (optional) - the inital value of the running total
let sum = scores.reduce(addNumber, 0)


// let runningTotal = 0;
// for(let score of scores) {
//     runningTotal =  runningTotal + score
// }

// let sum = runningTotal;

console.log(sum);





