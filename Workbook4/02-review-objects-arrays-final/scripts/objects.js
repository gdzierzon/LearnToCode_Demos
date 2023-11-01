/**
 * 
 * @param {String} name 
 * @param {String} address 
 * @param {String} city 
 * @param {String} state 
 * @param {String} zip 
 * @returns {Label}
 */
function createLabel(name, address, city, state, zip) {
    return {
        name: name,
        address: address,
        city: city,
        state: state,
        zip: zip
    }
}

/**
 * the supplierCode is before the :
 * the productNumber is between the : and -
 * the size is after the -
 * 
 * {
 *  supplierCode: "XYZ",
 *  productNumber: "1234",
 *  size: "L"
 * }
 * 
 * code.substring()
 * 
 * 
 * @param {String} code  - pattern XYZ:1234-L
 * @returns 
 */
function parsePartCode(code) {
    // 1 create the container
    const part =  {};

    // 2. calculate the contents
    const colon = code.indexOf(":");
    const dash = code.indexOf("-");

    part.supplierCode = code.substring(0, colon),
    part.productNumber = code.substring(colon + 1, dash),
    part.size = code.substring(dash + 1)
                
    // 3 return the result
    return part;
}

//XYZ:1234-L
function parsePartCode2(code) {
    const parts = code.split(":")
    // parts[0] XYZ
    // parts[1] 1234-L
    const parts2 = parts[1].split("-");
    // parts2[0] 1234
    // parts2[1] L   

    const supplierCode = parts[0]
    const productNumber = parts2[0]
    const size = parts2[1]

    const part =  {
                    supplierCode: supplierCode,
                    productNumber: productNumber,
                    size: size
                }

    return part;
}

// what is the goal of this function?
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



/**
 * Using the given inputs, create a reservation with roomRate, discountAmount, SubTotal and Total calculated
 * 
 * reservation {
 *  roomType,
 *  roomRate, -- Q 15, k 15, S 210 (peak Q 250, K 250, S 350)
 *  checkInDate,
 *  numberOfNights,
 *  discountRate,
 *  discountAmount,
 *  subTotal, - total before discount
 *  total - total after discount
 * }
 * 
 * @param {String} roomType - Queen, King, Suite
 * @param {Date} checkInDate - Jun-Aug are peak months
 * @param {Number} numberOfNights 
 * @param {Number} discount - floating point that defines the amount of the discount 0, .1, .2
 */

// function createReservation(roomType, checkInDate, numberOfNights, discount) {

//     // return a reservation object
// }


