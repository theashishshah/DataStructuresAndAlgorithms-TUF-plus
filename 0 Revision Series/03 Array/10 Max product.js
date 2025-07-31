class Solution {
    maxProduct(nums) {
        const n = nums.length
        let max = Number.MIN_SAFE_INTEGER
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                let localProduct = 1
                for (let k = i; k <= j; k++) {
                    localProduct *= nums[k]
                }
                max = Math.max(max, localProduct)
            }
        }
        return max
    }
}

class Solution {
    maxProduct(nums) {
        const n = nums.length
        let max = Number.MIN_SAFE_INTEGER
        for (let i = 0; i < n; i++) {
            let local = 1
            for (let j = i; j < n; j++) {
                local *= nums[j]
                max = Math.max(max, local)
            }
        }
        return max
    }
}