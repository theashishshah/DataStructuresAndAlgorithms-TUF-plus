class Solution {
    findSubsetHelper(index, target, nums, n) {
        if (target === 0) return true
        if (index === n || target < 0) return false

        return this.findSubsetHelper(index + 1, target - nums[index], nums, n) ||
            this.findSubsetHelper(index + 1, target, nums, n)
    }
    isSubsetSum(nums, target) {
        const n = nums.length
        return this.findSubsetHelper(0, target, nums, n)
    }
}

// memoizatoin
class Solution {
    findSubsetHelper(index, target, nums, n, dp) {
        if (target === 0) return true
        if (index === n || target < 0) return false

        if (dp[index][target] !== -1) return dp[index][target]

        const take = this.findSubsetHelper(index + 1, target - nums[index], nums, n, dp)
        const notTake = this.findSubsetHelper(index + 1, target, nums, n, dp)
        return dp[index][target] = take || notTake
    }
    isSubsetSum(nums, target) {
        const n = nums.length
        const dp = Array(n).fill().map(() => Array(target + 1).fill(-1))
        return this.findSubsetHelper(0, target, nums, n, dp)
    }
}