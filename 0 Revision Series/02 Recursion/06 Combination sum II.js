class Solution {
    backtrack(index, current, ans, nums, target) {
        const n = nums.length
        if (target === 0) {
            ans.push([...current])
            return
        }

        if (index === n || target < 0) return
        current.push(nums[index])
        this.backtrack(index + 1, current, ans, nums, target - nums[index])
        current.pop()
        // If i'm not taking,  I've to skip the same elements
        index += 1
        while (index < n && nums[index] === nums[index - 1]) index++
        this.backtrack(index, current, ans, nums, target)
    }
    combinationSum2(candidates, target) {
        const n = candidates.length
        candidates.sort((a, b) => a - b)
        const ans = []
        this.backtrack(0, [], ans, candidates, target)
        return ans

    }
}