class Solution {
    secondLargestElement(nums) {
        if (nums.length === 1) return -1
        nums.sort((a, b) => a - b)

        const largest = nums[nums.length - 1]
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] < largest) return nums[i]
        }
        return -1
    }
} // brute force solution