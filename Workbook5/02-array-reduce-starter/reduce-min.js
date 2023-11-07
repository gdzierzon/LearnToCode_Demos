
let scores = [98, 92, 100, 95, 89, 100, 90];


function minValue(number, min) {
    if(number < min){
        return number;
    }else {
        return min;
    }
}


let currentMin = scores[0];
for(let score of scores) {
    currentMin =  minValue(score, currentMin)
}

let min = currentMin;

console.log(min);





