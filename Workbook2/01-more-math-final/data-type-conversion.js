let firstName = "Jared";
console.log(typeof firstName);

let age = 23;
console.log(typeof age);

let priceOfApples = 10;
let priceOfOranges = "15.25";
console.log("type of priceOfApples: " + typeof priceOfApples);
console.log("type of priceOfOranges: " + typeof priceOfOranges);

// let totalPrice = priceOfApples + parseInt(priceOfOranges);
// let totalPrice = priceOfApples + parseFloat(priceOfOranges);

let totalPrice = priceOfApples + (+priceOfOranges);
console.log("type of totalPrice: " + typeof totalPrice);

console.log("Total Price: " + totalPrice);

console.log();
console.log();

// unary operators
// - negates the numeric value
priceOfApples = -priceOfApples;
// + performs either a parseInt or parseFloat on a string
console.log("type of priceOfOranges: " + typeof priceOfOranges);
priceOfOranges = +priceOfOranges
console.log("type of priceOfOranges: " + typeof priceOfOranges);




