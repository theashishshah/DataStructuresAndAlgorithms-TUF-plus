class Solution {
    checkMinHeap(nums, index) {
        const leftIndex = 2 * index + 1
        const rightIndex = 2 * index + 2
        if ((leftIndex < nums.length && nums[index] > nums[leftIndex]) || (rightIndex < nums.length && nums[index] > nums[rightIndex])) return false
        return true
    }
    isHeap(nums) {
        const lastParent = Math.floor((nums.length) / 2) - 1;
        for (let i = 0; i <= lastParent; i++) {
            if (!this.checkMinHeap(nums, i)) return false
        }
        return true

    }
}