let dice = 8

switch(dice){
    case 1:
        console.log("Throw 1")
    case 2:
        console.log("Throw 2");
    case 3:
        console.log("Throw 3")
    case 4:
        console.log("Throw 4")
        break
    case 5,6:
        console.log("Throw 5")
    // case 6:
    //     console.log("Throw 6")
    default:
        console.log("Invalid Dice throw")
}