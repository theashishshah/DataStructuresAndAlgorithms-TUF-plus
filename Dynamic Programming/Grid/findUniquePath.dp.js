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