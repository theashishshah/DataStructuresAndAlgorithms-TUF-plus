class Solution {
    majorityElement(nums) {
        // TC: O(n^2)
        // SC: O(1)
        let maxTime = 0
        let index = -1
        const n = nums.length
        for (let i = 0; i < n; i++) {
            let localMax = 0
            let curr = nums[i]
            for (let j = 0; j < n; j++) {
                if (curr === nums[j]) localMax++
            }
            if (localMax > maxTime) {
                maxTime = localMax
                index = i
            }
        }
        return nums[index]
    }
}