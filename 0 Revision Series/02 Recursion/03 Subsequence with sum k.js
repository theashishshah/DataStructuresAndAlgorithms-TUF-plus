class Solution {
    backtrack(index, nums, target) {
        const n = nums.length
        if (target === 0) return true
        if (target < 0 || index === n) return false

        if (this.backtrack(index + 1, nums, target - nums[index])) return true
        if (this.backtrack(index + 1, nums, target)) return true
        return false

    }
    checkSubsequenceSum(nums, k) {
        //your code goes here
        return this.backtrack(0, nums, k)
    }
}

class Solution {
    backtrack(index, nums, target, dp) {
        const n = nums.length
        if (target === 0) return true
        if (target < 0 || index === n) return false
        if (dp[index][target]) return true
        if (this.backtrack(index + 1, nums, target - nums[index], dp)) return dp[index][target] = true
        if (this.backtrack(index + 1, nums, target, dp)) return dp[index][target] = true
        return dp[index][target] = false

    }
    checkSubsequenceSum(nums, k) {
        const n = nums.length
        const dp = Array(n).fill().map(() => Array(k + 1).fill(false))
        return this.backtrack(0, nums, k, dp)
    }
}