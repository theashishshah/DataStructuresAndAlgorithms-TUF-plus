class Solution {
    majorityElement(nums) {
        const n = nums.length
        let max = 0
        let element = null
        for (let i = 0; i < n; i++) {
            const curr = nums[i]
            let localMax = 0
            for (let j = 0; j < n; j++) {
                if (nums[j] === curr) localMax++
            }
            if (localMax > max) {
                max = localMax
                element = curr
            }
        }

        return element
    }
}