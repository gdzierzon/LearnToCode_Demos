let dayOfWeek = 3;
let dayOfWeekType = "";


console.log();
console.log("Using switch");

switch(dayOfWeek)
{
    case 0:
    case 6:
        dayOfWeekType = "Weekend"
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        dayOfWeekType = "Weekday"
        break;
    default:
        dayOfWeekType = "Not REAL"
        break;
}

let h2 = document.getElementById("dayType")
h2.innerText = dayOfWeekType;
