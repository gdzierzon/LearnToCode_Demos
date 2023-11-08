let vehicle = {
    make: "Chevy",
    model: "Cheyenne",
    year: 2021,
    color: "Cherry Red",
    engine: "5.2 V8",
    vin: "2581790",
    payload: "1 Ton",
    drive: "4WD",
    cab: "single"
}

console.log("Make: " + vehicle.make);
console.log("");

// for-in is used to loop through KEYS in an Object
for(let key in vehicle) {
    //          make         value for "make"
    console.log(key + ": " + vehicle[key]);
}