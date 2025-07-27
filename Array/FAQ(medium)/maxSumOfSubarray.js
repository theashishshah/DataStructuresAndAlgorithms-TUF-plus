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

// Optimal solution using kadan's algorithm
class Solution {
    maxSubArray(nums) {
        // TC: O(n)
        // SC: O(1)
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