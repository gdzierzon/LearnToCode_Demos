let teamMembers = [
    ["Dana", "Brenda", "Happy"],
    ["Laura", "Patti"],
    ["Leslye", "Randy", "Mollye", "Ranse"],
    ["Eloise", "Robert"]
];

// console.table(teamMembers)


// for(let row of teamMembers) {
//     console.log(row);
// }

// console.log("loop through all cells");
// console.log("");

for(let rowNumber = 0; rowNumber < teamMembers.length; rowNumber++) {

    let row = teamMembers[rowNumber];
    console.log("Team " + (rowNumber + 1));
    console.log("----------");
    // console.log(row);

    //inner loop
    for(let colNumber = 0; colNumber < row.length; colNumber++){
        console.log(" " + row[colNumber]);
    }

    // add extra line
    console.log("");
}

for(let i = 0 ; i < teamMembers.length; i ++) {

    for(let j = 0; j < teamMembers[i].length ; j++ ){
        
    }
}