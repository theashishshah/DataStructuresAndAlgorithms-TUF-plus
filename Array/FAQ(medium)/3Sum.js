class Solution {
    threeSum(nums) {
        const n = nums.length
        // Take a set DS to store the triplet as string 
        const set = new Set()
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        let temp = [nums[i], nums[j], nums[k]]
                        temp.sort((a, b) => a - b)
                        set.add(temp.join(","))
                    }
                }
            }
        }
        return Array.from(set).map((str) => str.split(",").map((num) => parseInt(num)))
    }
}