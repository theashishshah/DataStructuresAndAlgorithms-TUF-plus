class Solution {
    findEqualSubset(index, target, nums, n) {
        if (target === 0) return true
        if (index === n || target < 0) return false

        const take = this.findEqualSubset(index + 1, target - nums[index], nums, n)
        const notTake = this.findEqualSubset(index + 1, target, nums, n)

        return take || notTake
    }

    equalPartition(n, nums) {
        let target = 0
        for (let i = 0; i < n; i++) {
            target += nums[i]
        }
        if (target % 2 !== 0) return false
        return this.findEqualSubset(0, target / 2, nums, n)
    }
}
