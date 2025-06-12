function canIFillThisNumber(grid, row, col, num) {
    // check for row and col wise
    for (let i = 0; i < 9; i++) {
        if (Number(grid[i][col]) === num || Number(grid[row][i]) === num) return false
    }

    // try to find start col and row for the sub-grid
    let startRow = Math.floor(row / 3) * 3
    let startCol = Math.floor(col / 3) * 3
    // check if that sub-grid if the number is present or not
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (Number(grid[i][j]) === num) return false
        }
    }

    return true
}

function backtrack(grid) {
    // start from 1st row and 1st col
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // now check each cell for empty or not
            if (grid[i][j] === ".") {
                // try filling the number from 1 to 9
                for (let num = 1; num <= 9; num++) {
                    // check if you can fill this number or not
                    if (this.canIFillThisNumber(grid, i, j, num)) {
                        //if I can fill this number then update the grid
                        grid[i][j] = String(num)
                        // call again the backtrack function
                        if (this.backtrack(grid)) return true
                        else grid[i][j] = "."
                    }
                }
                // if grid is empty and you can't fill any number return false
                return false
            }
        }
    }
    // if the loop is over and you didn't find any empty place that means grid is filled
    return true
}

function solveSudoku(board) {
    this.backtrack(board)
}