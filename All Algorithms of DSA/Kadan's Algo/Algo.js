// Just think of how were you getting or trying to find all the sub-arrays? how?
// Kadan's algorithm is based of the observation


class Solution {
    maxSubArray(nums) {
        const n = nums.length
        let max = -Infinity
        let sum = 0
        for (let i = 0; i < n; i++) {
            sum += nums[i]
            if (sum > max) max = sum
            if (sum < 0) sum = 0
        }
        return max
    }
}