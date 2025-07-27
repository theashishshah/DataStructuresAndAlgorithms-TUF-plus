/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const n = matrix.length
    if (n <= 1) return matrix

    // Transpose the matrix
    for (let row = 0; row < n; row++) {
        for (let col = row + 1; col < n; col++) {
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]]
        }
    }

    // Reverse the each row
    for (let row = 0; row < n; row++) {
        matrix[row].reverse()
    }
};