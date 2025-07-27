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

// slightly better solution from n^4 -> n^3
class Solution {
    fourSum(nums, target) {
        const n = nums.length
        const set = new Set()
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const hash = new Set()
                for (let k = j + 1; k < n; k++) {
                    const fourth = target - (nums[i] + nums[j] + nums[k])
                    if (hash.has(fourth)) {
                        const temp = [fourth, nums[i], nums[j], nums[k]]
                        temp.sort((a, b) => a - b)
                        set.add(temp.join())
                    }
                    hash.add(nums[k])
                }
            }
        }
        // ["1,-2,24"] => [["1", "-2", "24"]]
        return Array.from(set).map(str => str.split(",").map(num => parseInt(num)))
    }
}

class Solution {
    fourSum(nums, target) {
        const n = nums.length
        nums.sort((a, b) => a - b)
        const ans = []
        for (let i = 0; i < n; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue
            for (let j = i + 1; j < n; j++) {
                if (j !== i + 1 && nums[j] === nums[j - 1]) continue
                let left = j + 1
                let right = n - 1
                while (left < right) {
                    const sum = nums[i] + nums[j] + nums[left] + nums[right]
                    if (sum === target) {
                        ans.push([nums[i], nums[j], nums[left], nums[right]])
                        left++
                        right--
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