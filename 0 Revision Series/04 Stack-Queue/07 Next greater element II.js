class Solution {
    nextGreaterElements(arr) {
        const n = arr.length
        const ans = Array(n).fill(-1)
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n + i; j++) {
                let index = j % n
                if (arr[i] < arr[index]) {
                    ans[i] = arr[index]
                    break
                }
            }
        }
        return ans
    }
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const n = nums.length
    const ans = Array(n).fill(-1)
    const stack = []
    for (let i = 2 * n - 1; i >= 0; i--) {
        const curr = nums[i % n]
        let len = stack.length
        while (len > 0 && stack[len - 1] <= curr) {
            stack.pop()
            len--
        }

        // Update to real index
        if (i < n) {
            len = stack.length
            if (len > 0) {
                ans[i] = stack[len - 1]
            }
        }
        stack.push(curr)
    }
    return ans
};