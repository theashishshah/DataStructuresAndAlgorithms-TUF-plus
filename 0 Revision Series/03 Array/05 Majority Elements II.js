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


class Solution {
    majorityElementTwo(nums) {
        // TC: O(n)
        // SC: O(n) for hash table
        const n = nums.length
        const hash = new Map()
        const ans = new Set()
        const majority = Math.floor(n / 3)
        for (let i = 0; i < n; i++) {
            const curr = nums[i]
            hash.set(curr, (hash.get(curr) || 0) + 1)
            let count = hash.get(curr)
            if (count > majority) ans.add(curr)
        }
        return Array.from(ans)
    }
}


class Solution {
    majorityElementTwo(nums) {
        const n = nums.length
        let count1 = 0, count2 = 0
        let num1 = null
        let num2 = null
        for (let i = 0; i < n; i++) {
            if (count1 === 0 && num2 !== nums[i]) {
                count1++
                num1 = nums[i]
            } else if (count2 === 0 && num1 !== nums[i]) {
                count2++
                num2 = nums[i]
            } else if (num1 === nums[i]) count1++
            else if (num2 === nums[i]) count2++
            else {
                count1--
                count2--
            }
        }
        const ans = []
        count1 = 0
        count2 = 0
        for (let i = 0; i < n; i++) {
            if (nums[i] === num1) count1++
            if (nums[i] === num2) count2++
        }
        const majority = Math.floor(n / 3)
        if (count1 > majority) ans.push(num1)
        if (count2 > majority) ans.push(num2)
        return ans
    }
}