/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (grid) {
    const rows = grid.length
    const cols = grid[0].length
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
    const ans = Array.from({ length: rows }, () => Array(cols).fill(0))

    // now try to find all the cell which is having 0 and push into queue to traverse
    const queue = []
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 0) {
                visited[i][j] = true
                queue.push([i, j])
            }
        }
    }

    // now you've the cell which is having 0, try to find the distance of 0 from 1
    let distance = 1
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const [row, col] = queue.shift()
            for (const [dx, dy] of directions) {
                const nrow = row + dx;
                const ncol = col + dy;
                if (
                    nrow < rows &&
                    ncol < cols &&
                    nrow >= 0 &&
                    ncol >= 0 &&
                    grid[nrow][ncol] === 1 &&
                    !visited[nrow][ncol]
                ) {
                    visited[nrow][ncol] = true;
                    queue.push([nrow, ncol]);
                    ans[nrow][ncol] = distance
                }
            }
        }
        distance++
    }
    return ans
};