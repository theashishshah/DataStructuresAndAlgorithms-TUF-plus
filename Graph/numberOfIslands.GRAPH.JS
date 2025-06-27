class Solution {
    numIslands(grid) {
        const rows = grid.length;
        const cols = grid[0].length;

        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

        function bfs(row, col) {
            const queue = [];
            visited[row][col] = true
            queue.push([row, col]);
            while (queue.length) {
                const [row, col] = queue.shift();
                // check all 8 neighbours
                for (let dx = -1; dx <= 1; dx++) {
                    for (let dy = -1; dy <= 1; dy++) {
                        let nrow = row + dx
                        let ncol = col + dy
                        if (nrow < rows && ncol < cols && nrow >= 0 && ncol >= 0
                            && grid[nrow][ncol] === "1" && !visited[nrow][ncol]
                        ) {
                            visited[nrow][ncol] = true
                            queue.push([nrow, ncol])
                        }
                    }
                }

            }
        }

        // TC: (NXM) + (NXM)
        // SC: O(NXM) + O(N*M)
        let count = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === "1" && !visited[i][j]) {
                    count++;
                    bfs(i, j);
                }
            }
        }
        return count;
    }
}
  