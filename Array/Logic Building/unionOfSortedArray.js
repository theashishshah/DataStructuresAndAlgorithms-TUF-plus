class Solution {
    unionArray(nums1, nums2) {
        // TC: O(N) + O(M) + (n + m) + O((n + m)log(m + n))
        // SC: O(n + m)
        const setOne = new Set(nums1)
        const setTwo = new Set(nums2)
        const ans = Array.from(setOne.union(setTwo))
        return ans.sort((a, b) => a - b)
    }
}