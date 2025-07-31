class Solution {
    merge(nums1, m, nums2, n) {
        // If I was allowed to use the extra space then
        let left = 0
        let right = 0
        const temp = []
        while (left < m && right < n) {
            if (nums1[left] <= nums2[right]) temp.push(nums1[left++])
            else temp.push(nums2[right++])
        }

        // copy the rest
        while (left < m) temp.push(nums1[left++])
        while (right < n) temp.push(nums2[right++])

        // copy into nums1
        let len = m + n
        for (let i = 0; i < len; i++) {
            nums1[i] = temp[i]
        }
        return nums1
    }
}

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let left = m - 1
    let right = n - 1
    let actual = m + n - 1
    while (left >= 0 && right >= 0) {
        if (nums1[left] < nums2[right]) {
            nums1[actual--] = nums2[right--]
        } else nums1[actual--] = nums1[left--]
    }
    while (right >= 0) nums1[actual--] = nums2[right--]
    return nums1
};