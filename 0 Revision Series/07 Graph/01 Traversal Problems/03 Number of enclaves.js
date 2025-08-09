class Solution {
    numberOfEnclaves(grid) {
        const rows = grid.length
        const cols = grid[0].length

        // bfs traversal
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
        const queue = []
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if ((i === 0 || i === rows - 1 || j === 0 || j === cols - 1) && grid[i][j]) {
                    visited[i][j] = true
                    queue.push([i, j])
                }
            }
        }

        // spite the water
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        let head = 0
        while (head < queue.length) {
            const [row, col] = queue[head++]
            // traverse its neighbours
            for (const [dx, dy] of directions) {
                const nextRow = row + dx
                const nextCol = col + dy
                if (nextRow >= 0 && nextRow < rows &&
                    nextCol >= 0 && nextCol < cols && !visited[nextRow][nextCol]
                    && grid[nextRow][nextCol] === 1
                ) {
                    visited[nextRow][nextCol] = true
                    queue.push([nextRow, nextCol])
                }
            }

        }
        let count = 0
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (!visited[i][j] && grid[i][j] === 1) count++
            }
        }
        return count
    }

}



// using dfs
// User function Template for javascript
/**
 * @param {number[][]} grid
 * @returns {number}
 */

class Solution {
    constructor() {
        this.directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    }
    dfs(row, col, visited, grid) {
        const rows = grid.length
        const cols = grid[0].length
        visited[row][col] = true
        // go in depth
        for (const [dx, dy] of this.directions) {
            const nextrow = row + dx
            const nextcol = col + dy
            if (nextrow >= 0 && nextrow < rows && nextcol >= 0 && nextcol < cols && !visited[nextrow][nextcol]
                && grid[nextrow][nextcol] === 1
            ) {
                this.dfs(nextrow, nextcol, visited, grid)
            }
        }
    }
    // Function to count the number of enclaves.
    numberOfEnclaves(grid) {
        // your code here
        const rows = grid.length
        const cols = grid[0].length

        // start from the  boundary itself
        const visited = new Array(rows).fill().map(() => Array(cols).fill(false))
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if ((i === 0 || i === rows - 1 || j === 0 || j === cols - 1) && grid[i][j] === 1) {
                    this.dfs(i, j, visited, grid)
                }
            }
        }

        let count = 0
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (!visited[i][j] && grid[i][j]) count++
            }
        }
        return count

    }
}