
function sum2(number){
    let answer = 0
    for (let i = number; i > 0; i--) {
        answer += i
    }

    return answer
}

function sum(number) {

    if(number <= 0) return 0

    return number + sum(number - 1)
}

console.log(sum(5)); // 5 + 4 + 3 + 2 + 1

