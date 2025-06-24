class Solution {
    heapifyDown(nums, index, n) {
        const leftIndex = 2 * index + 1;
        const rightIndex = 2 * index + 2;
        let greatest = index;
        if (leftIndex < n && nums[leftIndex] > nums[greatest]) greatest = leftIndex;
        if (rightIndex < n && nums[rightIndex] > nums[greatest])
            greatest = rightIndex;
        if (greatest !== index) {
            [nums[greatest], nums[index]] = [nums[index], nums[greatest]];
            this.heapifyDown(nums, greatest, n);
        }
    }
    heapSort(nums) {
        const n = nums.length;

        // Step 1: Build MaxHeap
        const lastParent = Math.floor(n / 2) - 1;
        for (let i = lastParent; i >= 0; i--) {
            this.heapifyDown(nums, i, n);
        }

        // Step 2: Sort the heap
        for (let last = n - 1; last > 0; last--) {
            [nums[0], nums[last]] = [nums[last], nums[0]];
            this.heapifyDown(nums, 0, last);
        }
        return nums;
    }
}
  