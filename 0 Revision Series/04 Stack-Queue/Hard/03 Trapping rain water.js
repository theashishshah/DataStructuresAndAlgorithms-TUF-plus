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


// a sligthly better way: 
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
    const n = height.length
    let leftMax = height[0]
    const rightMax = suffix(height)
    let totalWater = 0
    for (let i = 0; i < n; i++) {
        leftMax = Math.max(leftMax, height[i])
        totalWater += (Math.min(leftMax, rightMax[i]) - height[i])

    }
    return totalWater
};

var trap = function (height) {
    const n = height.length
    let total = 0
    let leftMax = 0, rightMax = 0
    let left = 0
    let right = n - 1
    while (left < right) {
        if (height[left] <= height[right]) {
            if (leftMax > height[left]) {
                total += (leftMax - height[left])
            } else leftMax = height[left]
            left++
        } else {
            if (rightMax > height[right]) {
                total += (rightMax - height[right])
            } else rightMax = height[right]
            right--
        }
    }
    return total
};