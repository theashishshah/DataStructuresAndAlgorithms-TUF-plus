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