class Solution {
    missingNumber(nums) {
        // TC: O(n*n)
        // sc: o(1)
        for (let i = 0; i <= nums.length; i++) {
            let flag = false
            for (let j = 0; j < nums.length; j++) {
                if (nums[j] === i) {
                    flag = true
                }
            }
            if (!flag) return i
        }
    }
}

var missingNumber = function (nums) {
    // TC: O(nlogn) + O(n)
    // SC: O(1)
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (i !== nums[i]) return i
    }
    return nums.length
};


class Solution {
    missingNumber(nums) {
        // TC: O(n) + O(n) == O(n)
        // SC: O(n + 1) == O(n)
        const hash = new Array(nums.length + 1).fill(-1)
        for (let i = 0; i < nums.length; i++) {
            hash[nums[i]] = nums[i]
        }

        for (let i = 0; i < hash.length; i++) {
            if (hash[i] === -1) return i
        }
    }
}