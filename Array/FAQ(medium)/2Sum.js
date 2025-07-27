class Solution {
    twoSum(nums, target) {
        // TC: O(n^2) -> TLE
        // Can I do better?
        const n = nums.length
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] === target) return [i, j]
            }
        }
    }
}