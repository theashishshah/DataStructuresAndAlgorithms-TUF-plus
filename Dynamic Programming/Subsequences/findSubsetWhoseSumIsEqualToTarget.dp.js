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