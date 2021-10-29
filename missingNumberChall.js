// Challenge Missing Number 

function missingNum (numList, maxNum) {
    //let numList = []
    for (let i = 0; i < maxNum; i++){
        if (!numList.includes(i)){
            return i
        }
    }

}

let myMissNum = missingNum([0,1,2,3,4,5,6,8,9,10], 10)
console.log(myMissNum)
