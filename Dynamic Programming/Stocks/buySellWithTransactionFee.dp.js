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