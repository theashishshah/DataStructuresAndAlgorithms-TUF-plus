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

// The problem above was each time we're calculating the sum, but now won't
class Solution {
    maxSubArray(nums) {
        // TC: O(n^2)
        // SC: O(1)
        let max = -Infinity
        const n = nums.length
        for (let i = 0; i < n; i++) {
            let localSum = 0
            for (let j = i; j < n; j++) {
                localSum += nums[j]
                // this Each j, is forming a new sub-array, so I need to check
                max = Math.max(localSum, max)
            }
        }
        return max
    }
}