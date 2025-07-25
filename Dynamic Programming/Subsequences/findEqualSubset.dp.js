class Solution {
    findEqualSubset(index, target, nums, n) {
        if (target === 0) return true
        if (index === n || target < 0) return false

        const take = this.findEqualSubset(index + 1, target - nums[index], nums, n)
        const notTake = this.findEqualSubset(index + 1, target, nums, n)

        return take || notTake
    }

    equalPartition(n, nums) {
        let target = 0
        for (let i = 0; i < n; i++) {
            target += nums[i]
        }
        if (target % 2 !== 0) return false
        return this.findEqualSubset(0, target / 2, nums, n)
    }
}

// using memoization
class Solution {
    findEqualSubset(index, target, nums, n, dp) {
        if (target === 0) return true
        if (index === n || target < 0) return false

        if (dp[index][target] !== -1) return dp[index][target]

        const take = this.findEqualSubset(index + 1, target - nums[index], nums, n, dp)
        const notTake = this.findEqualSubset(index + 1, target, nums, n, dp)

        return dp[index][target] = take || notTake
    }

    equalPartition(n, nums) {
        let target = 0
        for (let i = 0; i < n; i++) {
            target += nums[i]
        }
        if (target % 2 !== 0) return false
        target = target / 2
        const dp = new Array(n).fill().map(() => Array(target + 1).fill(-1))
        return this.findEqualSubset(0, target, nums, n, dp)
    }
}


// using tabulation
class Solution {
    equalPartition(n, nums) {
        let target = 0
        for (let i = 0; i < n; i++) {
            target += nums[i]
        }
        if (target % 2 !== 0) return false
        target = target / 2
        const dp = new Array(n + 1).fill().map(() => Array(target + 1).fill(false))
        for (let i = 0; i <= n; i++) {
            dp[i][0] = true
        }

        for (let index = n - 1; index >= 0; index--) {
            for (let tar = target; tar > 0; tar--) {
                const take = tar >= nums[index] ? dp[index + 1][tar - nums[index]] : false
                const notTake = dp[index + 1][tar]
                dp[index][tar] = take || notTake
            }
        }
        return dp[0][target]
    }
}
