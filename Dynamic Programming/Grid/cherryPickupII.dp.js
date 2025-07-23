class Solution {
    pickupHelper(row, col1, col2, matrix) {
        const totalRows = matrix.length
        const totalCols = matrix[0].length
        if (col1 < 0 || col1 >= totalCols || col2 < 0 || col2 >= totalCols) return -Infinity

        if (row === totalRows - 1) {
            if (col1 === col2) return matrix[row][col1]
            else return matrix[row][col1] + matrix[row][col2]
        }

        // explore all the paths that can both robot traverse
        let max = -Infinity
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                // if both cols are same then I've to count only one else both
                let ans = 0
                if (col1 === col2) {
                    ans += matrix[row][col1] + this.pickupHelper(row + 1, col1 + i, col2 + j, matrix)
                } else {
                    ans += matrix[row][col1] + matrix[row][col2] + this.pickupHelper(row + 1, col1 + i, col2 + j, matrix)
                }
                max = Math.max(max, ans)
            }
        }
        return max
    }
    cherryPickup(matrix) {
        const n = matrix.length
        const m = matrix[0].length
        return this.pickupHelper(0, 0, m - 1, matrix)
    }
}

// using memoization
class Solution {
    pickupHelper(row, col1, col2, matrix, memo) {
        const totalRows = matrix.length
        const totalCols = matrix[0].length
        if (col1 < 0 || col1 >= totalCols || col2 < 0 || col2 >= totalCols) return -Infinity

        if (row === totalRows - 1) {
            if (col1 === col2) return matrix[row][col1]
            else return matrix[row][col1] + matrix[row][col2]
        }

        // before exploring all paths, check if you have already or not
        if (memo[row][col1][col2] !== -1) return memo[row][col1][col2]
        // explore all the paths that can both robot traverse
        let max = -Infinity
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                // if both cols are same then I've to count only one else both
                let ans = 0
                if (col1 === col2) {
                    ans += matrix[row][col1] + this.pickupHelper(row + 1, col1 + i, col2 + j, matrix, memo)
                } else {
                    ans += matrix[row][col1] + matrix[row][col2] + this.pickupHelper(row + 1, col1 + i, col2 + j, matrix, memo)
                }
                max = Math.max(max, ans)
            }
        }
        return memo[row][col1][col2] = max

    }
    cherryPickup(matrix) {
        const n = matrix.length
        const m = matrix[0].length
        const memo = new Array(n).fill().map(() => new Array(m).fill().map(() => new Array(m).fill(-1)))
        return this.pickupHelper(0, 0, m - 1, matrix, memo)
    }
}