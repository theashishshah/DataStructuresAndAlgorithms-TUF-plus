class Solution {
    findPathHelper(row, col, matrix) {
        if (row === 0 && col === 0) return 1
        if (row < 0 || col < 0) return 0
        if (matrix[row][col] === 1) return 0

        const up = this.findPathHelper(row - 1, col, matrix)
        const left = this.findPathHelper(row, col - 1, matrix)

        return up + left
    }
    uniquePathsWithObstacles(matrix) {
        // TC: O(2^(m*n))
        // SC: O(m + n) 
        const m = matrix.length
        const n = matrix[0].length

        if (matrix[0][0] === 1 || matrix[m - 1][n - 1] === 1) return 0

        return this.findPathHelper(m - 1, n - 1, matrix)
    }
}

