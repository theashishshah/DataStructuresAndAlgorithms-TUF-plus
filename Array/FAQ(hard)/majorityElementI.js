class Solution {
    majorityElement(nums) {
        // TC: O(n^2)
        // SC: O(1)
        let maxTime = 0
        let index = -1
        const n = nums.length
        for (let i = 0; i < n; i++) {
            let localMax = 0
            let curr = nums[i]
            for (let j = 0; j < n; j++) {
                if (curr === nums[j]) localMax++
            }
            if (localMax > maxTime) {
                maxTime = localMax
                index = i
            }
        }
        return nums[index]
    }
}

class Solution {
    majorityElement(nums) {
        // TC: O(n)
        // SC: O(n*2)
        const n = nums.length;
        const majorityThresold = Math.floor(n / 2);
        const hash = new Map();
        for (let i = 0; i < n; i++) {
            const num = nums[i];
            const count = (hash.get(num) || 0) + 1;
            hash.set(num, count);
            if (count > majorityThresold) return num;
        }
        return -1;
    }
}


class Solution {
    majorityElement(nums) {
        const n = nums.length
        nums.sort((a, b) => a - b)
        let i = Math.floor(n / 2)
        return nums[i]
    }
}