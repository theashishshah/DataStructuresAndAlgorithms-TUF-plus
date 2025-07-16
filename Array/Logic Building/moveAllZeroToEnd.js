class Solution {
    moveZeroes(nums) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === 0) {
                for (let j = i + 1; j < nums.length; j++) {
                    if (nums[j] !== 0) {
                        // swap and break the inner loop
                        [nums[i], nums[j]] = [nums[j], nums[i]]
                        break;
                    }
                }
            }

        }
        return nums
    }
}


