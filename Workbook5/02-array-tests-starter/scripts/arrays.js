
/**
 * The following functions take an array of numbers as input parameters
 * 
 * For example:
 * const numbers = [5,13,81,5,67,90]
 */

/**
 * this function accepts an array of numbers. calculate the sum and return the value
 * 
 * @param {Array<Number>} numbers 
 * @returns Number
 */
function calculateSum(numbers) {

    return numbers.reduce((number, current) => current + number, 0);
}

/**
 * this function accepts an array of numbers. find and return the smallest number
 * 
 * @param {Array<Number>} numbers 
 * @returns Number
 */
function calculateMin(numbers) {
    return numbers.reduce((number, current) => number < current ? number : current)
}

/**
 * this function accepts an array of numbers. find and return the largest number
 * 
 * @param {Array<Number>} numbers 
 * @returns Number
 */
function calculateMax(numbers) {
    return numbers.reduce((number, current) => number > current ? number : current)
}

/**
 * this function accepts an array of numbers. calculate the average of all numbers
 * 
 * @param {Array<Number>} numbers 
 * @returns Number
 */
function calculateAverage(numbers) {
    const sum = numbers.reduce((number, current) => number + current)

    return +(sum / numbers.length).toFixed(2);
}


/**
 * The following functions accept an array of menu items as 
 * input parameters.
 * 
 * Object structure:
 * 
 * const menuItem = {
 *  id: 1,
 *  name: "French Fries",
 *  category: "Side",
 *  price: 1.99
 * }
 * 
 * The arrays will have multiple menu items. Possible categories:
 *  Entree, Drink, Side, Dessert
 * 
 * const menuItems = [
 *  {id: 1, name: "Chicken Sandwich", category: "Entree", price: 4.29 },
 *  ...
 *  {id: 15, name: "Chocolate Shake", category: "Dessert", price: 2.99 }
 *  ...
 * ]
 */

/**
 * This function accepts an array of MenuItems and an id as input parameter.
 * 
 * Find the MenuItem with the given id and return it. 
 * 
 * @param {Array<MenuItem>} menuItems 
 * @param {Number} id 
 * @returns MenuItem
 */
function findMenuItemById(menuItems, id) {

    return menuItems.find(item => item.id == id);

}


function getEntrees(menuItems) {

    return menuItems.filter(item => item.category == "Entree");

}

function getMenuItemNames(menuItems) {
    return menuItems.map(item => item.name);
}

