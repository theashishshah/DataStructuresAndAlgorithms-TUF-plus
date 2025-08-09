class Solution {
    fill(grid) {
        // I'll use water flow method
        const rows = grid.length
        const cols = grid[0].length

        const visited = Array(rows).fill().map(() => Array(cols))
        const queue = []
        for (let i = 0; i < rows; i++){
            for (let j = 0; j < cols; j++){
                if ((i === 0 || i === rows - 1 || j === 0 || j === cols - 1) && grid[i][j] === "O") {
                    visited[i][j] = true
                    queue.push([i, j])
                }
            }
        }

        // flow the water inside the matrix and remaining will be my surrounded "O"'s
        let head = 0
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        while (head < queue.length) {
            const [row, col] = queue[head++]
            for (const [dx, dy] of directions) {
                const nextrow = row + dx
                const nextcol = col + dy
                if (nextrow >= 0 && nextrow < rows &&
                    nextcol >= 0 && nextcol < cols &&
                    grid[nextrow][nextcol] === "O" && !visited[nextrow][nextcol]
                ) {
                    visited[nextrow][nextcol] = true
                    queue.push([nextrow, nextcol])
                }
            }
        }

        for (let i = 0; i < rows; i++){
            for (let j = 0; j < cols; j++){
                if(grid[i][j] === "O" && !visited[i][j]) grid[i][j] = "X"
            }
        }
        return grid
    }
}
