class Solution {
    countDistinctIslands(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
        const set = new Set()
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        function bfs(row, col) {
            const queue = []
            queue.push([row, col])
            const island = []
            island.push([0, 0])
            while (queue.length) {
                const [crow, ccol] = queue.shift()
                for (const [dx, dy] of directions) {
                    const nextrow = crow + dx
                    const nextcol = ccol + dy
                    if (nextrow >= 0 && nextrow < rows &&
                        nextcol >= 0 && nextcol < cols && 
                        grid[nextrow][nextcol] === 1 &&
                        !visited[nextrow][nextcol]
                    ) {
                        visited[nextrow][nextcol] = true
                        queue.push([nextrow, nextcol])
                        island.push([row - nextrow, col - nextcol])
                    }
                }
            }
            island.sort((a, b) => a[0] - b[0]) 
            set.add(island.map(arr => arr.join(",")).join("|")) /// ["2,0", "3,2"] -> "2,0|3,2"
        }

        for (let i = 0; i < rows; i++){
            for (let j = 0; j < cols; j++){
                if (grid[i][j] === 1 && !visited[i][j]) {
                    bfs(i, j)
                }
            }
        }

        return set.size

    }
}