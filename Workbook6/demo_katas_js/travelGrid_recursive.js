function travelChessboard(s)
{
    s = s.replace(")(", " ").replace("(", "").replace(")", "")
    let [x1, y1, x2, y2] = s.split(" ").map(Number)
    let rows = x2 - x1
    let cols = y2 - y1

    if(rows == 0 || cols == 0) return 1

    return paths(cols, rows + 1)
}

function paths(cols, rows){
    if (rows < 1) return 0

    if(cols == 2) {
        return rows + paths(cols, rows - 1) 
    }

    return paths(cols - 1, rows) + paths(cols, rows - 1)
}

function twoColPaths(rows)
{
    if (rows < 1) return 0
    return rows + twoColPaths(rows - 1)    
}

function threeColPaths(rows){
    if(rows < 1) return 0
    return twoColPaths(rows) + threeColPaths(rows - 1)
}

function fourColPaths(rows){
    if(rows < 1) return 0
    return threeColPaths(rows) + fourColPaths(rows - 1)
}

// console.log(threeColPaths(5)) 
// console.log(twoColPaths(4));
// console.log(paths(2, 4));
// console.log("");

// console.log(threeColPaths(4));
// console.log(paths(3, 4));
// console.log("");

// console.log(fourColPaths(4));
// console.log(paths(4, 4));
// console.log("");



// coords = "(1 1)(3 3)"
// paths = travelChessboard(coords)
// console.log(`${coords}=> ${paths} => expected 6`)
// console.log("\n\n");

coords = "(1 8)(4 8)"
paths = travelChessboard(coords)
console.log(`${coords}=> ${paths} => expected 15`)

// console.log("(8 1)(8 6) => ", travelChessboard("(8 1)(8 6)"), ` => expected 1`)
// console.log("(1 2)(8 7) => ", travelChessboard("(1 2)(8 7)"), ` => expected 792`)
// //(8 1)(8 6) => 1
// // (1 2)(8 7) => 792
