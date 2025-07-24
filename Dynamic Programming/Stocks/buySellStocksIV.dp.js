/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    const n = prices.length
    if (n <= 1) return 0
    const dp = Array(n + 1).fill().map(() => Array(2).fill().map(() => Array(k + 1).fill(0)))
    for (let index = n - 1; index >= 0; index--) {
        for (let buy = 0; buy < 2; buy++) {
            for (let cap = 0; cap <= k; cap++) {
                // buy == 1, you can buy
                if (buy === 1) {
                    const buyToday = -prices[index] + dp[index + 1][0][cap]
                    const skipToday = dp[index + 1][1][cap]
                    dp[index][buy][cap] = Math.max(buyToday, skipToday)
                } else {
                    const sellToday = cap > 0 ? prices[index] + dp[index + 1][1][cap - 1] : 0
                    const skipToday = dp[index + 1][0][cap]
                    dp[index][buy][cap] = Math.max(sellToday, skipToday)
                }
            }
        }
    }
    return dp[0][1][k]
};