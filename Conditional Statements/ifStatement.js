
console.log("Before If.....")
if ( 5 > 10 ) {
    // code to execute if condition is true
    console.log("Condition is true");
}
console.log("After If....")

let age = 17
if (age >= 18 ){
    console.log("You are eligible to vote")
}

function run(){
    console.log("Running...")
    return function check(){
        console.log("Checking...")
    }
}

console.log(run()())