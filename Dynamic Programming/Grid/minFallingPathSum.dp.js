class Solution {
    minPathSum(row, col, m, n, matrix) {
        if (row >= 0 && row < m && col >= 0 && col < n && row === m - 1) return matrix[row][col]

        if (row < 0 || col < 0 ||
            row >= m || col >= n
        ) return Infinity

        const btmLeft = matrix[row][col] + this.minPathSum(row + 1, col - 1, m, n, matrix)
        const btm = matrix[row][col] + this.minPathSum(row + 1, col, m, n, matrix)
        const btmRight = matrix[row][col] + this.minPathSum(row + 1, col + 1, m, n, matrix)

        return Math.min(btm, btmLeft, btmRight)
    }
    minFallingPathSum(matrix) {
        const m = matrix.length
        const n = matrix[0].length
        if (m === 1) return Math.min(...matrix[0])

        let min = Infinity
        for (let i = 0; i < n; i++) {
            // console.log("Min value", min)
            min = Math.min(min, this.minPathSum(0, i, m, n, matrix))
        }
        return min
    }
}
