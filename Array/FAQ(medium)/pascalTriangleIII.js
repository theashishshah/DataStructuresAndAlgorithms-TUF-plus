class Solution {
    getRow(row) {
        // for 1-based Indexing
        const ans = []
        ans.push(1)
        for (let i = 1; i <= row; i++) {
            const prev = ans[i - 1]
            const curr = (prev * (row - i + 1)) / i
            ans.push(curr)
        }
        return ans
    }
    pascalTriangleIII(n) {
        const ans = []
        for (let i = 0; i < n; i++) {
            ans.push(this.getRow(i))
        }
        return ans
    }
}