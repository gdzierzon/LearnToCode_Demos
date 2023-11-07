
// goal output
// let lineItems = [
//     { item: "Tacos", lineTotal: 24.58},
//     { item: "Burger", lineTotal: 7.29},
//     { item: "Salad", lineTotal: 24.87},
//     { item: "Coke", lineTotal: 4.58}
// ];

// this is the input
let orderItems = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29, quantity: 2},
    {id: 2, item: "Burger", category: "Meal", price: 7.29, quantity: 1},
    {id: 3, item: "Salad", category: "Meal", price: 8.29, quantity: 3},
    {id: 5, item: "Coke", category: "Drink", price: 2.29, quantity: 2}
];

function convertOrderItemToLineItem(currentOrderItem) {
    return {
        item: currentOrderItem.item,
        lineTotal: +(currentOrderItem.price * currentOrderItem.quantity).toFixed(2)
    }
}

let lineItems = orderItems.map(convertOrderItemToLineItem);

// for(let orderItem of orderItems) {
//     const newLineItem = convertOrderItemToLineItem(orderItem);

//     lineItems.push(newLineItem);
// }

console.table(orderItems)
console.table(lineItems)







