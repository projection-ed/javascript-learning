console.log(document)
console.log(document.body)
console.log(document.getElementById("container"))
console.log(document.getElementsByClassName("container1"))
console.log(document.getElementsByTagName("h1"))
console.log(document.getElementsByName("container"))

let container = document.getElementById("container")
container.children[0].textContent = "Hello we are learning about the DOM's"
setTimeout(() => {
    container.children[0].style.color = "Red"
}, 5000);
