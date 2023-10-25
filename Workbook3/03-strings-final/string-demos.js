/*
Samuel Joseph Anderson
Emily Grace Mitchell
Benjamin Daniel Sanchez
Sophia Marie Turner
Ethan William Parker
*/

let fullName = "     Samuel Joseph Anderson      ";

console.log(fullName);
console.log(fullName.length);

fullName = fullName.trim();
console.log(fullName);
console.log(fullName.length);
console.log(fullName.toLowerCase());

// indexOf = searches for a string 
console.log(fullName.indexOf(" "));
let end = fullName.indexOf(" ");

// end = 6
// |Samuel| Joseph Anderson
let firstName = fullName.substring(0, end);
console.log(`Welcome ${firstName}`)

// end = 6
// Samuel |Joseph| Anderson
let end2 = fullName.lastIndexOf(" ");
let middleName = fullName.substring(end + 1, end2);
console.log(middleName);

// Samuel Joseph |Anderson
let lastName = fullName.substring(end2 + 1)
console.log(lastName)


