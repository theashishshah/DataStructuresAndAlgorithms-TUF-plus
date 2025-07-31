class Solution {
    reversePairs(nums) {
        const n = nums.length
        let count = 0
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (nums[i] > 2 * nums[j]) count++
            }
        }
        return count
    }
}