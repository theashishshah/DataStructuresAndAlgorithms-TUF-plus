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
    equalPartition(n, arr) {
        const sum = arr.reduce((prev, curr) => prev + curr, 0)
        if (sum % 2 !== 0) return false
        const target = sum / 2
        return this.hasSubsetWithSum(0, target, arr)
    }
}

// solve using memoization
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
    equalPartition(n, arr) {
        const sum = arr.reduce((prev, curr) => prev + curr, 0)
        if (sum % 2 !== 0) return false
        const target = sum / 2
        const dp = Array(n).fill().map(() => Array(target + 1).fill(-1))
        return this.hasSubsetWithSum(0, target, arr, dp)
    }
}

// using tabulation
/**
 * @param {number[]} arr
 * @returns {boolean}
 */

class Solution {
    equalPartition(arr) {
        const n = arr.length
        const sum = arr.reduce((prev, curr) => prev + curr, 0)
        if (sum % 2 !== 0) return false
        const target = sum / 2
        const dp = Array(n + 1).fill().map(() => Array(target + 1).fill(false))

        for (let index = 0; index <= n; index++) dp[index][0] = true
        for (let index = n - 1; index >= 0; index--) {
            for (let rem = target; rem > 0; rem--) {
                const include = rem >= arr[index] ? dp[index + 1][rem - arr[index]] : false
                const exclude = dp[index + 1][rem]
                dp[index][rem] = include || exclude
            }
        }
        return dp[0][target]
    }
}
