class Solution {
    nextLargerElement(arr) {
        const ans = []
        const n = arr.length
        for (let i = 0; i < n; i++) {
            let next = -Infinity
            for (let j = i + 1; j < n; j++) {
                if (arr[i] < arr[j]) {
                    next = arr[j]
                    break
                }
            }
            if (next !== -Infinity) ans.push(next)
            else ans.push(-1)
        }
        return ans
    }
}