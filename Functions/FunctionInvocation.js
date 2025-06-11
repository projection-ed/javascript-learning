
const user = {
    name:"Avnish",
    age:52,
    description:function(salary,salary1){
        console.log(`My name is ${this.name} with age ${this.age} of ${salary}, ${salary1}`)
    }
}

const user1 = {
    name:"Rahul",
    age:25
}

// user.description()
// user1.description()

user.description.call(user1,3000,6000)
user.description.apply(user1,[3000,30000,400000])
const result = user.description.bind(user1,5000,7000)
result()
console.log(result)