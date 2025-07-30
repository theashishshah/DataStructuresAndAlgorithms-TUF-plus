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