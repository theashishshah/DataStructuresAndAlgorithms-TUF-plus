function prefix(nums) {
    const n = nums.length
    const ans = new Array(n).fill(0)
    ans[0] = nums[0]
    for (let i = 1; i < n; i++) {
        ans[i] = Math.max(nums[i], ans[i - 1])
    }
    return ans
}

function suffix(nums) {
    const n = nums.length
    const ans = new Array(n).fill(0)
    ans[n - 1] = nums[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        ans[i] = Math.max(nums[i], ans[i + 1])
    }
    return ans
}
var trap = function (height) {
    // TC: O(N) + O(n) + O(n)= O(n)
    // SC: O(n) + O(n) + O(n) = O(n)
    const n = height.length
    const leftMax = prefix(height)
    const rightMax = suffix(height)
    let totalWater = 0
    for (let i = 0; i < n; i++) {
        totalWater += (Math.min(leftMax[i], rightMax[i]) - height[i])
    }
    return totalWater
};