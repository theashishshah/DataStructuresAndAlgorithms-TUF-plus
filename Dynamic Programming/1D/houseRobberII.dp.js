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