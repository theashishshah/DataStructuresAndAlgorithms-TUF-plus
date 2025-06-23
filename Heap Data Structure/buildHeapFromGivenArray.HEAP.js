class Solution {
    heapifyDown(nums, index) {
        const leftIndex = 2 * index + 1
        const rightIndex = 2 * index + 2
        let smallest = index
        if (leftIndex < nums.length && nums[leftIndex] < nums[smallest]) smallest = leftIndex
        if (rightIndex < nums.length && nums[rightIndex] < nums[smallest]) smallest = rightIndex

        if (smallest !== index) {
            [nums[index], nums[smallest]] = [nums[smallest], nums[index]]
            this.heapifyDown(nums, smallest)
        }

        return
    }


    buildMinHeap(nums) {
        const startIndex = Math.floor((nums.length) / 2) - 1
        for (let i = startIndex; i >= 0; i--) {
            this.heapifyDown(nums, i)
        }
        return nums
    }
}