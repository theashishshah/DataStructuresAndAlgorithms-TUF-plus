function sum(nums, target) {
    const n = nums.length
    const set = new Set()
    for (let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++){
            for (let k = j + 1; k < n; k++){
                for (let l = k + 1; l < n; l++){
                    const sum = nums[i] + nums[j] + nums[k] + nums[l]
                    if (sum === target) {
                        const curr = [nums[i], nums[j], nums[k], nums[l]]
                        curr.sort((a, b) => a - b)
                        set.add(curr)
                    }
                }
            }
        }
        return Array.from(set).map(str => str.split(",").map(num => Number(num)))
    }
}


class Solution {
    fourSum(nums, target) {
        const n = nums.length
        const set = new Set()
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const hash = new Set()
                for (let k = j + 1; k < n; k++) {
                    const next = target - (nums[i] + nums[j] + nums[k])
                    if (hash.has(next)) {
                        const ans = [nums[i], nums[j], nums[k], next]
                        ans.sort((a, b) => a - b)
                        set.add(ans.join())
                    }
                    hash.add(nums[k])
                }
            }
        }
        return Array.from(set).map(str => str.split(",").map(num => Number(num)))
    }
}