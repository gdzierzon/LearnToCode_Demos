let dayOfWeek = 3;

console.log();
console.log("Using if");

if(dayOfWeek == 0 || dayOfWeek == 6){
    console.log("Weekend");
}
else if(dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5 ){
    console.log("Weekday");
}
else {
    console.log("Not a REAL day");
}


console.log();
console.log("Using switch");

switch(dayOfWeek)
{
    case 0:
    case 6:
        console.log("Weekend");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
    default:
        console.log("Not a REAL day");
        break;
}