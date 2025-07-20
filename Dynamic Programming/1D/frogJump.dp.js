class Solution {
    frogJump(heights) {
        // TC: expo 2^n
        // SC: O(n)
        if (heights.length === 1) return 0
        function jump(n) {
            if (n <= 0) return 0
            let oneJump = jump(n - 1) + Math.abs(heights[n] - heights[n - 1])
            if (n > 1) {
                return Math.min(oneJump, jump(n - 2) + Math.abs(heights[n] - heights[n - 2]))
            } else return oneJump
        }

        return jump(heights.length - 1)
    }
}


// using memoization
class Solution {
    /**
     * a helper function to find min cost 
     */

    minCost(n, heights, memo) {
        if (n <= 0) return 0
        if (memo[n] !== -1) return memo[n]

        const costOneStep = this.minCost(n - 1, heights, memo) + Math.abs(heights[n - 1] - heights[n])
        let costTwoStep = Infinity
        if (n > 1) {
            costTwoStep = this.minCost(n - 2, heights, memo) + Math.abs(heights[n - 2] - heights[n])
        }
        return memo[n] = Math.min(costOneStep, costTwoStep)
    }


    frogJump(heights) {
        // TC: O(n)
        // SC: O(n) + O(n)
        const n = heights.length
        if (n === 1) return 0

        const memo = new Array(n).fill(-1)
        return this.minCost(n - 1, heights, memo)
    }
}


// tabulation
class Solution {
    frogJump(heights) {
        const n = heights.length
        if (n === 1) return 0

        const dp = new Array(n).fill(0)
        for (let i = 1; i < n; i++) {
            const oneStep = dp[i - 1] + Math.abs(heights[i] - heights[i - 1])
            const twoStep = i > 1 ? dp[i - 2] + Math.abs(heights[i] - heights[i - 2]) : Infinity
            dp[i] = Math.min(oneStep, twoStep)
        }

        return dp[n - 1]
    }
}