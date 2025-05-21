var arr1 = [1,2,3,4,6]
var arr2 = "#"

// console.log(arr1.join(arr2))
console.log(arr1.push(10))
console.log(arr1)
var res =  arr1.pop()
console.log(res)

console.log(arr1.shift())
console.log(arr1.unshift(30))
arr1[2] = "Harsh"
arr1[1] = 2.4
arr1[4] = true
console.log(arr1.delete)
console.log(arr1)

const names = ["Joy","Allen","Rock","Dogesh","Iron"]
names.push("ABC")
var ratings = [1.2,3,4.5,7.4,10,5]
console.log(names.concat(ratings))
console.log(names)
console.log(names.copyWithin(3,1))
var check = [[1,2,3,4], [2,3,4,5]]
console.log(check.flat())
let fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.splice(2,0,names));
console.log(fruits)
console.log(fruits.slice(2,3))
console.log(names.indexOf("Dogesh"))
console.log(names.lastIndexOf("Dogesh"))
console.log(names.includes("Rock"))
console.log(names.reverse())
console.log(names.sort())
//