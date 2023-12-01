
function chooseBestSum(miles, size, distances) {
    
    let combinations = []

    // this is a nested function to create each possible combination of miles
    // from the original distances array - and adds the combo to the combniations array
    let createCombo = (start, combo) => {
        if (combo.length === size) {
            combinations.push(combo);
            return;
        }
    
        for (let i = start; i < distances.length; i++) {
            createCombo(i + 1, combo.concat(distances[i]));
        }
    }

    createCombo(0, [])

    console.table(combinations)

    let totals = combinations.map( miles => miles.reduce((sum, mile) => sum + mile))
                             .sort((a,b) => b - a)

    return totals.find(m => m <= miles)
}




let ts = [50, 55, 56, 57, 58]
let best = chooseBestSum(163, 3, ts)
console.table(ts)
console.log("expected: 163")
console.log("actual:", best)
console.log("")