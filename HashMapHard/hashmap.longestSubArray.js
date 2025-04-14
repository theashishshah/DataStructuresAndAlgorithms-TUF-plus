function findSum(start, end, nums){
    let  sum = 0
    for(let i = start; i <= end; i++){
        sum += nums[i]
    }

    return sum
}

function longestSubarray(nums, k) {
    if (nums.length === 1 && nums[0] === k) {
        return 1
    }
    let longestSubArrayLength = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            const sum = findSum(i, j, nums)
            if (sum === k) {
                const tempLen = j - i + 1
                longestSubArrayLength = Math.max(tempLen, longestSubArrayLength)
                
            }
        }
    }
    return longestSubArrayLength
}
console.log(longestSubarray([1,3,4,-8,0], 0))