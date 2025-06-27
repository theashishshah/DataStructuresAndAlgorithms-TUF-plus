class Solution {
    orangesRotting(grid) {
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
        const rows = grid.length;
        const cols = grid[0].length;

        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

        // try to find all rotten orangesRotting
        const queue = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 2) {
                    visited[i][j] = true;
                    queue.push([i, j]);
                }
            }
        }

        // now you've the all rotten oranges, now try to rote the oranges which are fresh
        // and count the minutes
        let minutes = 0;
        while (queue.length) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                // check each rotten oranges four directions
                const [row, col] = queue.shift();
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
                    }
                }
            }
            minutes++;
        }

        // now you've visited all the fresh fruites that can be rotten
        // now try to find if there any fresh  fruit or not
        let fresh = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1 && !visited[i][j]) fresh++;
            }
        }
        return fresh > 0 ? -1 : minutes > 0 ? minutes - 1 : 0;
    }
}



// if the mutation is allowed
class Solution {
    orangesRotting(grid) {
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];
        const rows = grid.length;
        const cols = grid[0].length;



        // try to find all rotten orangesRotting
        const queue = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j]);
                }
            }
        }

        // now you've the all rotten oranges, now try to rote the oranges which are fresh
        // and count the minutes
        let minutes = 0;
        while (queue.length) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                // check each rotten oranges four directions
                const [row, col] = queue.shift();
                for (const [dx, dy] of directions) {
                    const nrow = row + dx;
                    const ncol = col + dy;
                    if (
                        nrow >= 0 &&
                        nrow < rows &&
                        ncol >= 0 &&
                        ncol < cols &&
                        grid[nrow][ncol] === 1

                    ) {
                        grid[nrow][ncol] = 2
                        queue.push([nrow, ncol]);
                    }
                }
            }
            minutes++;
        }

        // now you've visited all the fresh fruites that can be rotten
        // now try to find if there any fresh  fruit or not
        let fresh = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) fresh++;
            }
        }
        return fresh > 0 ? -1 : minutes > 0 ? minutes - 1 : 0;
    }
}
  