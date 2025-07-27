class Solution {
    leaders(nums) {
        const n = nums.length
        if (n === 1) return [nums[0]]
        const ans = []
        for (let i = 0; i < n - 1; i++) {
            let flag = false
            for (let j = i + 1; j < n; j++) {
                if (nums[j] >= nums[i]) {
                    flag = true
                    break;
                }
            }
            if (!flag) ans.push(nums[i])
        }
        ans.push(nums[n - 1])
        return ans
    }
}