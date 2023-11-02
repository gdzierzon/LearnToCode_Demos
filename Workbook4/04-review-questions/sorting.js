function getNumbers() {
    return [215 ,47 ,389 ,123 ,276 ,92 ,432 ,165 ,57 ,308 ,74 ,491 ,346 ,29 ,411 ,199 ,63 ,284 ,148 ,472]
}

function sortNumericAscending(left, right) {
    if (left < right) {
        return -10000; // don't swap
    } else if (left == right) {
        return 0; // don't swap
    } else {
        return 10000; // swap
    }
}

function displayNumbers() {
    const numbers = getNumbers();

    // option 1 use an external function
    numbers.sort(sortNumericAscending)

    // option 2. use an anonymous function
    numbers.sort(function(left, right){
        return left - right;
    })
    //option 3.a -- fat arrow function
    numbers.sort((left, right) => {
        return left - right;
    })
    // option 3.b // lambda expression
    numbers.sort((left, right) => left - right);

    
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        console.log(number);
    }
}

displayNumbers();