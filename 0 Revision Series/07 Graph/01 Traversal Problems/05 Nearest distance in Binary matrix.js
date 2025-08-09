class Solution {
    nearest(grid) {
        const rows = grid.length
        const cols = grid[0].length

        // Get all the 1's so that in each step, you spread them like flue
        const visited = new Array(rows).fill().map(() => Array(cols).fill(false))
        const ans = Array.from({ length: rows }, () => Array(cols).fill(0))
        const queue = []
        for (let i = 0; i < rows; i++){
            for (let j = 0; j < cols; j++){
                if (grid[i][j] === 1) {
                    queue.push([i, j])
                    visited[i][j] = true
                }
            }
        }

        let dis = 1
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        while (queue.length) {
            const len = queue.length
            for (let i = 0; i < len; i++){
                const [crow, ccol] = queue.shift()
                for (const [dx, dy] of directions) {
                    const nextrow = crow + dx
                    const nextcol = ccol + dy
                    if (nextrow >= 0 && nextrow < rows &&
                        nextcol >= 0 && nextcol < cols &&
                        !visited[nextrow][nextcol]
                    ) {
                        visited[nextrow][nextcol] = true
                        ans[nextrow][nextcol] = dis
                        queue.push([nextrow, nextcol])
                    }
                } 
            }
            dis++
        }
        return ans
    }
}

