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