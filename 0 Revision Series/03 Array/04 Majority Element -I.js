class Solution {
    majorityElement(nums) {
        const n = nums.length
        let max = 0
        let element = null
        for (let i = 0; i < n; i++) {
            const curr = nums[i]
            let localMax = 0
            for (let j = 0; j < n; j++) {
                if (nums[j] === curr) localMax++
            }
            if (localMax > max) {
                max = localMax
                element = curr
            }
        }

        return element
    }
}

class Solution {
    majorityElement(nums) {
        const n = nums.length
        let max = 0
        let element = null
        const hash = new Set()
        for (let i = 0; i < n; i++) {
            const curr = nums[i]
            if (hash.has(curr)) continue
            let localMax = 0
            for (let j = 0; j < n; j++) {
                if (nums[j] === curr) localMax++
            }
            hash.add(curr)
            if (localMax > max) {
                max = localMax
                element = curr
            }
        }

        return element
    }
}

class Solution {
    majorityElement(nums) {
        const n = nums.length
        nums.sort((a, b) => a - b)
        const index = Math.floor(n / 2)
        return nums[index]
    }
}

// Using moore's voting algorithm.
class Solution {
    majorityElement(nums) {
        const n = nums.length
        let element = null
        let count = 0
        for (let i = 0; i < n; i++) {
            if (count === 0) {
                element = nums[i]
                count++
            } else if (element === nums[i]) count++
            else if (element !== nums[i]) count--
        }
        return element
    }
}