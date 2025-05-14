//* * * * *
//* * * * *
//* * * * *
//* * * * *
//* * * * *

let n = 5

var star = ""
for(let i = 1;i<=n;i++){
    for(let j = 1;j<=n;j++){
        if(j>=i && j<=5){
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
