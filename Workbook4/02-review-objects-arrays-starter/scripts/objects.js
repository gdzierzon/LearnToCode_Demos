
function createLabel(name, address, city, state, zip) {
    return {}
}

function parsePartCode(code) {
    return {};
}



function createReservation(roomType, checkInDate, numberOfNights, discount) {

    const reservation = {
        roomType: roomType,
        roomRate: 0,
        checkInDate: checkInDate,
        isPeak: (checkInDate.getUTCMonth() >= 5 && checkInDate.getUTCMonth() <=7),
        numberOfNights: numberOfNights,
        discountRate: discount,
        discountAmount: 0,
        subTotal: 0,
        total: 0
    }

    // calculate rate
    if(reservation.isPeak) {

        if(roomType == "Queen" || roomType == "King") reservation.roomRate = 250;
        else reservation.roomRate = 350
    } else {
        
        if(roomType == "Queen" || roomType == "King") reservation.roomRate = 150;
        else reservation.roomRate = 210
    }

    reservation.subTotal = reservation.roomRate * numberOfNights;
    reservation.discountAmount = reservation.subTotal * discount;
    reservation.total = reservation.subTotal - reservation.discountAmount;

    return reservation;
}