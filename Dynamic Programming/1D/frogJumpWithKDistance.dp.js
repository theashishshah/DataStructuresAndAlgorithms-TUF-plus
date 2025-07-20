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

