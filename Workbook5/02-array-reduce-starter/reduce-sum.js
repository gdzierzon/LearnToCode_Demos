
let scores = [98, 92, 100, 95, 89, 100, 90];


function addNumber(number, runningTotal) {
    return number + runningTotal;
}


let runningTotal = 0;
for(let score of scores) {
    runningTotal =  runningTotal + score
}

let sum = runningTotal;

console.log(sum);





