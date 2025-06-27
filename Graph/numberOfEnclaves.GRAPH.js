class Solution {
    numberOfEnclaves(grid) {
        const rows = grid.length
        const cols = grid[0].length

        const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        const queue = []
        // now get all the boundaries elements
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if ((i === 0 || j === 0 || i === rows - 1 || j === cols - 1)
                    && grid[i][j] === 1) {
                    visited[i][j] = true
                    queue.push([i, j])
                }
            }
        }

        while (queue.length) {
            const [row, col] = queue.shift()
            // now to this cell, check all four directions
            for (const [dx, dy] of directions) {
                const nrow = row + dx
                const ncol = col + dy
                if (nrow < rows && ncol < cols
                    && nrow >= 0 && ncol >= 0
                    && grid[nrow][ncol] === 1 && !visited[nrow][ncol]
                ) {
                    visited[nrow][ncol] = true
                    queue.push([nrow, ncol])
                }
            }
        }


        let count = 0
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (
                    grid[i][j] === 1 && !visited[i][j]) {

                    count++
                }
            }
        }

        return count

    }
}