let arr = [[1,2,3],[13,24],[25,23]]
// let newArray = []
// for(let i = arr.length - 1;i >=0;i--){
//     newArray.push(arr[i])
// }

for(let i = 0;i<=arr.length/2;i++){
    let temp = arr[i] // 1
    arr[i] = arr[arr.length - i - 1] // 4
    arr[arr.length - i - 1] = temp//1
}
console.log(arr)