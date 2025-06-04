/// Promise
const promise = new Promise((resolve,reject) => {
    ///fullfilled
    setTimeout(() => {
        resolve()   
    }, 5000);

    // resolve("AVNISH")
    // reject()///Rejected
})

// Pending
// fullfilled
// Rejected

let name = promise.then((data) => {
    console.log(data)
}).catch(() => {
    console.log("Error")
})

