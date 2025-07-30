class Solution {
    backtrack(index, current, ans, nums, target) {
        const n = nums.length
        if (target === 0) {
            ans.push([...current])
            return
        }

        if (index === n || target < 0) return
        current.push(nums[index])
        this.backtrack(index, current, ans, nums, target - nums[index])
        current.pop()
        this.backtrack(index + 1, current, ans, nums, target)
    }
    combinationSum(candidates, target) {
        const n = candidates.length
        const ans = []
        this.backtrack(0, [], ans, candidates, target)
        return ans
    }
}