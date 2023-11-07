
let menuItems = [

    {item: "Chips", price: 2.99},
    {item: "Fries", price: 1.99},
];


function sumTotal(price, runningTotal) {
    return price + runningTotal;
}

function getPrice(menuItem) {
    return menuItem.price
}


let prices = menuItems.map(getPrice)
let total = prices.reduce(sumTotal, 0)




console.log(total);





