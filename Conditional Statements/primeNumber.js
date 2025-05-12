//2 3 5 7 11 13 17 19 23 29....
// 17 is a prime number or not
let s = 5
let count = 1
let i = 2
while(count<=s){
    let n = i//4
    let isPrime = true
    for(let i = 2;i<=n/2;i++){
        if(n%i==0){
            isPrime = false
            break
        }
    }
    if(isPrime){
        console.log(n)
        count ++
    }
    i++
}
