//* * * * *
//* * * * *
//* * * * *
//* * * * *
//* * * * *

let n = 5

var star = ""
for(let i = 1;i<=n;i++){
    for(let j = 1;j<2*n;j++){
        if((n-i+1)<=j && j<= (n+i-1)){
            star += "* "
        }else{
            star += "  "
        }
    }
    star += "\n"
}
console.log(star)
//Node.js
//process.stdout.write()
