class Solution {
    maxSubArray(nums) {
        let max = -Infinity
        const n = nums.length
        for (let i = 0; i < n; i++) {
            // Mark the endign position
            for (let j = i; j < n; j++) {
                // Calculate the local sum till this ending
                let localSum = 0
                for (let k = i; k <= j; k++) {
                    localSum += nums[k]
                }
                max = Math.max(max, localSum)
            }
        }
        return max
    }
}