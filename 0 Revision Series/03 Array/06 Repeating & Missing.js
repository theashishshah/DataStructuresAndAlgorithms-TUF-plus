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


class Solution {
    findMissingRepeatingNumbers(nums) {
        // TC: O(n)
        // SC: O(n)
        const n = nums.length
        const hash = new Map()
        for (let i = 0; i < n; i++) {
            const curr = nums[i]
            hash.set(curr, (hash.get(curr) || 0) + 1)
        }
        let twice = null
        let missing = null
        for (let i = 1; i <= n; i++) {
            if (hash.has(i)) {
                let count = hash.get(i)
                if (count > 1) twice = i
            } else missing = i
        }
        return [twice, missing]
    }
}

class Solution {
    findMissingRepeatingNumbers(nums) {
        const n = nums.length
        const s1 = (n * (n + 1)) / 2
        const s2 = (n * (n + 1) * (2 * n + 1) ) / 6
        let sum1 = 0
        let sum2 = 0
        for(let i = 0; i < n; i++){
            sum1 += nums[i]
            sum2 += (nums[i] * nums[i])
        }

        let xMy = sum1 - s1
        let xMy2 = sum2 - s2
        let xPy = xMy2 / xMy
        let repeating = (xMy + xPy) / 2
        let missing = xPy - repeating
        return [repeating, missing]
    }
}