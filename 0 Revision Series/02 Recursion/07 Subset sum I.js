class Solution {
    backtrack(index, current, ans, nums) {
        const n = nums.length
        if (index === n) {
            if (current.length > 0) {
                const sum = current.reduce((curr, pre) => curr + pre, 0)
                ans.push(sum)
            } else ans.push(0)
            return
        }

        current.push(nums[index])
        this.backtrack(index + 1, current, ans, nums)
        current.pop()
        this.backtrack(index + 1, current, ans, nums)
        return
    }
    subsetSums(nums) {
        //your code goes here
        const ans = []
        this.backtrack(0, [], ans, nums)
        return ans
    }
}