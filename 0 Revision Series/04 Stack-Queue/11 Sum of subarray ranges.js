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