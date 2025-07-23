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