class Solution {
    threeSum(nums) {
        const n = nums.length
        const hash = new Set()
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        const curr = [nums[i], nums[j], nums[k]]
                        curr.sort((a, b) => a - b)
                        hash.add(curr.join())
                    }
                }
            }
        }
        return Array.from(hash).map(str => str.split(",").map(num => Number(num)))
    }
}

class Solution {
    threeSum(nums) {
        const n = nums.length
        const set = new Set()
        for (let i = 0; i < n; i++) {
            const hash = new Set()
            for (let j = i + 1; j < n; j++) {
                const next = -(nums[i] + nums[j])
                if (hash.has(next)) {
                    const curr = [next, nums[i], nums[j]]
                    curr.sort((a, b) => a - b)
                    set.add(curr.join())
                }
                hash.add(nums[j])
            }
        }
        return Array.from(set).map(str => str.split(",").map(num => Number(num)))
    }
}


class Solution {
    threeSum(nums) {
        const n = nums.length
        const ans = []
        nums.sort((a, b) => a - b)
        for (let i = 0; i < n; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue
            let left = i + 1
            let right = n - 1
            while (left < right) { // I'll not take left <= right, cuz it will lead to duplicates
                const currSum = nums[i] + nums[left] + nums[right]
                if (currSum === 0) {
                    ans.push([nums[i], nums[left], nums[right]])
                    left++
                    right--
                    // avoid the duplicates
                    while (left < right && nums[left] === nums[left - 1]) left++
                    while (left < right && nums[right] === nums[right + 1]) right--
                } else if (currSum < 0) left++
                else right--
            }
        }
        return ans
    }
}