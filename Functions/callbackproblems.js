function createOrder(callback){
    setTimeout(() => {
        console.log("Order is creating.........")
        // callback()
    }, 2000);
}

function managePayment(callback){
    setTimeout(() =>{
        console.log("Payment has been done.....");
        callback()
    },4000)
}

function walletUpdate(callback){
    setTimeout(()=>{
        console.log("Wallet update");
        callback()
    },1000)
}

function manageHistory(){
    setTimeout(() =>{
        console.log("History is updated");
    },3000)
}

createOrder(() =>{
    ///sunai dedi
    managePayment(() => {
        ///sunai dedi
        walletUpdate(() => {
            ///sunai dedi
            manageHistory()
        })
    })
})