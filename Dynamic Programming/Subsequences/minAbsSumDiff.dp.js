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
    minDifference(arr, n) {
        const sum = arr.reduce((pre, curr) => pre + curr, 0)
        const targetSum = Math.floor(sum / 2)
        let min = Infinity
        for (let i = targetSum; i >= 0; i--) {
            // If this targetSum exists then I'll substract this with total sum and
            // this will be my min sum, else I'll try less
            if (this.hasSubsetWithSum(0, i, arr)) {
                const s2 = sum - i
                min = Math.min(min, Math.abs(i - s2))
            }
        }
        return min
    }
}


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
    minDifference(arr, n) {
        const sum = arr.reduce((pre, curr) => pre + curr, 0)
        const targetSum = Math.floor(sum / 2)
        let min = Infinity
        for (let i = targetSum; i >= 0; i--) {
            // If this targetSum exists then I'll substract this with total sum and
            // this will be my min sum, else I'll try less
            const dp = Array(n).fill().map(() => Array(i + 1).fill(-1))
            if (this.hasSubsetWithSum(0, i, arr, dp)) {
                const s2 = sum - i
                min = Math.min(min, Math.abs(i - s2))
            }
        }
        return min
    }
}


// completed using tabulation
class Solution {
    minDifference(arr, n) {
        const sum = arr.reduce((pre, curr) => pre + curr, 0)
        const target = Math.floor(sum / 2)
        const dp = Array(n + 1).fill().map(() => Array(target + 1).fill(false))
        for (let i = 0; i <= n; i++) dp[i][0] = true

        for (let index = n - 1; index >= 0; index--) {
            for (let rem = target; rem > 0; rem--) {
                const include = rem >= arr[index] ? dp[index + 1][rem - arr[index]] : false
                const exclude = dp[index + 1][rem]
                dp[index][rem] = include || exclude
            }
        }

        let min = Infinity
        for (let i = target; i >= 0; i--) {
            if (dp[0][i]) {
                // calculate s2 first because s1 is 'i'
                const s2 = sum - i
                min = Math.min(min, Math.abs(i - s2))
                break;
            }
        }
        return min
    }
}
