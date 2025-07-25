class Solution {
    findSubsetsHelper(index, target, nums, n) {
        if (target === 0) return 1
        if (index === n || target < 0) return 0

        const take = this.findSubsetsHelper(index + 1, target - nums[index], nums, n)
        const notTake = this.findSubsetsHelper(index + 1, target, nums, n)
        return take + notTake
    }
    perfectSum(arr, K) {
        return this.findSubsetsHelper(0, K, arr, arr.length)
    }
}
