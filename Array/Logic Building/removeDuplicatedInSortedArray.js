class Solution {
    removeDuplicates(nums) {
        // TC: O(N) + O(N) + O(K)
        // SC: O(N)
        const unique = Array.from(new Set(nums))
        nums.length = 0
        nums.push(...unique)
        return nums.length
    }
}

if (nums.length === 0) return 0
let insertPo = 0
for (let i = 1; i < nums.length; i++) {
    if (nums[insertPo] !== nums[i]) {
        insertPo++
        [nums[insertPo], nums[i]] = [nums[i], nums[insertPo]]
    }
}
return insertPo + 1