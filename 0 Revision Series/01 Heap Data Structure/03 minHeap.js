class Solution {
    heapifyDown(index, nums) {
        const n = nums.length
        const leftChild = 2 * index + 1
        const rightChild = 2 * index + 2
        let smallest = index
        if (leftChild < n && nums[leftChild] < nums[smallest]) smallest = leftChild
        if (rightChild < n && nums[rightChild] < nums[smallest]) smallest = rightChild
        if (index !== smallest) {
            [nums[index], nums[smallest]] = [nums[smallest], nums[index]]
            this.heapifyDown(smallest, nums)
        }
    }
    buildMinHeap(nums) {
        // TC: O(n/2) + log(n)
        // SC: log(n)
        const n = nums.length
        const start = Math.floor(n / 2) - 1
        for (let i = start; i >= 0; i--) {
            this.heapifyDown(i, nums)
        }
    }
}