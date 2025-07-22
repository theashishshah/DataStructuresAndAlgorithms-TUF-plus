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