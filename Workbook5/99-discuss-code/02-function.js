
/**
 * 
 * @param {Array<Any>} firstArray 
 * @param {Array<Any>} secondArray 
 * @returns Array<Any>
 */
function combine(firstArray, secondArray) {

    let newArray = [];
    let max = firstArray.length 
    
    if(secondArray.length > max) {
        max = secondArray.length
    }

    for (let i = 0; i < max; i++) {

        if(i < firstArray.length) {
            newArray.push(firstArray[i])
        }   

        if(i < secondArray.length) {
            newArray.push(secondArray[i])
        }         
    }

    return newArray;
}
