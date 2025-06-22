class Solution{
    heapifyUp(nums, index) {
        if (index <= 0) return
        const parentIndex = Math.floor((index - 1) / 2)
        if (nums[parentIndex] > nums[index]) {
            // swap them
            [nums[index], nums[parentIndex]] = [nums[parentIndex], nums[index]]
            this.heapifyUp(nums, parentIndex)
        }

        return
    }

    heapifyDown(nums, index) {
        const leftIndex = 2 * index + 1
        const rightIndex = 2 * index + 2

        let smallest = index

        if (leftIndex < nums.length && nums[leftIndex] < nums[smallest]) {
            smallest = leftIndex
        }

        if (rightIndex < nums.length && nums[rightIndex] < nums[smallest]) {
            smallest = rightIndex
        }

        if (smallest !== index) {
            [nums[smallest], nums[index]] = [nums[index], nums[smallest]]
            this.heapifyDown(nums, smallest)
        }
        return
    }

    heapify(nums, index, value) {
        const oldValue = nums[index]
        nums[index] = value
        if (oldValue > value) this.heapifyUp(nums, index)
        else this.heapifyDown(nums, index)

    }
}