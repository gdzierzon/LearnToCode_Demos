
// other operators
// +=
let counter = 1;
console.log("counter: " + counter);
counter = counter + 1;
console.log("counter: " + counter);
counter += 1;
console.log("counter: " + counter);
// post-increment operator ++ prints first - and then increments
console.log("counter: " + counter++);
// pre-increment operator ++ increments FIRST - and then prints
console.log("counter: " + ++counter);

// subtraction
// -=, --
let sum = 20;
sum -= 5; // sum = sum - 5
console.log(sum);

// multiplication
// *=
let age = 20;
age *= 2; // age becomes... 40 -->  age = age * 2
console.log("age after *=: " + age);

// division
// /=
age /= 4; // age = age / 4 --> 10
console.log("age after /=: " + age);

// modulus -> %
//
let remainder = 12 % 5;
console.log(remainder);

let cents = 95;
// calculate number of quarter
let numberOfQuaters = Math.trunc(cents / 25);
console.log(numberOfQuaters);
cents %= 25; // get the remainder of cents / 25
console.log(cents)

