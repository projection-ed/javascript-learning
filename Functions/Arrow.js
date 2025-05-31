let greet = function(){

}
let arrow = () => {
    console.log("Hello, World!");
}

// greet()
// arrow()

// let sum = (a,b) => {
//     return a+b
// }

// let sum = (a,b) => a + b
let sum = (a,b) => a+b

let res = sum(2,4)
// console.log(res);

// console.log(this)

function dummy(){
    console.log(`Hello ${this}`)
    function check(){
        console.log(`Check ${this}`)
    }
    check()
}

// dummy()

let obj = {
    name: "John",
    age:20,
    greet: function(){
        console.log(this);
        let abc = 20
        let check4 = () => {
            console.log(this);
        }
        check4()
    },
    check:function names(){
        console.log(this);
    },
    check3:() => {
        console.log(this);
    }
}

obj.greet()
obj.check()
obj.check3()