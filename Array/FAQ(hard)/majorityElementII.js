class Solution {
    majorityElementTwo(nums) {
        // TC: O(n^2) + O(n)
        // SC: O(len(ans))
        const n = nums.length
        const set = new Set()
        for (let i = 0; i < n; i++) {
            const curr = nums[i]
            let count = 0
            for (let j = 0; j < n; j++) {
                if (curr === nums[j]) count++
            }
            if (count > Math.floor(n / 3)) set.add(curr)
        }
        return Array.from(set)
    }
}