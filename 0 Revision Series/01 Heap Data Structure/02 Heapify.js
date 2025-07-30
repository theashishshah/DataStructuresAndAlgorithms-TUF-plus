class Solution {
    heapifyUp(index, nums) {
        if (index <= 0) return
        const parentIndex = Math.floor((index - 1) / 2)
        if (nums[parentIndex] > nums[index]) {
            [nums[index], nums[parentIndex]] = [nums[parentIndex], [nums[index]]]
            this.heapifyUp(parentIndex, nums)
        }
    }

    heapifyDown(index, nums) {
        const leftChild = 2 * index + 1
        const rightChild = 2 * index + 2
        let smallest = index
        if (leftChild < nums.length && nums[leftChild] < nums[smallest]) smallest = leftChild
        if (rightChild < nums.length && nums[rightChild] < nums[smallest]) smallest = rightChild

        if (smallest !== index) {
            [nums[smallest], nums[index]] = [nums[index], nums[smallest]]
            this.heapifyDown(smallest, nums)
        }
    }
    heapify(nums, ind, val) {
        // TC: log(n) 
        // SC: log(n)
        const oldValue = nums[ind]
        nums[ind] = val
        if (oldValue > nums[ind]) this.heapifyUp(ind, nums)
        else if (oldValue < nums[ind]) this.heapifyDown(ind, nums)

    }
}