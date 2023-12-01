function travelChessboard(s)
{
    s = s.replace(")(", " ").replace("(", "").replace(")", "")
    let [x1, y1, x2, y2] = s.split(" ").map(Number)
    console.log("point 1:", x1, y1)
    console.log("point 2:", x2, y2)
    let rows = x2 - x1
    let cols = y2 - y1
    console.log("rows:", rows)
    console.log("cols:", cols)

    let top = factorial(rows + cols)
    console.log("top:", top);

    let vertical = factorial(rows)
    let horizontal = factorial(cols)
    let bottom = vertical * horizontal
    console.log("vertical:", vertical);
    console.log("horizontal:", horizontal);
    console.log("bottom:", bottom);

    return top / bottom
}

function factorial(number)
{
    if (number <= 0) return 1

    return number * factorial(number - 1)
    
}



coords = "(2 3)(4 8)"
paths = travelChessboard(coords)
console.log(`${coords}=> ${paths} => expected 21`)
console.log("\n\n");

// (row + cols )!
// -------------
// rows! * cols!


// coords = "(1 2)(4 7)"
// paths = travelChessboard(coords)
// console.log(`${coords}=> ${paths} => expected 15`)

// console.log("(8 1)(8 6) => ", travelChessboard("(8 1)(8 6)"), ` => expected 1`)
// console.log("(1 2)(8 7) => ", travelChessboard("(1 2)(8 7)"), ` => expected 792`)
// //(8 1)(8 6) => 1
// // (1 2)(8 7) => 792
