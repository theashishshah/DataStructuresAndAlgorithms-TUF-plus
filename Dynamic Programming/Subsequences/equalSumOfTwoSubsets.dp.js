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
