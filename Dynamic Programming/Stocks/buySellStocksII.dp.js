class Solution {
    getMaxProfit(day, canBuy, prices, n) {
        if (day >= n) return 0

        if (canBuy) {
            // if you have the option to buy, you can buy and loose money else don't buy
            const buy = -prices[day] + this.getMaxProfit(day + 1, !canBuy, prices, n)
            const skip = this.getMaxProfit(day + 1, canBuy, prices, n)
            return Math.max(buy, skip)
        } else {
            // if you've option to sell, the you can decide if sell you'll get profit else nothing
            const sell = prices[day] + this.getMaxProfit(day + 1, !canBuy, prices, n)
            const skip = this.getMaxProfit(day + 1, canBuy, prices, n)
            return Math.max(sell, skip)
        }
    }
    stockBuySell(arr, n) {
        // TC: O(2^n) as I'll always have the two options
        // SC: O(n) recursion stack space
        if (n <= 1) return 0
        return this.getMaxProfit(0, true, arr, n)
    }
}

// using memoization
function getMaxProfit(day, canBuy, prices, n, dpBuy, dpSell) {
    if (day >= n) return 0;

    if (canBuy && dpBuy[day] !== -1) return dpBuy[day];
    if (!canBuy && dpSell[day] !== -1) return dpSell[day];

    if (canBuy) {
        // if you have the option to buy, you can buy and loose money else don't buy
        const buyToday = -prices[day] + getMaxProfit(day + 1, false, prices, n, dpBuy, dpSell);
        const skipToday = getMaxProfit(day + 1, true, prices, n, dpBuy, dpSell);
        return dpBuy[day] = Math.max(buyToday, skipToday);
    } else {
        // if you've option to sell, the you can decide if sell you'll get profit else nothing
        const sellToday = prices[day] + getMaxProfit(day + 1, true, prices, n, dpBuy, dpSell);
        const skipToday = getMaxProfit(day + 1, false, prices, n, dpBuy, dpSell);
        return dpSell[day] = Math.max(sellToday, skipToday);
    }
}

var maxProfit = function (prices) {
    const n = prices.length
    if (n <= 1) return 0;

    const dpBuy = new Array(n).fill(-1);
    const dpSell = new Array(n).fill(-1);
    return getMaxProfit(0, true, prices, n, dpBuy, dpSell);
};

// tabulation
class Solution {
    stockBuySell(prices, n) {
        if (n <= 1) return 0
        // TC: O(n*2)
        // SC: O(n*2)
        const dp = Array.from({ length: n + 1 }, () => Array(2).fill(-1))
        dp[n][0] = dp[n][1] = 0 // if i'm buying or selling i'm getting profit of zero

        for (let i = n - 1; i >= 0; i--) {
            for (let j = 0; j < 2; j++) {
                // j = 1 buy, j = 0 sell
                if (j === 1) {
                    const buyToday = -prices[i] + dp[i + 1][0]
                    const skipToday = dp[i + 1][1]
                    dp[i][j] = Math.max(buyToday, skipToday)
                } else {
                    const sellToday = prices[i] + dp[i + 1][1]
                    const skipToday = dp[i + 1][0]
                    dp[i][j] = Math.max(sellToday, skipToday)
                }
            }
        }
        // console.log(dp)
        return dp[0][1]
    }
}
