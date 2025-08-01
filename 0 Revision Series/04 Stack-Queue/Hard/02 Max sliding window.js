class Solution {
    maxSlidingWindow(nums, k) {
        const n = nums.length
        const ans = []
        for (let i = 0; i < n - k + 1; i++) {
            let max = nums[i]
            for (let j = i + 1; j < k + i; j++) {
                max = Math.max(max, nums[j])
            }
            ans.push(max)
        }
        return ans
    }
}
