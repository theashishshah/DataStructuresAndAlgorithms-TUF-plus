class Solution {
    getMaxProfit(day, canBuy, tai, prices, n) {
        if (day >= n) return 0

        if (canBuy) {
            const buyToday = -prices[day] + this.getMaxProfit(day + 1, 0, tai, prices, n)
            const skipToday = this.getMaxProfit(day + 1, 1, tai, prices, n)
            return Math.max(buyToday, skipToday)
        } else {
            const sellToday = -tai + prices[day] + this.getMaxProfit(day + 1, 1, tai, prices, n)
            const skipToday = this.getMaxProfit(day + 1, 0, tai, prices, n)
            return Math.max(sellToday, skipToday)
        }
    }
    stockBuySell(arr, n, fee) {
        if (n <= 1) return 0
        return this.getMaxProfit(0, 1, fee, arr, n)
    }
}


// using memoization
class Solution {
    getMaxProfit(day, canBuy, tai, prices, n, dp) {
        if (day >= n) return 0

        if (dp[day][canBuy] !== -1) return dp[day][canBuy]
        if (canBuy) {
            const buyToday = -prices[day] + this.getMaxProfit(day + 1, 0, tai, prices, n, dp)
            const skipToday = this.getMaxProfit(day + 1, 1, tai, prices, n, dp)
            return dp[day][canBuy] = Math.max(buyToday, skipToday)
        } else {
            const sellToday = -tai + prices[day] + this.getMaxProfit(day + 1, 1, tai, prices, n, dp)
            const skipToday = this.getMaxProfit(day + 1, 0, tai, prices, n, dp)
            return dp[day][canBuy] = Math.max(sellToday, skipToday)
        }
    }
    stockBuySell(arr, n, fee) {
        if (n <= 1) return 0
        const dp = Array(n).fill().map(() => Array(2).fill(-1))
        return this.getMaxProfit(0, 1, fee, arr, n, dp)
    }
}

// using tabulation
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    const n = prices.length
    if (n <= 1) return 0
    const tai = fee
    const dp = Array(n + 1).fill().map(() => Array(2).fill(0))
    for (let day = n - 1; day >= 0; day--) {
        for (let buy = 0; buy < 2; buy++) {
            if (buy === 1) {
                const buyToday = -prices[day] + dp[day + 1][0]
                const skipToday = dp[day + 1][1]
                dp[day][buy] = Math.max(buyToday, skipToday)
            } else {
                const sellToday = -tai + prices[day] + dp[day + 1][1]
                const skipToday = dp[day + 1][0]
                dp[day][buy] = Math.max(sellToday, skipToday)
            }
        }
    }
    return dp[0][1]
};