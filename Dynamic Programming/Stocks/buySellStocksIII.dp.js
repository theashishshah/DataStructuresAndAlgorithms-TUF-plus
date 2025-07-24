class Solution {
    getMaxProfit(day, canBuy, cap, prices, n) {
        if (day >= n) return 0
        if (cap === 0) return 0

        if (canBuy) {
            // either I'll buy or I'll not buy
            const buyToday = -prices[day] + this.getMaxProfit(day + 1, 0, cap, prices, n)
            const skipToday = this.getMaxProfit(day + 1, 1, cap, prices, n)
            return Math.max(buyToday, skipToday)
        } else {
            // I'll choose if i want to sell today or not
            const sellToday = prices[day] + this.getMaxProfit(day + 1, 1, cap - 1, prices, n)
            const skipToday = this.getMaxProfit(day + 1, 0, cap, prices, n)
            return Math.max(sellToday, skipToday)
        }
    }
    stockBuySell(arr, n) {
        if (n <= 1) return 0
        return this.getMaxProfit(0, 1, 2, arr, n)
    }
}


//  optimized using memoization
class Solution {
    getMaxProfit(day, canBuy, cap, prices, n, dp) {
        if (day >= n) return 0
        if (cap === 0) return 0

        if (dp[day][canBuy][cap] !== -1) return dp[day][canBuy][cap]
        if (canBuy) {
            // either I'll buy or I'll not buy
            const buyToday = -prices[day] + this.getMaxProfit(day + 1, 0, cap, prices, n, dp)
            const skipToday = this.getMaxProfit(day + 1, 1, cap, prices, n, dp)
            return dp[day][canBuy][cap] = Math.max(buyToday, skipToday)
        } else {
            // I'll choose if i want to sell today or not
            const sellToday = prices[day] + this.getMaxProfit(day + 1, 1, cap - 1, prices, n, dp)
            const skipToday = this.getMaxProfit(day + 1, 0, cap, prices, n, dp)
            return dp[day][canBuy][cap] = Math.max(sellToday, skipToday)
        }
    }
    stockBuySell(arr, n) {
        if (n <= 1) return 0
        const dp = new Array(n).fill().map(() => Array(2).fill().map(() => Array(3).fill(-1)))
        return this.getMaxProfit(0, 1, 2, arr, n, dp)
    }
}



// using tabulation
class Solution {

    stockBuySell(prices, n) {
        if (n <= 1) return 0
        const dp = new Array(n + 1).fill().map(() => Array(2).fill().map(() => Array(3).fill(0)))

        for (let index = n - 1; index >= 0; index--) {
            for (let buy = 0; buy < 2; buy++) {
                for (let cap = 1; cap <= 2; cap++) {
                    if (buy === 1) {
                        dp[index][buy][cap] = Math.max(-prices[index] + dp[index + 1][0][cap], dp[index + 1][1][cap])
                    } else {
                        dp[index][buy][cap] = Math.max(prices[index] + dp[index + 1][1][cap - 1], dp[index + 1][0][cap])
                    }
                }
            }
        }

        return dp[0][1][2]
    }
}
