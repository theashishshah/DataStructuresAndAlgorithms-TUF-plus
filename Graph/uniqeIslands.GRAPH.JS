class Solution {
    countDistinctIslands(grid) {
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        const rows = grid.length
        const cols = grid[0].length
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
        const shapes = new Set()

        function bfs(row, col) {
            const currentShape = []
            currentShape.push([0, 0])
            const queue = []
            visited[row][col] = true
            queue.push([row, col])

            while (queue.length) {
                const [crow, ccol] = queue.shift()
                // now get in all directions
                for (const [dx, dy] of directions) {
                    const nrow = crow + dx
                    const ncol = ccol + dy
                    if (nrow >= 0 && ncol >= 0 &&
                        nrow < rows && ncol < cols &&
                        grid[nrow][ncol] === 1 && !visited[nrow][ncol]
                    ) {
                        visited[nrow][ncol] = true
                        queue.push([nrow, ncol])
                        currentShape.push([row - nrow, col - ncol])
                    }
                }
            }

            // now serialize currentShape
            shapes.add(currentShape.map(shape => shape.join(",")).join("|"))
        }
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1 && !visited[i][j]) {
                    bfs(i, j)
                }
            }
        }

        return shapes.size
    }
}