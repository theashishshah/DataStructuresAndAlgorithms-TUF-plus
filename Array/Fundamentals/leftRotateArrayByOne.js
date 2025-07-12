// brute force
class Solution {
    rotateArray(nums, k) {
        if (k === 0) return
        k = k % nums.length
        for (let i = 0; i < k; i++) {
            const temp = nums.shift()
            nums.push(temp)
        }

        return nums
    }
}

// better
class Solution {
    rotateArray(nums, k) {
        if (k <= 0) return nums
        k = k % nums.length

        const temp = []
        for (let i = 0; i < k; i++) {
            temp.push(nums[i])
        }

        for (let i = k; i < nums.length; i++) {
            nums[i - k] = nums[i]
        }

        let j = 0
        for (let i = nums.length - k; i < nums.length; i++) {
            nums[i] = temp[j]
            j++
        }

        return nums
    }
}