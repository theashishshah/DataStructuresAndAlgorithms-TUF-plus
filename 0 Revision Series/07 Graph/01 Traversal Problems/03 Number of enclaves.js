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