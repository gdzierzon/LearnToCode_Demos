
// functions
function filterByCategory(menu, category){

}

function displayMenu(menu) {

}



// run program
const menuItems = [
    { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
    { id: 2, item: "Burger", category: "Meal", price: 7.29 },
    { id: 3, item: "Salad", category: "Meal", price: 8.29 },
    { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
    { id: 5, item: "Coke", category: "Drink", price: 2.29 },
    { id: 6, item: "Pizza", category: "Meal", price: 10.99 },
    { id: 7, item: "Spaghetti", category: "Meal", price: 9.49 },
    { id: 8, item: "Chicken Alfredo", category: "Meal", price: 13.99 },
    { id: 9, item: "Lemonade", category: "Drink", price: 2.49 },
    { id: 10, item: "Milkshake", category: "Drink", price: 4.99 },
    { id: 11, item: "Chocolate Cake", category: "Dessert", price: 6.99 },
    { id: 12, item: "Cheesecake", category: "Dessert", price: 5.99 },
    { id: 13, item: "Apple Pie", category: "Dessert", price: 4.99 },
    { id: 14, item: "Hot Chocolate", category: "Drink", price: 3.49 },
    { id: 15, item: "Fruit Salad", category: "Dessert", price: 4.49 },
];

const meals = filterByCategory(menuItems, "Meal");

displayMenu(meals)