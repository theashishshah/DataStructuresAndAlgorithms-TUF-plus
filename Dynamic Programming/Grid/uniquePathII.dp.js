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

// using memoization

class Solution {
    findPathHelper(row, col, matrix, memo) {
        if (row === 0 && col === 0) return 1
        if (row < 0 || col < 0) return 0
        if (matrix[row][col] === 1) return 0

        if (memo[row][col] !== -1) return memo[row][col]

        const up = this.findPathHelper(row - 1, col, matrix, memo)
        const left = this.findPathHelper(row, col - 1, matrix, memo)

        return memo[row][col] = up + left
    }
    uniquePathsWithObstacles(matrix) {

        const m = matrix.length
        const n = matrix[0].length

        if (matrix[0][0] === 1 || matrix[m - 1][n - 1] === 1) return 0
        const memo = Array.from({ length: m }, () => Array(n).fill(-1))
        return this.findPathHelper(m - 1, n - 1, matrix, memo)
    }
}

// using tabulation

class Solution {

    uniquePathsWithObstacles(matrix) {
        // TC: O(m * n)
        // SC: O(m * n)
        const m = matrix.length
        const n = matrix[0].length

        if (matrix[0][0] === 1 || matrix[m - 1][n - 1] === 1) return 0
        const dp = Array.from({ length: m }, () => Array(n).fill(-1))

        for (let row = 0; row < m; row++) {
            for (let col = 0; col < n; col++) {
                if (matrix[row][col] === 1) continue
                if (row === 0 && col === 0) dp[row][col] = 1
                else {
                    const up = row > 0 && dp[row - 1][col] !== -1 ? dp[row - 1][col] : 0
                    const left = col > 0 && dp[row][col - 1] !== -1 ? dp[row][col - 1] : 0
                    dp[row][col] = up + left
                }
            }
        }
        return dp[m - 1][n - 1]
    }
}