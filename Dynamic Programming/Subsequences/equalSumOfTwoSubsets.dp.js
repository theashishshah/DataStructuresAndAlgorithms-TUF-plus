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

