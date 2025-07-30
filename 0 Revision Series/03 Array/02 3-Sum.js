class Solution {
    threeSum(nums) {
        const n = nums.length
        const hash = new Set()
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        const curr = [nums[i], nums[j], nums[k]]
                        curr.sort((a, b) => a - b)
                        hash.add(curr.join())
                    }
                }
            }
        }
        return Array.from(hash).map(str => str.split(",").map(num => Number(num)))
    }
}