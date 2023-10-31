window.onload = function() {

    const reservationForm = document.getElementById("reservationForm");

    reservationForm.onsubmit = createReservation;
}

function createReservation(event) {
    event.preventDefault();

    // create the reservation object
    const reservation = {
        roomType: "",
        roomRate: 0,
        discountRate: 0,
        total: 0
    };

    reservation.roomType = getSelectedRoomType();
    reservation.roomRate = getRoomRate();
    reservation.discountRate = getDiscount();
    reservation.total = reservation.roomRate - reservation.discountRate;

    console.log(reservation);
    console.table(reservation);


    // display the reservation details to the user
}

function getSelectedRoomType() {
    const isKing = document.getElementById("roomTypeKing").checked;
    const isQueen = document.getElementById("roomTypeQueen").checked;
    // const isSuite = document.getElementById("roomTypeSuite").checked;

    if(isKing) {
        return "King";
    } else if (isQueen) {
        return "Queen";
    } else {
        return "Suite";
    }

}

function getRoomRate() {
    const type = getSelectedRoomType();

    if(isPeakSeason()){
        switch(type)
        {
            case "King":
            case "Queen":
                return 250;
            case "Suite":
            default:
                return 350;
        }
    } else {
        
        switch(type)
        {
            case "King":
            case "Queen":
                return 150;
            case "Suite":
            default:
                return 210;
        }
    }


    // const isKing = document.getElementById("roomTypeKing").checked;
    // const isQueen = document.getElementById("roomTypeQueen").checked;

    // if(isKing) {
    //     return 150;
    // } else if (isQueen) {
    //     return 150;
    // } else {
    //     return 210;
    // }
}

function getDiscount() {
    
    const isMilitary = document.getElementById("discountMilitary").checked;
    const isSenior = document.getElementById("discountSenior").checked;

    const baseRate = getRoomRate();

    if(isMilitary) {
        return +(baseRate * .2).toFixed(2);
    } else if(isSenior) {
        return +(baseRate * .1).toFixed(2);
    } else {
        return 0;
    }
}

function isPeakSeason() {
    const reservationDate = getReservationDate();
    const month = reservationDate.getUTCMonth();

    return (month >=5 && month <= 7);

    // if(month >= 5 && month <= 7){
    //     return true;
    // }else {
    //     return false;
    // }

    // switch(month){
    //     case 5:
    //     case 6:
    //     case 7:
    //         return true;
    //     default:
    //         return false;
    // }

}

function getReservationDate() {
    const selectedDate = new Date(document.getElementById("reservationDate").value);

    // handle logic to deal with UTC time offset

    return selectedDate;
}