class Solution {
    getMinCoins(index, coins, target) {
        if (target === 0) return 0
        const n = coins.length
        if (index === n - 1) {
            // either I can take the last coin or not, if i can take then
            // how many coins i can take?
            if (target % coins[index] === 0) return target / coins[index]
            else return 1e9 + 7
        }

        let take = 1e9 + 7
        if (target >= coins[index]) {
            take = 1 + this.getMinCoins(index, coins, target - coins[index])
        }
        let notTake = this.getMinCoins(index + 1, coins, target)
        if (take === notTake === 1e9 + 7) return 1e9 + 7
        else return Math.min(take, notTake)
    }
    MinimumCoins(coins, amount) {
        const ans = this.getMinCoins(0, coins, amount)
        if (ans >= 1e9 + 7) return -1
        else return ans
    }
}