class Solution {
    subArrayRanges(nums) {
        const n = nums.length
        let sum = 0
        for (let i = 0; i < n; i++) {
            const curr = []
            for (let j = i; j < n; j++) {
                curr.push(nums[j])
                let max = Math.max(...curr)
                let min = Math.min(...curr)
                sum += Math.abs(max - min)
            }
        }
        return sum
    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
    const n = nums.length
    let sum = 0
    for (let i = 0; i < n; i++) {
        let smallest = nums[i]
        let largest = nums[i]
        for (let j = i; j < n; j++) {
            smallest = Math.min(smallest, nums[j])
            largest = Math.max(largest, nums[j])
            sum += Math.abs(largest - smallest)
        }
    }
    return sum
};