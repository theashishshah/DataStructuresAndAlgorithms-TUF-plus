class Solution {
    sumSubarrayMins(nums) {
        const n = nums.length
        let sum = 0
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                const temp = []
                for (let k = i; k <= j; k++) {
                    temp.push(nums[k])

                }
                sum += Math.min(...temp)
            }
        }
        return sum
    }
}


var sumSubarrayMins = function (nums) {
    const n = nums.length
    let sum = 0
    for (let i = 0; i < n; i++) {
        const curr = []
        for (let j = i; j < n; j++) {
            curr.push(nums[j])
            sum += Math.min(...curr)
            sum = sum % (1e9 + 7)
        }
    }
    return sum % (1e9 + 7)
};