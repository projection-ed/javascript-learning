const arr = [12,32,42,42,244,21,123,1,42,1,4,87]
// MAP
// Filter
// Reduce
// arr.map()
console.log("Before For loop");

// arr.forEach((value) =>{
//     setTimeout(()=>{
//         console.log(value)
//     },400)
// })

const newArr = arr.map((value,index,arr)=>{
    console.log(value)
    return `Roll no : ${value}`
})

console.log(newArr)

const newFilterArr = arr.filter((value,index,arr) =>{
    return value > 40
})
console.log(newFilterArr);

const sum = arr.reduce((acc,value,index,arr) => {
    console.log(acc,value,index)
    return acc + value
},0)
console.log(sum);


console.log("After For loop");

const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
  ];

  users.map(value => console.log(value.firstName + " " +value.lastName))

  //https://dev.to/srishtikprasad/mapfilterreduce-with-important-interview-questions-1ae5
  // https://medium.com/@harshitaverma108/javascript-map-filter-reduce-0243d7b93bb3
  //https://www.analyticsvidhya.com/blog/2024/02/mcqs-on-python-map-filter-and-reduce-functions/''

