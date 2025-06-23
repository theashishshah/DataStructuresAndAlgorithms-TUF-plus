class Solution {
    heapifyDown(nums, index) {
        const leftIndex = 2 * index + 1
        const rightIndex = 2 * index + 2
        let greatest = index
        if (leftIndex < nums.length && nums[leftIndex] > nums[greatest]) greatest = leftIndex
        if (rightIndex < nums.length && nums[rightIndex] > nums[greatest]) greatest = rightIndex

        if (greatest !== index) {
            [nums[greatest], nums[index]] = [nums[index], nums[greatest]]
            this.heapifyDown(nums, greatest)
        }
        return
    }
    minToMaxHeap(nums) {
        const lastParent = Math.floor(nums.length / 2) - 1
        for (let i = lastParent; i >= 0; i--) {
            this.heapifyDown(nums, i)
        }
        return nums
    }
}