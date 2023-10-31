let myOrder = [
    { item: "Chicken Tacos", price: 8.95 },
    { item: "Guacamole", price: 2.85 },
    { item: "Sweet Tea", price: 2.75 }
]
let yourOrder = [
    { item: "Hamburger", price: 6.95 },
    { item: "Fries", price: 2.25 },
    { item: "Sweet Tea", price: 2.75 },
    { item: "Fried Apple Pie", price: 4.95 }
]

let myTotal = getOrderTotal(myOrder);
let yourTotal = getOrderTotal(yourOrder);

console.log(`My Total : $ ${myTotal}`);
console.log(`Your Total : $ ${yourTotal}`);



function getOrderTotal(orderItems) {
    // create total variable
    let orderTotal = 0;

    // loop through the array
    // add price to the total
    for(let i = 0; i < orderItems.length; i++) {
        orderTotal = orderTotal + orderItems[i].price
    }

    // return the total
    return orderTotal;
}