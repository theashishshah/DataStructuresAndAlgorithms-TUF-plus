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


// using memoization
/**
 * @param {number[][]} matrix
 * @return {number}
 */

function getMinPath(row, col, matrix, memo) {
    const m = matrix.length
    const n = matrix[0].length
    // handle when you go off the matrix
    if (col < 0 || col >= n || row >= m) return Infinity


    if (row === m - 1) return matrix[row][col]
    if (memo[row][col] !== -1) return memo[row][col]


    const leftBtm = getMinPath(row + 1, col - 1, matrix, memo)
    const btm = getMinPath(row + 1, col, matrix, memo)
    const rightBtm = getMinPath(row + 1, col + 1, matrix, memo)
    return memo[row][col] = matrix[row][col] + Math.min(leftBtm, btm, rightBtm)

}
var minFallingPathSum = function (matrix) {
    const m = matrix.length
    const n = matrix[0].length
    if (m === 1) return Math.min(...matrix[0])

    const memo = Array.from({ length: m }, () => Array(n).fill(-1))
    let result = Infinity
    for (let i = 0; i < n; i++) {
        result = Math.min(result, getMinPath(0, i, matrix, memo))
    }
    return result
};