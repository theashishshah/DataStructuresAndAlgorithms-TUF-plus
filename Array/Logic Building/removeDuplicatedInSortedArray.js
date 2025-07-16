class Solution {
    removeDuplicates(nums) {
        const unique = Array.from(new Set(nums))
        nums.length = 0
        nums.push(...unique)
        return nums.length
    }
}