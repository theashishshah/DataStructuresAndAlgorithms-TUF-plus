function sortColors() {
    // brute force would be apply any sorting algorithm
    // TC: nlog(n)
    // SC: depends upon which one you're taking into consideration
}

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

var sortColors = function (nums) {
    // We can still optimize space
    // TC: O(n)
    // SC: O(1)
    const n = nums.length
    let zero = 0
    let one = 0
    let two = 0
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) zero++
        else if (nums[i] === 1) one++
        else two++
    }
    nums.length = 0
    for (let i = 0; i < zero; i++) nums.push(0)
    for (let i = 0; i < one; i++) nums.push(1)
    for (let i = 0; i < two; i++) nums.push(2)
    return nums
};