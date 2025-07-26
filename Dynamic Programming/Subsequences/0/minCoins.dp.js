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

// using memoization
class Solution {
    getMinCoins(index, coins, target, dp) {
        if (target === 0) return 0
        const n = coins.length
        if (index === n - 1) {
            // either I can take the last coin or not, if i can take then
            // how many coins i can take?
            if (target % coins[index] === 0) return target / coins[index]
            else return 1e9 + 7
        }

        if (dp[index][target] !== -1) return dp[index][target]
        let take = 1e9 + 7
        if (target >= coins[index]) {
            take = 1 + this.getMinCoins(index, coins, target - coins[index], dp)
        }
        let notTake = this.getMinCoins(index + 1, coins, target, dp)
        if (take === notTake === 1e9 + 7) return 1e9 + 7
        else return dp[index][target] = Math.min(take, notTake)
    }
    MinimumCoins(coins, amount) {
        const n = coins.length
        const dp = Array(n).fill().map(() => Array(amount + 1).fill(-1))
        const ans = this.getMinCoins(0, coins, amount, dp)
        if (ans >= 1e9 + 7) return -1
        else return ans
    }
}

// using tabulation
class Solution {
    MinimumCoins(coins, amount) {
        const n = coins.length
        const dp = Array(n).fill().map(() => Array(amount + 1).fill(1e9 + 7))
        for (let i = 0; i <= amount; i++) {
            if (i % coins[n - 1] === 0) dp[n - 1][i] = i / coins[n - 1]
        }

        for (let i = n - 2; i >= 0; i--) {
            for (let money = 0; money <= amount; money++) {
                let take = 1e9 + 7
                if (money >= coins[i]) {
                    take = 1 + dp[i][money - coins[i]]
                }
                let notTake = dp[i + 1][money]
                dp[i][money] = Math.min(take, notTake)
            }
        }
        const ans = dp[0][amount]
        if (ans >= 1e9 + 7) return -1
        else return ans
    }
}