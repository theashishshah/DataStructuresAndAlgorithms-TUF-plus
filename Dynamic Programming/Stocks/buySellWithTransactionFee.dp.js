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