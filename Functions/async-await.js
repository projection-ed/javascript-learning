function createOrder(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Order Id 10");
        },5000)
    })
}

function managePayment(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Payment Id 20");
        },5000)
    })
}

// createOrder()

async function handleOrders(){
    try{
        const result = await createOrder()
        console.log(result)
        const payment = await managePayment()
        console.log(payment)
        console.log("Hello Javascript")
    }catch(error){
        console.log(error)
    }
}

handleOrders()