class Solution {
    fourSum(nums, target) {
        // Brute force to find the quadruplets
        const n = nums.length
        const set = new Set()
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    for (let l = k + 1; l < n; l++) {
                        const sum = nums[i] + nums[j] + nums[k] + nums[l]
                        if (sum === target) {
                            const temp = [nums[i], nums[j], nums[k], nums[l]]
                            temp.sort((a, b) => a - b)
                            set.add(temp.join())
                        }
                    }
                }
            }
        }

        return Array.from(set).map(str => str.split(",").map(num => parseInt(num)))
    }
}