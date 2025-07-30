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
        this.backtrack(index + 1, current, ans, nums)
    }
    powerSet(nums) {
        //your code goes here
        // TC: O(2^n)
        // SC: O(n) + (2^n*n)
        const ans = []
        this.backtrack(0, [], ans, nums)
        return ans
    }
}