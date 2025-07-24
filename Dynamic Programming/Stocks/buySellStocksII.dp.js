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