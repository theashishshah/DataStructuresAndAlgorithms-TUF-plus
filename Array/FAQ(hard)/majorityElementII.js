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

class Solution {
    majorityElementTwo(nums) {
        const n = nums.length
        const ans = []
        for (let i = 0; i < n; i++) {
            const curr = nums[i]
            if (ans.length === 0 || ans[0] !== curr) {
                let count = 0
                for (let j = 0; j < n; j++) {
                    if (nums[j] === curr) count++
                }
                if (count > Math.floor(n / 3)) ans.push(curr)
            }
            if (ans.length === 2) break
        }
        return ans
    }
}