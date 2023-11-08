
/**
 * 
 * @param {Array<Number>} firstArray 
 * @param {Array<Number>} secondArray 
 * @returns Array<Number>
 */
function combine(firstArray, secondArray) {

    let newArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        let number = firstArray[i]; 

        if(number % 2 == 0) {
            newArray.push(number);
        }      
    }

    for (let i = 0; i < secondArray.length; i++) {
        let number = secondArray[i]; 

        if(number % 2 == 0) {
            newArray.push(number);
        }      
    }

    return newArray;
}