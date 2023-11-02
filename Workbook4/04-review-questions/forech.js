function getNumbers() {
    return [215 ,47 ,389 ,123 ,276 ,92 ,432 ,165 ,57 ,308 ,74 ,491 ,346 ,29 ,411 ,199 ,63 ,284 ,148 ,472]
}

function displayNumbers() {
    const numbers = getNumbers();

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];

        console.log(number);        
    }

    for(let number of numbers)
    {
        console.log(number);
    }

    
}


displayNumbers();