class Solution {
    buySellHelper(day, buy, stocks, n) {
        if (day >= n) return 0

        if (buy) {
            return Math.max(-stocks[day] + this.buySellHelper(day + 1, !buy, stocks, n), this.buySellHelper(day + 1, buy, stocks, n))
        } else {
            return Math.max(stocks[day] + this.buySellHelper(day + 1, !buy, stocks, n), this.buySellHelper(day + 1, buy, stocks, n))
        }
    }
    stockBuySell(arr, n) {
        if (n === 1) return 0
        return this.buySellHelper(0, true, arr, n)
    }
}