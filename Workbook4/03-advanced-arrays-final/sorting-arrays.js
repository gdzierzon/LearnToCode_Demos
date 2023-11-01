// functions
function numberSortHelper(first, second) {
    if(first < second) return -1;
    else if (first == second) return 0;
    else return 1;
}

function numberSortHelper2(first, second) {
    return first - second;
}



// program logic
const names = [ "John", "Emily", "Michael", "Sophia", "William", "Olivia" ];
const numbers = [3, 27, 400, 1, 111, 5];

//3, 27, 400, 1, 111, 5

console.table(names);
names.sort();
console.table(names);


console.table(numbers);
// use a pre-defined function
// numbers.sort(numberSortHelper2);

// use an anonymous function
numbers.sort(function (first, second) {
    return second - first;
})


console.table(numbers);

