class Solution {
    fill(grid) {
        // TC: O(N*M)
        // SC: O(N*M) + O(M*N)
        const rows = grid.length
        const cols = grid[0].length
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        function bfs(row, col) {
            const queue = []
            visited[row][col] = true
            queue.push([row, col])
            while (queue.length) {
                const [crow, ccol] = queue.shift()
                // go in all four direction, find any, mark visited, enqueue
                for (const [dx, dy] of directions) {
                    const nrow = crow + dx
                    const ncol = ccol + dy
                    if (nrow < rows && ncol < cols
                        && nrow >= 0 && ncol >= 0
                        && grid[nrow][ncol] === "O" && !visited[nrow][ncol]
                    ) {
                        visited[nrow][ncol] = true
                        queue.push([nrow, ncol])
                    }
                }
            }
        }
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if ((i === 0 || j === 0 ||
                    i === rows - 1 || j === cols - 1)
                    && grid[i][j] === "O" && !visited[i][j]
                ) {
                    bfs(i, j)
                }
            }
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === "O" && !visited[i][j]) grid[i][j] = "X"
            }
        }
        return grid
    }
}
