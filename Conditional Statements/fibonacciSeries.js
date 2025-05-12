//0 1 1 2 3 5 8 13 21 34  ...... Infinity
// 10 90
let n = 10
let a = 0
let b = 1

for(let i = 1;i<=n;i++){
    console.log(a);
    let c = a + b
    a = b
    b = c
}

// 1 - a = 0, b = 1 // a = b, b = res
// 2 - a = 1, b = 1
// 3 - a = 1, b = 2