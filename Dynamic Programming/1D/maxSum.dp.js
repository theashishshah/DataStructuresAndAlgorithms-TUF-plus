class Solution {
    nonAdjacent(nums) {
        function maxSum(index) {
            if (index === 0) return nums[index]
            if (index < 0) return 0
            const pick = nums[index] + maxSum(index - 2)
            const notPick = maxSum(index - 1)
            return Math.max(pick, notPick)
        }

        return maxSum(nums.length - 1)
    }
}


// using memoization
class Solution {
    maxSum(index, nums, memo) {
        if (index === 0) return nums[index]
        if (index < 0) return 0

        if (memo[index] !== -1) return memo[index]
        const pick = nums[index] + this.maxSum(index - 2, nums, memo)
        const notPick = this.maxSum(index - 1, nums, memo)
        return memo[index] = Math.max(pick, notPick)
    }
    nonAdjacent(nums) {
        // tc: o(n)
        // sc: o(n) + o(n)
        const n = nums.length
        if (n === 1) return nums[0]

        const memo = new Array(n).fill(-1)
        return this.maxSum(n - 1, nums, memo)
    }
}