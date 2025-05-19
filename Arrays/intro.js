var roll1 = 1
var roll2 = 2

var rollNumbers = [1,2,3,4,5,6,7,8,9,10]
console.log(rollNumbers)
console.log(rollNumbers[3])
rollNumbers[4] = 20
console.log(rollNumbers)
for(let i = 0;i<11;i++){//Index out of bound exception
    console.log(rollNumbers[i])
}
console.log(rollNumbers.length)

for(let element of rollNumbers){
    console.log(element)
}

for(let index in rollNumbers){
    console.log(index)
}