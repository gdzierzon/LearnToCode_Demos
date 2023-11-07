
let menuItems = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29},
    {id: 2, item: "Burger", category: "Meal", price: 7.29},
    {id: 3, item: "Salad", category: "Meal", price: 8.29},
    {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
    {id: 5, item: "Coke", category: "Drink", price: 2.29},
];

function isItADrink(currentMenuItem) {
    return currentMenuItem.category == "Drink";
}

// .filter wil ALWAYS return an array
// possibly an EMPTY array
let drinks = menuItems.filter(isItADrink);

// for(let menuItem of menuItems) {
//     if(isItADrink(menuItem)) {
//         drinks.push(menuItem);
//     }
// }

console.table(drinks)


