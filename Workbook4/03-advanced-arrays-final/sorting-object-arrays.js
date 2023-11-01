// functions



// program logic
let products = [
        {prodId: 31, item: "Notepads (12 pk)", price: 12.29},
        {prodId: 12, item: "Black Pens (12 pk)", price: 5.70},
        {prodId: 52, item: "Stapler", price: 12.79}
    ];

console.table(products);

// sort by name asc
products.sort(function(left, right) {
    if(left.item <= right.item) return -1;
    else return 1;
});
console.log("Sorted by Name");
console.table(products);


// sort price high to low
products.sort( (left, right) => { 
    return right.price - left.price;
});
console.log("Sorted by Price H-L");
console.table(products);


