class Solution {
    backtrack(index, current, ans, nums) {
        const n = nums.length
        if (index === n) {
            ans.push([...current])
            return
        }

        current.push(nums[index])
        this.backtrack(index + 1, current, ans, nums)
        current.pop()
        index += 1
        while (index < n && nums[index] === nums[index - 1]) index++
        this.backtrack(index, current, ans, nums)
        return
    }
    subsetsWithDup(nums) {
        //your code goes here
        nums.sort((a, b) => a - b)
        const ans = []
        this.backtrack(0, [], ans, nums)
        return ans
    }
}