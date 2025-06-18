function run(){
    console.log("running");
}

function hover(){
    console.log('On Hover');
    
}

const terror = document.getElementById("pakistan")
terror.addEventListener('click',run)
terror.addEventListener('mouseleave',hover)

const input = document.querySelector("input")
input.setAttribute("placeholder","Enter your name")
input.addEventListener('keypress',(e) => {
    console.log(e.target.value);
})