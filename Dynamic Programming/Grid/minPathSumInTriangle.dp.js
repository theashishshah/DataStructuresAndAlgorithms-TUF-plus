class Solution {
    findMinPathSum(row, col, tri) {
        const m = tri.length
        if (row === m - 1) return tri[row][col]

        const bottom = this.findMinPathSum(row + 1, col, tri)
        const bottomRight = this.findMinPathSum(row + 1, col + 1, tri)

        return tri[row][col] + Math.min(bottom, bottomRight)
    }
    minTriangleSum(tri) {
        const m = tri.length
        if (m === 1) return tri[0][0]
        return this.findMinPathSum(0, 0, tri)
    }
}


class Solution {
    findMinPathSum(row, col, tri, memo) {
        const m = tri.length
        if (row === m - 1) return tri[row][col]

        if (memo[row][col] !== -1) return memo[row][col]

        const bottom = this.findMinPathSum(row + 1, col, tri, memo)
        const bottomRight = this.findMinPathSum(row + 1, col + 1, tri, memo)

        return memo[row][col] = tri[row][col] + Math.min(bottom, bottomRight)
    }
    minTriangleSum(tri) {
        const m = tri.length
        if (m === 1) return tri[0][0]

        const memo = new Array(m).fill().map(() => [])
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < tri[i].length; j++) {
                memo[i].push(-1)
            }
        }

        return this.findMinPathSum(0, 0, tri, memo)
    }
}

// using tabulation
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (tri) {
    const m = tri.length
    if (m === 1) return tri[0][0]

    const dp = []
    dp.push([])

    dp[0].push(tri[0][0])
    for (let i = 1; i < m; i++) {
        const n = tri[i].length
        dp.push([])
        dp[i].push(Array(n).fill(0))
        for (let j = 0; j < n; j++) {
            const top = j !== n - 1 ? dp[i - 1][j] : Infinity
            const topLeft = j > 0 ? dp[i - 1][j - 1] : Infinity
            dp[i][j] = tri[i][j] + Math.min(top, topLeft)
        }
    }
    return Math.min(...dp[m - 1])
};