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


  let customers = [
    {
       'id': 001,
       'f_name': 'Abby',
       'l_name': 'Thomas',
       'gender': 'M',
       'married': true,
       'age': 32,
       'expense': 500,
       'purchased': ['Shampoo', 'Toys', 'Book']
    },
    {
        'id': 001,
        'f_name': 'Abby',
        'l_name': 'Thomas', {name:Thomas,expense:1500,purchased:[]}
        'gender': 'M',
        'married': true,
        'age': 32,
        'expense': 1000,
        'purchased': ['Shampoo', 'Book']
     }
    ,
    {
       'id': 002,
       'f_name': 'Jerry',
       'l_name': 'Tom',
       'gender': 'M',
       'married': true,
       'age': 64,
       'expense': 100,
       'purchased': ['Stick', 'Blade']
    },
    {
       'id': 003,
       'f_name': 'Dianna',
       'l_name': 'Cherry',
       'gender': 'F',
       'married': true,
       'age': 22,
       'expense': 1500,
       'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
    },
    {
       'id': 004,
       'f_name': 'Dev',
       'l_name': 'Currian',
       'gender': 'M',
       'married': true,
       'age': 82,
       'expense': 90,
       'purchased': ['Book']
    },
    {
       'id': 005,
       'f_name': 'Maria',
       'l_name': 'Gomes',
       'gender': 'F',
       'married': false,
       'age': 7,
       'expense': 300,
       'purchased': ['Toys']
    }
 ];