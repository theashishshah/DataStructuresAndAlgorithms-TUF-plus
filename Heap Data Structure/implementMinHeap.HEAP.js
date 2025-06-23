class Solution {
    constructor() {
        this.heap = []
        this.count = 0
    }

    initializeHeap() {
        this.heap = []
        this.count = 0;
    }

    insert(key) {
        this.heap.push(key)
        this.heapifyUp(this.heap, this.count)
        this.count++
        return
    }

    changeKey(index, new_val) {
        const oldValue = this.heap[index]
        this.heap[index] = new_val
        if (new_val < oldValue) this.heapifyUp(this.heap, index)
        else this.heapifyDown(this.heap, index)
    }

    extractMin() {

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

    getMin() {
        return this.heap[0]
    }

    heapSize() {
        return this.count
    }


    heapifyUp(nums, index) {
        if (index <= 0) return
        const parentIndex = Math.floor((index - 1) / 2)
        if (nums[parentIndex] > nums[index]) {
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
}
