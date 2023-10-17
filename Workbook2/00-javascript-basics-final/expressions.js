"use strict"

/*
arithmetic 

    + - addtion
    - - subtraction
    / - division
    * - multiplication
    % - modulus = remainder division 5 % 2 -> R 1

*/

const answer = 18 + 91 + 3 - 14 - 20 + 31;
//              109 + 3 - 14 - 20 + 31;
//              112 - 14 - 20 + 31;
//              98 - 20 + 31;
//              78 + 31;
//    answer = 109

/*
doughnuts .99 I want 6
chocolate 2.50 I want 3
soutpatch kids 3.99 I want 1

What is the total cost?

P - Parenthesis
E - Exponents
M - Multiplication
D - Division
A - Addition
S - Subrtraction
*/

const donutCost = .99;
const chocolateCost = 2.50;
const sourPatchCost = 3.99;

const donutQuantity = 6;
const chocolateQuantity = 3;
const sourPatchQuantity = 1;

const totalDonut = donutCost * donutQuantity;
const totalChocolate = chocolateCost * chocolateQuantity;
const totalSourPatch = sourPatchCost * sourPatchQuantity;

const totalCost = totalDonut + totalChocolate + totalSourPatch;

console.log("Total Donut Cost:      $" + totalDonut.toFixed(2) );
console.log("Total Chocolate Cost:  $" + totalChocolate.toFixed(2));
console.log("Total Sour Patch Cost: $" + totalSourPatch.toFixed(2));
console.log("---------------------------------------");
console.log("Total                  $" + totalCost.toFixed(2));


console.log();
console.log("NaN");

let orangePrice = .75;
let orangeQuantity = "five";

let totalOrange = orangePrice * orangeQuantity;

console.log("Price of Oranges: $" + orangePrice);
console.log("Quantity:          " + orangeQuantity);
console.log("Total Cost:       $" + totalOrange)
