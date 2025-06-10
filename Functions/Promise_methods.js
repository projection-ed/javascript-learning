const p1 = Promise.reject(100)
const p2 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve("This is an error")
    },400)
})
const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(300)
    },1000)
})

// Promise.all([p1,p2,p3])
// .then((result) =>{
//     console.log(result)
// })
// .catch(error => {
//     console.log(error)
// })

// Promise.allSettled([p1,p2,p3])
// .then((result) =>{
//     console.log(result)
// })
// .catch(error => {
//     console.log(error)
// })


// Promise.any([p1,p2,p3])
// .then((result) =>{
//     console.log(result)
// })
// .catch(error => {
//     console.log(error)
// })

Promise.race([p1,p2,p3])
.then((result) =>{
    console.log(result)
})
.catch(error => {
    console.log(error)
})