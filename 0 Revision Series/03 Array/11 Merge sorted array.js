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