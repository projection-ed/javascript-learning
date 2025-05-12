let a = 453427287685685478568765654 // 4 5 3 4 2 = 5
let final = a
//1. Brekdown individual value
let count = 0
while(a > 0){

    let res = a%10 // 45342%10 = 2
    a = Math.floor(a/10) // 4534 = 4534
    count ++
}

console.log(count)