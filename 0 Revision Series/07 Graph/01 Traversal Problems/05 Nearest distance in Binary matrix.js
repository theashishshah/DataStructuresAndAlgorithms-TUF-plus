class Solution {
    nearest(grid) {
        const rows = grid.length
        const cols = grid[0].length

        // Get all the 1's so that in each step, you spread them like flue
        // TC: 5O(n*m)
        // SC: 2xO(n*m) + O(n*m)
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


// Optimised solution
// User function Template for javascript

/**
 * @param {number[][]} grid
 * @returns {number[][]}
 */
class Solution {
    // Function to find distance of nearest 1 in the grid for each cell.
    nearest(grid) {
        // code here
        const rows = grid.length
        const cols = grid[0].length

        // Try to find at least 1
        const ans = Array.from({ length: rows }, () => Array(cols).fill(-1))
        // TC: 
        // SC: O(m*n) + O(n*m)
        const queue = []
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    ans[i][j] = 0
                    queue.push([i, j])
                }
            }
        }
        let head = 0
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        while (head < queue.length) {
            const [row, col] = queue[head++]
            for (const [dx, dy] of directions) {
                const nextrow = row + dx
                const nextcol = col + dy
                if (nextrow >= 0 && nextrow < rows &&
                    nextcol >= 0 && nextcol < cols &&
                    ans[nextrow][nextcol] === -1
                ) {
                    ans[nextrow][nextcol] = ans[row][col] + 1
                    queue.push([nextrow, nextcol])
                }
            }
        }
        return ans
    }
}
