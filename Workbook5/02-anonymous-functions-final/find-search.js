
let menuItems = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29},
    {id: 2, item: "Burger", category: "Meal", price: 7.29},
    {id: 3, item: "Salad", category: "Meal", price: 8.29},
    {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
    {id: 5, item: "Coke", category: "Drink", price: 2.29},
];


// option 1: use a named function as the filter function
function isItATaco(currentMenuItem) {
    return currentMenuItem.item.toLowerCase() == "tacos";
}

let tacos0 = menuItems.find(isItATaco);

// option 2: embed an anonymous function within
// the find function
let tacos1 = menuItems.find(function(currentMenuItem) {
    return currentMenuItem.item == "Tacos";
})

// option 3: embed an ARROW function (fat arrow function)
let tacos2 = menuItems.find((currentMenuItem) => { return currentMenuItem.item == "Tacos";})

let tacos3 = menuItems.find(m => m.item == "Tacos")


console.table(tacos0);
console.table(tacos1);
console.table(tacos2);
console.table(tacos3);




