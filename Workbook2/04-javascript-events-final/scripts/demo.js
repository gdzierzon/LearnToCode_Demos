
window.onload = init;

function init() {

    let greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = selectDayOfWeek;
}

function onGreetUserBtnClicked()
{
    
}


function selectDayOfWeek() {
    
    let dayNumberInput = document.getElementById("dayNumber");
    let dayTypeElement = document.getElementById("dayType");

    let dayOfWeek = dayNumberInput.value;
    let dayOfWeekType = "";

    console.log(dayOfWeek);
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

    // dayTypeElement.innerText = dayOfWeekType;
    dayTypeElement.innerHTML = "<div style='color: red;'>" + dayOfWeek + "</div>"
}
