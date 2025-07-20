class Solution {
    minCost(heights, k, n) {
        if (n <= 0) return 0
        let localMin = Infinity
        for (let i = 1; i <= k; i++) {
            if (n - i >= 0) {
                const jump = this.minCost(heights, k, n - i) + Math.abs(heights[n] - heights[n - i])
                localMin = Math.min(localMin, jump)
            }
        }
        return localMin
    }

    frogJump(heights, k) {
        const n = heights.length
        if (n === 1) return 0
        return this.minCost(heights, k, n - 1)
    }
}

// using memoization
class Solution {
    minCost(heights, n, k, memo) {
        if (n <= 0) return 0
        if (memo[n] !== -1) return memo[n]
        let localMin = Infinity
        for (let i = 1; i <= k; i++) {
            if (n - i >= 0) {
                const jump = this.minCost(heights, n - i, k, memo) + Math.abs(heights[n] - heights[n - i])
                localMin = Math.min(localMin, jump)
            }
        }
        return memo[n] = localMin
    }
    frogJump(heights, k) {
        const n = heights.length
        if (n === 1) return 0
        const memo = new Array(n).fill(-1)

        return this.minCost(heights, n - 1, k, memo)
    }
}


class Solution {
    frogJump(heights, k) {
        const n = heights.length
        if (n === 1) return 0
        const dp = new Array(n).fill(-1)
        dp[0] = 0
        for (let i = 1; i < n; i++) {
            let localMin = Infinity
            for (let j = 1; j <= k; j++) {
                if (i - j < 0) break
                const jump = dp[i - j] + Math.abs(heights[i] - heights[i - j])
                localMin = Math.min(localMin, jump)
            }
            dp[i] = localMin
        }
        return dp[n - 1]
    }
}