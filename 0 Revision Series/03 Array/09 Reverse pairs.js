class Solution {
    reversePairs(nums) {
        const n = nums.length
        let count = 0
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (nums[i] > 2 * nums[j]) count++
            }
        }
        return count
    }
}



/**
 * @param {number[]} nums
 * @return {number}
 */
function merge(nums, low, mid, high) {
    let left = low
    let right = mid + 1
    let count = 0
    while (left <= mid && right <= high) {
        if (nums[left] > 2 * nums[right]) {
            count += (mid - left + 1)
            right++
        } else left++
    }

    const temp = []
    left = low
    right = mid + 1
    while (left <= mid && right <= high) {
        if (nums[left] <= nums[right]) temp.push(nums[left++])
        else temp.push(nums[right++])
    }

    while (left <= mid) temp.push(nums[left++])
    while (right <= high) temp.push(nums[right++])

    for (let i = low; i <= high; i++) {
        nums[i] = temp[i - low]
    }

    return count
}
function helper(nums, low, high) {
    if (low >= high) return 0
    let count = 0
    const mid = Math.floor((low + high) / 2)
    count += helper(nums, low, mid)
    count += helper(nums, mid + 1, high)
    count += merge(nums, low, mid, high)
    return count
}

var reversePairs = function (nums) {
    const n = nums.length
    return helper(nums, 0, n - 1)
};