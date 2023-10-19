let dayOfWeek = 3;

console.log();
console.log("Using if");

if(dayOfWeek == 0){
    console.log("Sunday");
}
else if(dayOfWeek == 1){
    console.log("Monday");
}
else if(dayOfWeek == 2){
    console.log("Tuesday");
}
else if(dayOfWeek == 3){
    console.log("Wendsday");
}
else if(dayOfWeek == 4){
    console.log("Thursday");
}
else if(dayOfWeek == 5){
    console.log("Friday");
}
else if(dayOfWeek == 6){
    console.log("Saturday");
}
else {
    console.log("Not a REAL day");
}


console.log();
console.log("Using switch");

switch(dayOfWeek)
{
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Not a REAL day");
        break;
}