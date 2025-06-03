// // function sum(callback,a,b){
// //     callback(a,b)
// // }

// // // const run = (a,b) => {
// // //     console.log(a+b);
// // // }

// // sum((a,b) => {
// //     console.log(a+b);
// // },4,5)

// console.log("Hello We are learning about the Callbacks...!")

// function work(){
//     console.log("We are working here...!");
// }

// // work()

// setTimeout(() => {
//     work()
// }, 5000);

// console.log("Program end...!");


// function work(callback,a,b){
//     let result = callback(a,b)
//     console.log(result)
// }

// const sum = (a,b) => {return a+b }

// work(sum,30,10)


function work(callback,a,b){
    callback(a,b)()
}
const ack = () => {
    console.log("Summation has been done..!")
}
const sum = (a,b) => {
    console.log(a+b)
    return ack
}
work(sum,30,10)