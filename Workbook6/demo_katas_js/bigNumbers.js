function add(a, b) {
    let aValues = splitNumber(a)
    let bValues = splitNumber(b)


    let aNumbers = aValues.map(Number)
    let bNumbers = bValues.map(Number)
    let newNumbers = []

    let max = Math.max(aNumbers.length, bNumbers.length)

    let carry = 0
    for(let i = 0; i < max; i++){
        let num = carry
        if(aNumbers.length > i) num += aNumbers[i]
        if(bNumbers.length > i) num += bNumbers[i]

        carry = 0
        num = num.toString()
        if(num.length > 10) {
            carry = 1
            num = num.substring(1) 
        }
        newNumbers.push(num)
    }

    carry = carry > 0 ? "1" : ""
    newNumbers.reverse()

    return carry + newNumbers.join("")
}

function splitNumber(number){
    let numbers = []
    let remainder = number.length % 10
    if(remainder > 0) {
        numbers.push(number.substring(0, remainder))
        number = number.substring(remainder)
    }

    while(number.length > 0) {
        numbers.unshift(number.substring(0, 10))
        number = number.substring(10)
    }

    return numbers
}

console.table(splitNumber("11122222222223333333333"))

console.log(add("11155222222224333333333","44455555555556666666666"))
console.log(add("11155222222224333333333","333"))

// //1057853509440367665682450458794866464501746580388666517943654
// console.log(add("557853509440367665682450458794866464501746580388666517943654",
//                 "500000000000000000000000000000000000000000000000000000000000"))

// console.log("1057853509440367665682450458794866464501746580388666517943654");



// console.log("");
// const largeNumber = "63829983432984289347293874";
// const anotherLargeNumber = "90938498237058927340892374089";
// console.log(add(largeNumber, anotherLargeNumber))
// console.log("91002328220491911630239667963")

// console.log(add("123", "456"));
// const sum = largeNumber + anotherLargeNumber;
// console.log(sum.toString()); // Output will be the sum of these large numbers


//'63829983432984289347293874', '90938498237058927340892374089'
// 91002328220491911630239667963
// 91002328220491911630239667963
//910023282204901911630239667963