/**
 * @param {number[][]} mat
 * @returns {number}
 */
class Solution {
    orangesRotting(grid) {
        // code here
        const rows = grid.length
        const cols = grid[0].length

        // try to find all rotten oranges, so that in every minute, all rotten ornages can rote 
        // their next fresh orange
        const queue = []
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 2) queue.push([i, j])
            }
        }

        // Now i've all the  rotten oranges, its time to tick the clock
        // I need a viisted grid so that i can track which one is left
        const visited = new Array(rows).fill().map(() => Array(cols).fill(false))
        let minutes = 0
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        while (queue.length) {
            const len = queue.length
            let flag = false
            for (let i = 0; i < len; i++) {
                const [crow, ccol] = queue.shift()
                for (const [dx, dy] of directions) {
                    const nextrow = crow + dx
                    const nextcol = ccol + dy
                    if (nextrow >= 0 && nextrow < rows &&
                        nextcol >= 0 && nextcol < cols &&
                        grid[nextrow][nextcol] === 1 && !visited[nextrow][nextcol]
                    ) {
                        flag = true
                        visited[nextrow][nextcol] = true
                        queue.push([nextrow, nextcol])
                    }
                }
            }
            if (flag) minutes++
        }

        // If any fresh oragnes remains return -1
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1 && !visited[i][j]) return -1
            }
        }

        return minutes

    }
}
