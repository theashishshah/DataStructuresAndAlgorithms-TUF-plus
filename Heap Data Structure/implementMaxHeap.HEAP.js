class Solution {
    constructor() {
        this.heap = []
        this.count = 0
    }

    initializeHeap() {
        this.heap = []
        this.count = 0
    }

    insert(key) {
        this.heap.push(key)
        this.heapifyUp(this.heap, this.count)
        this.count++
    }

    changeKey(index, new_val) {
        const oldValue = this.heap[index]
        this.heap[index] = new_val
        if (new_val < oldValue) this.heapifyDown(this.heap, index)
        else this.heapifyUp(this.heap, index)
    }

    extractMax() {
        [this.heap[0], this.heap[this.count - 1]] = [this.heap[this.count - 1], this.heap[0]]
        this.heap.pop()
        this.count--
        if (this.count > 0) {
            this.heapifyDown(this.heap, 0)
        }
    }

    isEmpty() {
        return this.count === 0
    }

    getMax() {
        return this.heap[0]
    }

    heapSize() {
        return this.count
    }
    // heapify algorithms from max-heap
    heapifyUp(nums, index) {
        if (index <= 0) return
        const parentIndex = Math.floor((index - 1) / 2)
        if (nums[parentIndex] < nums[index]) {
            [nums[parentIndex], nums[index]] = [nums[index], nums[parentIndex]]
            this.heapifyUp(nums, parentIndex)
        }
        return
    }

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
}
