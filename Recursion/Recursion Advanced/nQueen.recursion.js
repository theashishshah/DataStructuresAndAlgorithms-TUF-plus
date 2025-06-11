function check(row, col, board) {
    // check top
    let r = row - 1
    let c = col
    while (r >= 0) {
        if (board[r][c] === 'Q') return false
        r--
    }

    // check left diagonal
    r = row - 1
    c = col - 1
    while (r >= 0 && c >= 0) {
        if (board[r][c] === 'Q') return false
        r--
        c--
    }

    // check right diagonal
    r = row - 1
    c = col + 1
    while (r >= 0 && c < board.length) {
        if (board[r][c] === 'Q') return false
        r--
        c++
    }
    return true
}

function nQueen(row, board, ans) {
    if (row === board.length) {
        const tempAns = board.map(arr => arr.join(""))
        ans.push([...tempAns])
        return;
    }
    for (let col = 0; col < board.length; col++) {
        if (this.check(row, col, board)) {
            board[row][col] = "Q"
            this.nQueen(row + 1, board, ans)
            board[row][col] = "."
        }
    }
    return
}

function solveNQueens(n) {
    // create board
    const board = Array.from({ length: n }, () => Array(n).fill("."))
    const ans = []
    this.nQueen(0, board, ans)
    return ans
}