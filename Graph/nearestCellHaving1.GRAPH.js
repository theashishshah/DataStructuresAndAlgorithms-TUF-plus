class Solution {
    nearest(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
        const ans = Array.from({ length: rows }, () => Array(cols).fill(0));

        // now try to find the elements that are having 1
        const queue = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    visited[i][j] = true;
                    queue.push([i, j]);
                }
            }
        }
        let distance = 1;
        // Traverse once and try to assign
        while (queue.length) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const [row, col] = queue.shift()
                // try to find in all directions if there is any zero and not visited
                for (const [dx, dy] of directions) {
                    const nrow = row + dx;
                    const ncol = col + dy;
                    if (
                        nrow < rows &&
                        ncol < cols &&
                        nrow >= 0 &&
                        ncol >= 0 &&
                        grid[nrow][ncol] === 0 &&
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
    }
}
