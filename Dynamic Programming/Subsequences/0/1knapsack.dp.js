class Solution {
    getMaxWeight(index, val, wt, bagSize){
        const n = val.length
        if(index === n - 1){
            if(bagSize >= wt[index]) return val[index]
            else return 0
        }
        let include = 0
        if(bagSize >= wt[index]){
            include += val[index] + this.getMaxWeight(index + 1, val, wt, bagSize - wt[index])
        }
        let exclude = this.getMaxWeight(index + 1, val, wt, bagSize)

        return Math.max(include, exclude)
    }
    knapsack01(wt, val, n, W) {
        return this.getMaxWeight(0, val, wt, W)
    }
}


// using memoization
class Solution {
    getMaxWeight(index, val, wt, bagSize, dp) {
        const n = val.length
        if (index === n - 1) {
            if (bagSize >= wt[index]) return val[index]
            else return 0
        }
        if (dp[index][bagSize] !== -1) return dp[index][bagSize]
        let include = 0
        if (bagSize >= wt[index]) {
            include += val[index] + this.getMaxWeight(index + 1, val, wt, bagSize - wt[index], dp)
        }
        let exclude = this.getMaxWeight(index + 1, val, wt, bagSize, dp)

        return dp[index][bagSize] = Math.max(include, exclude)
    }
    knapsack01(wt, val, n, W) {
        const dp = Array(n).fill().map(() => Array(W + 1).fill(-1))
        return this.getMaxWeight(0, val, wt, W, dp)
    }
}

// using tabulation
/**
 * @param {number} W
 * @param {number[]} val
 * @param {number[]} wt
 * @returns {number}
 */

class Solution {
    knapsack(W, val, wt) {
        // code here
        const n = val.length
        const dp = Array(n).fill().map(() => Array(W + 1).fill(0))

        for (let cap = 0; cap <= W; cap++) {
            // here i'm defining small bags, if these bags size is greater or equal to the weight of last item, then i'll take else not.
            if (cap >= wt[n - 1]) dp[n - 1][cap] = val[n - 1]
        }

        for (let i = n - 2; i >= 0; i--) {
            for (let j = 0; j <= W; j++) {
                let include = 0
                if (wt[i] <= j) {
                    include = val[i] + dp[i + 1][j - wt[i]]
                }
                let exclude = dp[i + 1][j]
                dp[i][j] = Math.max(exclude, include)
            }
        }
        return dp[0][W]
    }
}
