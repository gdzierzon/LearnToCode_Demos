
let scores = [98, 92, 100, 95, 89, 100, 90];

function compareNumberAsc(left, right) {
    return left - right;
}

function compareNumberDesc(left, right) {
    return right - left;
}

console.table(scores);

scores.sort();
console.table(scores);

scores.sort(compareNumberAsc);
console.table(scores);

scores.sort(compareNumberDesc);
console.table(scores);