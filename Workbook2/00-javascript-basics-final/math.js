"use strict"

const donutCost = .99;
const donutQuantity = 6;

let donutTotal = donutCost * donutQuantity;
console.log(donutTotal);

// 5.9399999999999995
donutTotal = donutTotal * 100.0;
// console.log(donutTotal);
donutTotal = Math.round(donutTotal);
// console.log(donutTotal);
donutTotal = donutTotal / 100
// console.log(donutTotal);

let total = 5.91868754651
total = total.toFixed(2)
console.log(total)

// console.log("Round: " + Math.round(donutTotal));
// console.log("Floor: " + Math.floor(donutTotal));
// console.log("Ceiling: " + Math.ceil(donutTotal));

// console.log(donutTotal);


// area of a circle is pi * r * r
let r = 5
let area = Math.PI * Math.pow(r,2)