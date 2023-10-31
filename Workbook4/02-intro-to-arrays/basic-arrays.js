
const names = [
                "Zephyr",
                "Seraphina",
                "Orion",
                "Amara",
                "Thaddeus",
                "Ophelia",
                "Apollo",
                "Calista",
                "Octavian",
                "Isolde"
              ]

console.table(names)

const firstName = names[0]
const arrayLength = names.length
const lastName = names[arrayLength - 1]

console.log(firstName)
console.log(lastName);
console.log(arrayLength);


displayNames(names)




function displayNames(theNamesArray) {
    console.log("");
    console.log("");
    console.log("Print ALL names");
    console.log("--------------------");

    for(let i = 0; i < names.length; i++) {
        let name = names[i]
        console.log(name);
    }
}

let order1 = {
    price: 6.95,
    item: "Hamburger"
}

let order2 = [
    6.95,
    "Hamburger"
]

let foodType = order1.item;
foodType = order2[0];

let price = order1.price;
price = order2[1]

