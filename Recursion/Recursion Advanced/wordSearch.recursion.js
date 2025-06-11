function backtrack(index, i, j, board, word) {
    if (index === word.length) return true
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] === -1 || board[i][j] !== word[index]) return false
    const temp = board[i][j]
    board[i][j] = -1
    const ans = this.backtrack(index + 1, i - 1, j, board, word) ||
        this.backtrack(index + 1, i + 1, j, board, word) ||
        this.backtrack(index + 1, i, j - 1, board, word) ||
        this.backtrack(index + 1, i, j + 1, board, word);
    board[i][j] = temp
    return ans
}

function exist(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                if (this.backtrack(0, i, j, board, word)) return true
            }
        }
    }
    return false
}