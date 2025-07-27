class Solution {
    twoSum(nums, target) {
        // TC: O(n^2) -> TLE
        // Can I do better?
        const n = nums.length
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] === target) return [i, j]
            }
        }
    }
}
// better solution:
// approach: you're at current element, if you substract this num with target, you'll need the remaining ele, right? if you can store the prev whoever you've visited, then you can easily
// get youre second element, right?
class Solution {
    twoSum(nums, target) {
        const n = nums.length
        const map = new Map()
        for (let i = 0; i < n; i++) {
            const curr = nums[i]
            if (map.has(target - curr)) {
                return [i, map.get(target - curr)]
            }
            map.set(curr, i)
        }
    }
}