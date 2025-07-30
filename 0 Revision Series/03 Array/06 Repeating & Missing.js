class Solution {
    findMissingRepeatingNumbers(nums) {
        // TC: O(n^2)
        // SC: O(1)
        const n = nums.length
        let missing = null
        let twice = null
        for (let i = 1; i <= n; i++) {
            let flag = false
            let count = 0
            for (let j = 0; j < n; j++) {
                if (i === nums[j]) {
                    flag = true
                    count++
                }
            }
            if (flag && count === 2) twice = i
            else if (!flag) missing = i
        }
        return [twice, missing]
    }
}