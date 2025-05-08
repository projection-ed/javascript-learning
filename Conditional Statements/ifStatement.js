
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

let marksHSC = 79
let marksSSC = 80

if(marksHSC >= 75 && marksSSC >= 80){
    console.log("You are eligible for the exam")
}else{
    console.log("You are not eligible for GOVT. exam")
}


let percentage = 40

if(percentage > 91 && percentage <= 100){
    console.log("You got Grade 'A+'")
}else if(percentage > 81 && percentage <= 90){
    console.log("You got Grade 'A'")
} else if(percentage > 71 && percentage <= 80){
    console.log("You got Grade 'B+'")
}else if(percentage > 61 && percentage <= 70){
    console.log("You got Grade 'B'")
}else{
    console.log("You got Fail")
}