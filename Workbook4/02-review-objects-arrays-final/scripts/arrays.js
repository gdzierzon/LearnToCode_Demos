
/**
 * Accepts an array of numbers and returns the total
 * 
 * [1,2,3] => 6
 * 
 * @param {Array<Number>} values 
 * @returns {Number}
 */
function calculateSum(values) {
    // 1 create the result (container)
    let result = 0;

    // 2. loop through all the values
    //      and add each value to the result
    for (let i = 0; i < values.length; i++) {
        result += values[i];  
    }

    // 3. return the result
    return result;

}

/**
 * Accepts an array of numbers and retuns the average of the numbers
 * 
 * [10,20,30] -> 20
 * 
 * @param {Array<Number>} values
 * @returns {Number}
 */
function calculateAverage(values) {
    let sum = calculateSum(values);
    let average = sum / values.length;

    
    // 1 create the result (container)
    average = 0;

    // 2. loop through all the values
    //      and add each value to the result
    for (let i = 0; i < values.length; i++) {
        average += values[i] / values.length;  
    }

    // 3. return the result
    return average;
}

/**
 * Accepts an array of numbers and returns the lowest number
 * @param {Array<Number>} values 
 * @returns {Number}
 */
function min(values) {
    // 1 create container
    let min = values[0];

    // 2 loop to see if any number is lower
    for(let i = 1; i < values.length; i++)
    {
        if(min > values[i])
        {
            min = values[i]
        }
    }

    return min;
}


/**
 * Accepts an array of numbers and returns the highest number
 * @param {Array<Number>} values 
 * @returns {Number}
 */
function max(values) {
    // 1 create container
    let max = values[0];

    // 2 loop to see if any number is higher
    for(let i = 1; i < values.length; i++)
    {
        if(max < values[i])
        {
            max = values[i]
        }
    }

    return max;
}


/**
 * Accepts an array of order items and returns the order total
 * @param {Array<OrderItem>} orderItems 
 * @returns {Number}
 */
function getOrderTotal(orderItems) {
    // 1. create total
    let total = 0;

    // 2. get all item prices
    for (let i = 0; i < orderItems.length; i++) {
        const item = orderItems[i];
        total += item.price;
    }

    return +total.toFixed(2);
}




