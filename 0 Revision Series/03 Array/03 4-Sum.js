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

class Solution {
    fourSum(nums, target) {
        const n = nums.length
        const ans = []
        nums.sort((a, b) => a - b)
        for (let i = 0; i < n; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue
            for (let j = i + 1; j < n; j++) {
                if (j !== i + 1 && nums[j] === nums[j - 1]) continue
                let left = j + 1
                let right = n - 1
                while (left < right) { // to avoid the duplicates
                    const sum = nums[i] + nums[j] + nums[left] + nums[right]
                    if (sum === target) {
                        ans.push([nums[i], nums[j], nums[left], nums[right]])
                        left++
                        right--
                        // now avoid the same elements using again
                        while (left < right && nums[left] === nums[left - 1]) left++
                        while (left < right && nums[right] === nums[right + 1]) right--
                    } else if (sum < target) left++
                    else right--
                }
            }
        }
        return ans
    }
}