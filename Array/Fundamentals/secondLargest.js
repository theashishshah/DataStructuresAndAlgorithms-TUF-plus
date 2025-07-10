class Solution {
    secondLargestElement(nums) {
        if (nums.length === 1) return -1
        nums.sort((a, b) => a - b)

        const largest = nums[nums.length - 1]
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] < largest) return nums[i]
        }
        return -1
    }
} // brute force solution


// better: O(2N)
class Solution {
    secondLargestElement(nums) {
        // better 
        // TC: O(N + N) = O(2N)
        // SC: O(1)
        if (nums.length === 1) return -1
        let largest = -Infinity
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > largest) largest = nums[i]
        }

        let second = -Infinity
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > second && nums[i] !== largest) {
                second = nums[i]
            }
        }

        if (second === -Infinity) return -1
        else return second
    }
}