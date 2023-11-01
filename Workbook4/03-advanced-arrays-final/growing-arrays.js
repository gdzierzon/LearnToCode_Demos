let kids = ["Natalie", "Brittany", "Zachary"];
console.table(kids)
// console.log(kids[8])
// kids[8] = "Brandon"


// kids.push("Brandon") // add to the END of the array
kids.unshift("Brandon") // add to the BEGINNING of the array
console.log(kids)
console.table(kids)

// let name = kids.pop() // removes an element from the END of an array
let name = kids.shift() //remove an element from the FRONT  of an array

console.log(name);
console.table(kids);
