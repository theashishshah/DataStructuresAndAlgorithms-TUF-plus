class Solution {
    minDifference(nums, n) {
        let totalSum = nums.reduce((prev, curr) => prev + curr, 0)
        const total = totalSum
        totalSum = Math.floor(totalSum / 2)
        const dp = Array.from({ length: n + 1 }, () => Array(totalSum + 1).fill(false))
        for (let i = 0; i <= n; i++) {
            dp[i][0] = true
        }

        for (let index = n - 1; index >= 0; index--) {
            for (let tar = totalSum; tar > 0; tar--) {
                const take = tar >= nums[index] ? dp[index + 1][tar - nums[index]] : false
                const notTake = dp[index + 1][tar]
                dp[index][tar] = take || notTake
            }
        }

        let min = Infinity
        for (let i = 0; i <= totalSum; i++) {
            if (dp[0][i]) {

                const s2 = total - i
                min = Math.min(min, Math.abs(i - s2))
            }
        }
        return min
    }
}
