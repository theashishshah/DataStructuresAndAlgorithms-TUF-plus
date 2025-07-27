class Solution {
    rearrangeArray(nums) {
        // tc: O(n) + 2*O(n/2)
        // sc: O(n) + 2*O(n/2)
        const n = nums.length
        const positive = []
        const negative = []
        for (let i = 0; i < n; i++) {
            if (nums[i] > 0) positive.push(nums[i])
            else negative.push(nums[i])
        }

        const ans = []
        for (let i = 0; i < positive.length; i++) {
            ans.push(positive[i])
            ans.push(negative[i])
        }
        return ans
    }
}