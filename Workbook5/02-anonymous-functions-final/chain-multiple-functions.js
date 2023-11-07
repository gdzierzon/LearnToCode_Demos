
// this is the input
let orderItems = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29, quantity: 2},
    {id: 2, item: "Burger", category: "Meal", price: 7.29, quantity: 1},
    {id: 3, item: "Salad", category: "Meal", price: 8.29, quantity: 3},
    {id: 5, item: "Coke", category: "Drink", price: 2.29, quantity: 2}
];

// let meals = orderItems.filter(o => o.category == "Meal");
// let prices = meals.map(m => +(m.price * m.quantity).toFixed(2));
// let total = prices.reduce((price, sum) => price + sum);

let total = orderItems.filter(o => o.category == "Meal")
                      .map(m => +(m.price * m.quantity).toFixed(2))
                      .reduce((price, sum) => price + sum);


// console.table(meals)
// console.table(prices)
console.log(total)






