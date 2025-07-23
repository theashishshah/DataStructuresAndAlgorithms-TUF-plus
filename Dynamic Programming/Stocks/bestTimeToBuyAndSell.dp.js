var maxProfit = function (arr) {
    // TC: O(n^2)
    // SC: O(1)
    const n = arr.length
    if (n === 1) return 0
    let max = 0
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[j] - arr[i] > 0) {
                max = Math.max(max, arr[j] - arr[i])
            }
        }
    }
    return max
};

// optimized solution
class Solution {
    stockBuySell(arr, n) {
        if (n === 1) return 0

        let max = 0
        let min = arr[0]
        for (let i = 1; i < n; i++) {
            max = Math.max(max, arr[i] - min)
            min = Math.min(min, arr[i])
        }
        return max
    }
}
