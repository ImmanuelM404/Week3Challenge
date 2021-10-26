// Code Challenge Stock Prices 10/26 Adam

function best(stockPrice){
    let maxDiff = 0
    let lowSoFar     // what is the purpose of this variable and why is it not defined 
    for(let i = 0; i < stockPrice.length; i++){
        if (lowSoFar === undefined || stockPrice[i] < lowSoFar){      // if lowSoFar is undefined or current index of stock price is less than lowSoFar
            lowSoFar = stockPrice[i]                                   // lowSofar becomes the lowest price in index thus far
        }

        let diff = stockPrice[i] - lowSoFar                            // diff (profit) equals Price index - lowSoFar

        if ( diff > maxDiff){                           // if diff (profit) is gretaer than 0 return the maxDiff(maxProfit)
            maxDiff = diff
        }
    }
    return maxDiff
}
 console.log(best([10, 2, 4, 5, 3, 8, 9, 3, 10, 3, 15]))