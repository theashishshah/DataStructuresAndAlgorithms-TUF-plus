function path(grid, row, col, ans, pathString, n) {
    if (row === n - 1 && col === n - 1) {
        ans.push(pathString);
        return;
    }

    if (grid[row][col] === 0) return;

    grid[row][col] = 0;  // mark as visited

    // explore all 4 directions safely
    if (col < n - 1 && grid[row][col + 1] === 1)
        this.path(grid, row, col + 1, ans, pathString + "R", n);

    if (col > 0 && grid[row][col - 1] === 1)
        this.path(grid, row, col - 1, ans, pathString + "L", n);

    if (row > 0 && grid[row - 1][col] === 1)
        this.path(grid, row - 1, col, ans, pathString + "U", n);

    if (row < n - 1 && grid[row + 1][col] === 1)
        this.path(grid, row + 1, col, ans, pathString + "D", n);

    grid[row][col] = 1;  // backtrack (unmark)
}

function findPath(grid) {
    const n = grid.length;
    if (!grid[0][0] || !grid[n - 1][n - 1]) return [-1];

    const ans = [];
    this.path(grid, 0, 0, ans, "", n);
    ans.sort()
    return ans.length ? ans : [-1];
}