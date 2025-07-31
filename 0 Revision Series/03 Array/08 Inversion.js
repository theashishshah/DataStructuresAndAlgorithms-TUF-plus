/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    merge(nums, low, mid, high) {
        let left = low
        let right = mid + 1
        const temp = []
        let count = 0
        while (left <= mid && right <= high) {
            if (nums[left] <= nums[right]) temp.push(nums[left++])
            else {
                temp.push(nums[right++])
                count += (mid - left + 1)
            }
        }
        while (left <= mid) temp.push(nums[left++])
        while (right <= high) temp.push(nums[right++])

        for (let i = low; i <= high; i++) {
            nums[i] = temp[i - low]
        }
        return count
    }

    mergeSortHelper(nums, low, high) {
        let count = 0
        if (low >= high) return count
        const mid = Math.floor((low + high) / 2)
        count += this.mergeSortHelper(nums, low, mid)
        count += this.mergeSortHelper(nums, mid + 1, high)
        count += this.merge(nums, low, mid, high)
        return count
    }
    inversionCount(arr) {
        // code here
        const n = arr.length
        return this.mergeSortHelper(arr, 0, n - 1)

    }
}