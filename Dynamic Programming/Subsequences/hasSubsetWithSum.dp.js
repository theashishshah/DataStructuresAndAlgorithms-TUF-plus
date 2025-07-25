class Solution {
    hasSubsetWithSum(currentIndex, remainingSum, numbers) {
        const n = numbers.length
        if (remainingSum === 0) return true
        if (currentIndex === n || remainingSum < 0) return false

        // include the current array's value
        const include = this.hasSubsetWithSum(
            currentIndex + 1, remainingSum - numbers[currentIndex],
            numbers
        )

        // don't include the current array's value
        const exclude = this.hasSubsetWithSum(currentIndex + 1, remainingSum, numbers)

        return include || exclude
    }
    isSubsetSum(arr, target) {
        return this.hasSubsetWithSum(0, target, arr)
    }
}

// using memoization
class Solution {
    hasSubsetWithSum(currentIndex, remainingSum, numbers, dp) {
        const n = numbers.length
        if (remainingSum === 0) return true
        if (currentIndex === n || remainingSum < 0) return false

        if (dp[currentIndex][remainingSum] !== -1) return dp[currentIndex][remainingSum]
        // include the current array's value
        const include = this.hasSubsetWithSum(
            currentIndex + 1, remainingSum - numbers[currentIndex],
            numbers, dp
        )

        // don't include the current array's value
        const exclude = this.hasSubsetWithSum(currentIndex + 1, remainingSum, numbers, dp)

        return dp[currentIndex][remainingSum] = include || exclude
    }
    isSubsetSum(arr, target) {
        const n = arr.length
        const dp = Array(n).fill().map(() => Array(target + 1).fill(-1))
        return this.hasSubsetWithSum(0, target, arr, dp)
    }
}

// using tabulation
class Solution {
    isSubsetSum(arr, target) {
        const n = arr.length
        const dp = Array(n + 1).fill().map(() => Array(target + 1).fill(false))
        for (let i = 0; i <= n; i++) {
            dp[i][0] = true
        }

        // changing parameters are: index (0 -> n - 1), remainingSum: 1 -> target
        for (let index = n - 1; index >= 0; index--) {
            for (let remainingSum = target; remainingSum > 0; remainingSum--) {
                const include = remainingSum >= arr[index] ? dp[index + 1][remainingSum - arr[index]] : false
                const exclude = dp[index + 1][remainingSum]
                dp[index][remainingSum] = include || exclude
            }
        }
        return dp[0][target]
    }
}

// space optimized solution
class Solution {
    isSubsetSum(arr, target) {
        const n = arr.length
        // space optimized Solution
        let prev = Array(target + 1).fill(false)
        prev[0] = true

        // changing parameters are: index (0 -> n - 1), target: 1 -> target
        for (let index = n - 1; index >= 0; index--) {
            const curr = new Array(target + 1).fill(false)
            curr[0] = true
            for (let tar = target; tar > 0; tar--) {
                const include = tar >= arr[index] ? prev[tar - arr[index]] : false
                const exclude = prev[tar]
                curr[tar] = include || exclude
            }
            prev = curr
        }
        return prev[target]
    }
}