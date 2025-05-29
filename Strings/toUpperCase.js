let s = "Hello I am in projection"

function toUpperCase(value){
    let result = ""
    for(let i = 0;i<value.length;i++){
        let temp = value.charCodeAt(i)
        if(temp >= 97){
            let cal = temp - 32 //72
            result += String.fromCharCode(cal) //E
        }else{
            result = result + value[i]
        }
    }
    return result
}

function toLowerCase(value){
    let result = ""
    for(let i = 0;i<value.length;i++){
        let temp = value.charCodeAt(i)
        if(temp >= 65 && temp < 97){
            let cal = temp + 32 //72
            result += String.fromCharCode(cal) //E
        }else{
            result = result + value[i]
        }
    }
    return result
}

let res = toUpperCase(s)
console.log(res);

let res2 = toLowerCase(s)
console.log(res2);

