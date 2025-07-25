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
