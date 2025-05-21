const numbers = [6,12,18,28,19,17,48,10,24]
for(let i = 0;i<numbers.length;i++){
    // Used to itrate an array
    var sum = 0
    for(let j = 1;j<=numbers[i]/2;j++){
        if(numbers[i]%j == 0){
            sum = sum + j
        }
    }
    if (sum == numbers[i]){
        console.log(sum)
    }
}