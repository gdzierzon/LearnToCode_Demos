
let a = ' '
let b = 'D'

let aa = a.toUpperCase();
let bb = b.toUpperCase();

let isAUpper = a === aa;
let isBUpper = b === bb;

console.log(isAUpper == isBUpper);

if(a.match(/[a-z]/i)){
    console.log("a is a letter");
}else {
    console.log("a is NOT a letter");
}
