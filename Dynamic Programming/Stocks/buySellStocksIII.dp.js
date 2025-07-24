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
