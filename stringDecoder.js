// Code Challenge String Decoder 10/27 Michael 

let decoder = (code) => {
    let stringSplit = code.split('')
    let result = ''

    for (let i = 0; i < stringSplit.length; i++){
        if (!isNaN(stringSplit[i])){    // MDN isNan()
                i += +stringSplit[i]   // +stringSplit converts value into a number or determiens if value is not a number as well 
        } else {
            result += stringSplit[i]
        }
    }
        return result
}

console.log(decoder('0h2xce5ngbrdy'))