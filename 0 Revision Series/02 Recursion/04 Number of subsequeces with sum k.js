class Solution {
    backtrack(index, nums, target) {
        const n = nums.length
        if (target === 0) return 1
        if (target < 0 || index === n) return 0

        const include = this.backtrack(index + 1, nums, target - nums[index])
        const exclude = this.backtrack(index + 1, nums, target)
        return include + exclude

    }
    countSubsequenceWithTargetSum(nums, k) {
        //your code goes here
        return this.backtrack(0, nums, k)
    }
}
class Solution {
    backtrack(index, nums, target, dp) {
        const n = nums.length
        if (target === 0) return 1
        if (target < 0 || index === n) return 0
        if (dp[index][target] !== -1) return dp[index][target]
        const include = this.backtrack(index + 1, nums, target - nums[index], dp)
        const exclude = this.backtrack(index + 1, nums, target, dp)
        return dp[index][target] = include + exclude

    }
    countSubsequenceWithTargetSum(nums, k) {
        //your code goes here
        const n = nums.length
        const dp = new Array(n).fill().map(() => Array(k + 1).fill(-1))
        return this.backtrack(0, nums, k, dp)
    }
}