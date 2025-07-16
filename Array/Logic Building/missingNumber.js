var missingNumber = function (nums) {
    // TC: O(nlogn) + O(n)
    // SC: O(1)
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i !== nums[i]) return i
    }
    return nums.length
};