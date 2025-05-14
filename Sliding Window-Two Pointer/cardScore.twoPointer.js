function maxScore(cardScore, k) {
    let n = cardScore.length
    if (k === 1) return cardScore[0] > cardScore[n - 1] ? cardScore[0] : cardScore[n - 1]
    if (k === n) return cardScore.reduce((acc, curr) => acc + curr, 0)

    // try to find the sum of first k element
    let maxSum = 0
    for (let i = 0; i < k; i++) {
        maxSum += cardScore[i]
    }

    // keep two pointer first -> k - 1 and second -> last
    let first = k - 1
    let last = n - 1
    let currentSum = maxSum
    while (first >= 0) {
        currentSum = currentSum - cardScore[first] + cardScore[last]
        maxSum = Math.max(currentSum, maxSum)
        first--
        last--
    }
    return maxSum
};