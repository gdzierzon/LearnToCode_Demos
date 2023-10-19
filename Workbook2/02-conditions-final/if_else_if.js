// constants
const sunday = 0;
const monday = 1;
const tuesday = 2;
const wednesday = 3;
const thursday = 4;
const friday = 5;
const saturday = 6;

// variables
let cashOnHand = -10;
let dayOfWeek = 4;
let whereToEat = "";

if( dayOfWeek == tuesday && cashOnHand > 25) {
    whereToEat = "Costa Vida";
}
else if(dayOfWeek == wednesday && cashOnHand >= 20) {
    whereToEat = "Papa John's Pizza";
} 
else if(dayOfWeek == thursday || cashOnHand >= 15) {
    whereToEat = "Pho";
} 
else {
    whereToEat = "Home";
}   


console.log("You will eat at " + whereToEat);

