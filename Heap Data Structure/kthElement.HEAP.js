class Solution {
    heapifyDown(nums, index, n) {
        const leftIndex = 2 * index + 1
        const rightIndex = 2 * index + 2

        let smallest = index
        if (leftIndex < n && nums[leftIndex] < nums[smallest]) smallest = leftIndex
        if (rightIndex < n && nums[rightIndex] < nums[smallest]) smallest = rightIndex

        if (smallest !== index) {
            [nums[smallest], nums[index]] = [nums[index], nums[smallest]]
            this.heapifyDown(nums, smallest, n)
        }
        return

    }
    kthLargestElement(nums, k) {
        const lastParent = Math.floor(nums.length / 2) - 1
        for (let i = lastParent; i >= 0; i--) {
            this.heapifyDown(nums, i, nums.length)
        }

        for (let last = nums.length - 1; last > 0; last--) {
            [nums[last], nums[0]] = [nums[0], nums[last]]
            this.heapifyDown(nums, 0, last)
        }
        return nums[k - 1]
    }
}