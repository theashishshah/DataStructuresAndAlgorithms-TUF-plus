class Solution {
    backtrack(index, current, ans, nums, k, target) {
        const n = nums.length
        if (current.length > k) return
        if (target === 0 && current.length === k) {
            ans.push([...current])
            return
        }
        if (index === n || target < 0) return
        current.push(nums[index])
        this.backtrack(index + 1, current, ans, nums, k, target - nums[index])
        current.pop()
        this.backtrack(index + 1, current, ans, nums, k, target)
    }
    combinationSum3(k, n) {
        //your code goes here
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const ans = []
        this.backtrack(0, [], ans, nums, k, n)
        return ans
    }
}