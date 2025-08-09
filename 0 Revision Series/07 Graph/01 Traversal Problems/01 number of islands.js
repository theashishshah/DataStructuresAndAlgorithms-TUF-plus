class Solution {
    dfs(row, col, visited, grid) {
        const rows = grid.length
        const cols = grid[0].length
        // now traverse it neighbours
        for (let i = -1; i <= 1; i++){
            for (let j = -1; j <= 1; j++){
                const nextRow = row + i
                const nextCol = col + j
                if (nextCol >= 0 && nextCol < cols 
                    && nextRow >= 0 && nextRow < rows && 
                    grid[nextRow][nextCol] === "1" && !visited[nextRow][nextCol]
                ) {
                    visited[nextRow][nextCol] = true
                    this.dfs(nextRow, nextCol, visited, grid)
                }
            }
        }
    }
    numIslands(grid) {
        const rows = grid.length
        const cols = grid[0].length

        let count = 0
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
        for (let i = 0; i < rows; i++){
            for (let j = 0; j < cols; j++){
                if (grid[i][j] === "1" && !visited[i][j]) {
                    visited[i][j] = true
                    count++
                    this.dfs(i, j, visited, grid)
                }
            }
        }
        return count
    }
}