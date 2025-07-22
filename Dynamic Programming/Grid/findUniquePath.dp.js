class Solution {
    uniquePathsFinder(row, col, m, n, directions) {
        if (row === m - 1 && col === n - 1) return 1
        let count = 0
        // explore the neighbours
        for (const [dx, dy] of directions) {
            const nrow = dx + row
            const ncol = dy + col
            // check if you can go either bottom or right
            if (nrow < m && ncol < n) {
                count += this.uniquePathsFinder(nrow, ncol, m, n, directions)
            }
        }

        return count
    }
    uniquePaths(m, n) {
        // brute force: TC: O(2^(m + n))
        // SC: O(m+n)
        if (n === 1 && m === 1) return 0
        const directions = [[1, 0], [0, 1]]
        return this.uniquePathsFinder(0, 0, m, n, directions)
    }
}

class Solution {
    uniquePathsFinder(row, col, m, n, directions, memo) {
        if (row === 0 && col === 0) return 1

        if (memo[row][col] !== -1) return memo[row][col]

        let count = 0
        // explore the neighbours
        for (const [dx, dy] of directions) {
            const nrow = dx + row
            const ncol = dy + col
            // check if you can go either bottom or right
            if (nrow >= 0 && ncol >= 0) {
                count += this.uniquePathsFinder(nrow, ncol, m, n, directions, memo)
            }
        }

        return memo[row][col] = count
    }
    uniquePaths(m, n) {
        const memo = Array.from({ length: m }, () => Array(n).fill(-1))
        const directions = [[-1, 0], [0, -1]]
        return this.uniquePathsFinder(m - 1, n - 1, m, n, directions, memo)
    }
}


// tabulation
class Solution {
    uniquePaths(m, n) {
        // TC: O(m + n) 
        // SC: O(n + m)
        const dp = Array.from({ length: m }, () => Array(n).fill(-1))
        for (let row = 0; row < m; row++) {
            for (let col = 0; col < n; col++) {
                if (row === 0 && col === 0) dp[row][col] = 1
                else {
                    // check up and down left if they exist else say you're 0
                    const up = row > 0 ? dp[row - 1][col] : 0
                    const left = col > 0 ? dp[row][col - 1] : 0
                    dp[row][col] = up + left
                }
            }
        }
        return dp[m - 1][n - 1]
    }
}


// space optimization
