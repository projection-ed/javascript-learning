
let number = 325 // 3+2+5 = 10
let cal = number
let sum = 0
while(cal > 0){
    sum = sum + Math.floor(cal%10) // 325 % 10 = 5
    cal = cal/10 // 325 / 10 = 32
}
console.log(sum);
