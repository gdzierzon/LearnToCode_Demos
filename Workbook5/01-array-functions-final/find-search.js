
let menuItems = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29},
    {id: 2, item: "Burger", category: "Meal", price: 7.29},
    {id: 3, item: "Salad", category: "Meal", price: 8.29},
    {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
    {id: 5, item: "Coke", category: "Drink", price: 2.29},
];

// this function MUST return true or false
function isItATaco(currentMenuItem) {
    return currentMenuItem.item.toLowerCase() == "tacoss";
}

// find() returns a SINGLE object if one is found
// returns UNDEFINED if no matches are found
let tacos = menuItems.find(isItATaco);

// // THERE IS NO i
// for(let menuItem of menuItems) {
//     if(isItATaco(menuItem)) {
//         tacos = menuItem;
//         break;
//     }
// }

console.table(tacos);



