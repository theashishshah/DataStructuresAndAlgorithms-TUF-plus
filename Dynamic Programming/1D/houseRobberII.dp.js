class Solution {
    maxMoney(index, money) {
        if (index === money.length - 1) return money[index]
        if (index >= money.length) return 0

        const pick = money[index] + this.maxMoney(index + 2, money)
        const notPick = this.maxMoney(index + 1, money)

        return Math.max(pick, notPick)
    }

    houseRobber(money) {
        // using recursion
        const n = money.length
        if (n === 0) return 0
        if (n === 1) return money[0]

        const withFirst = []
        const withLast = []
        for (let i = 0; i < n; i++) {
            if (i !== n - 1) withFirst.push(money[i])
            if (i !== 0) withLast.push(money[i])
        }

        return Math.max(this.maxMoney(0, withFirst), this.maxMoney(0, withLast))
    }
}


class Solution {
    // tc: O(2^n) + O(2^n) 
    // sc: O(n) + O(n) + 2*O(n)
    maxMoney(index, money, memo) {
        if (index >= money.length) return 0

        if (memo[index] !== -1) return memo[index]

        const pick = money[index] + this.maxMoney(index + 2, money, memo)
        const notPick = this.maxMoney(index + 1, money, memo)

        return memo[index] = Math.max(pick, notPick)
    }

    houseRobber(money) {
        // using recursion
        const n = money.length
        if (n === 0) return 0
        if (n === 1) return money[0]

        const withFirst = money.slice(0, n - 1)
        const withLast = money.slice(1)

        const memo1 = new Array(n).fill(-1)
        const memo2 = new Array(n).fill(-1)
        return Math.max(this.maxMoney(0, withFirst, memo1), this.maxMoney(0, withLast, memo2))
    }
}

class Solution {
    maxMoney(index, money, memo) {
        if (index >= money.length) return 0

        if (memo[index] !== -1) return memo[index]

        const pick = money[index] + this.maxMoney(index + 2, money, memo)
        const notPick = this.maxMoney(index + 1, money, memo)

        return memo[index] = Math.max(pick, notPick)
    }

    linearRob(money) {
        const memo = new Array(money.length).fill(-1)
        return this.maxMoney(0, money, memo)
    }

    houseRobber(money) {
        // using recursion
        const n = money.length
        if (n === 0) return 0
        if (n === 1) return money[0]

        const withFirst = money.slice(0, n - 1)
        const withLast = money.slice(1)
        return Math.max(this.linearRob(withFirst), this.linearRob(withLast))
    }
}

// tabulation
class Solution {
    robLinear(arr) {
        const n = arr.length
        const dp = new Array(n).fill(-1)
        dp[0] = arr[0]
        for (let i = 1; i < n; i++) {
            let pick = arr[i]
            if (i - 2 >= 0) pick += dp[i - 2]
            let notPick = dp[i - 1]
            dp[i] = Math.max(pick, notPick)
        }
        return dp[n - 1]
    }

    houseRobber(money) {
        const n = money.length
        if (n === 0) return 0
        if (n === 1) return money[0]
        if (n === 2) return Math.max(money[0], money[1])

        const withFirst = money.slice(0, n - 1)
        const withLast = money.slice(1)

        return Math.max(this.robLinear(withFirst), this.robLinear(withLast))
    }
}
