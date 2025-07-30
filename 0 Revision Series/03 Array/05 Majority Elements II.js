class Solution {
    majorityElementTwo(nums) {
        const n = nums.length
        const ans = []
        const min = Math.floor(n / 3)
        for (let i = 0; i < n; i++) {
            const curr = nums[i]
            if (ans.length === 0 || ans[0] !== curr) {
                let localCount = 0
                for (let j = 0; j < n; j++) {
                    if (curr === nums[j]) localCount++
                }
                if (localCount > min) ans.push(curr)
            }
            if (ans.length === 2) return ans
        }
        return ans
    }
}


class Solution {
    majorityElementTwo(nums) {
        const n = nums.length
        const ans = new Set()
        const min = Math.floor(n / 3)
        for (let i = 0; i < n; i++) {
            const curr = nums[i]
            let localCount = 0
            for (let j = 0; j < n; j++) {
                if (curr === nums[j]) localCount++
            }
            if (localCount > min) ans.add(curr)
        }
        return Array.from(ans)
    }
}