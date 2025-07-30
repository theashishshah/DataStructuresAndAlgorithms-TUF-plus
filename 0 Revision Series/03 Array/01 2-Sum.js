class Solution {
    twoSum(nums, target) {
        const n = nums.length
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] === target) return [i, j]
            }
        }

    }
}

class Solution {
    twoSum(nums, target) {
        const n = nums.length
        const hash = new Map()
        for (let i = 0; i < n; i++) {
            const next = target - nums[i]
            if (hash.has(next)) return [hash.get(next), i]
            hash.set(nums[i], i)
        }
    }
}