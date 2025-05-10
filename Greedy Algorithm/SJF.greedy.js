function solve(bt) {
    if(bt.length === 1) return 0
    bt.sort((a, b) => a - b)
    let totalSum = 0
    let totalBt = 0
    for(let i = 0; i < bt.length; i++){
        totalBt += totalSum
        totalSum += bt[i]
    }
    console.log(totalBt)
    return Math.floor(totalBt / (bt.length))
}

console.log(solve([4, 1, 3, 7, 2]))