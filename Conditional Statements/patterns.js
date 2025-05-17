//* * * * *
//* * * * *
//* * * * *
//* * * * *
//* * * * *

let n = 5

var star = ""

for(let i = 1;i<=n;i++){
    var k = 5
    for(let j = 1;j<2*n;j++){
        if(j>=(n-i+1) && j<=(n+i-1)){
            star += k + " "
        }else{
            star += "  "
        }

        if(j<n){
            k--
        }else{
            k++
        }
    }
    star += "\n"
}
console.log(star)
//Node.js
//process.stdout.write()
