var sortColors = function (nums) {
    // TC: O(n) + O(len(0) + len(1) + len(2))
    // SC: O(n)
    const zeros = []
    const ones = []
    const twos = []
    const n = nums.length
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) zeros.push(nums[i])
        else if (nums[i] === 1) ones.push(nums[i])
        else twos.push(nums[i])
    }
    nums.length = 0
    for (let i = 0; i < zeros.length; i++) nums.push(0)
    for (let i = 0; i < ones.length; i++) nums.push(1)
    for (let i = 0; i < twos.length; i++) nums.push(2)
    return nums
};