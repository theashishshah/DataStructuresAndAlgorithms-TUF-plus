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