class Solution {
    nextGreaterElements(arr) {
        const n = arr.length
        const ans = Array(n).fill(-1)
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n + i; j++) {
                let index = j % n
                if (arr[i] < arr[index]) {
                    ans[i] = arr[index]
                    break
                }
            }
        }
        return ans
    }
}