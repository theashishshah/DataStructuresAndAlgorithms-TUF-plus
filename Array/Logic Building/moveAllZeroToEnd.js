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


class Solution {
    moveZeroes(nums) {
        let insertPos = 0;  // Points to where the next non-zero should go

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                [nums[i], nums[insertPos]] = [nums[insertPos], nums[i]];
                insertPos++;
            }
        }

        return nums;
    }
}
