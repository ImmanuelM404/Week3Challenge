// Code Challenge printDigits Emily

let printDigits = (num) => {
    while (num) {
        let numPrint = num % 10   // numPrint = 7      //  557/10 = 7
        console.log(numPrint)
        //break;
        num = (num - numPrint) / 10 // (557 - 7) = 550/10 = 55
    }
     
}
printDigits(547)


// try solving .map to solve