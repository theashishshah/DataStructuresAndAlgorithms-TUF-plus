var spiralOrder = function (matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    let left = 0
    let right = cols - 1
    let top = 0
    let bottom = rows - 1
    const ans = []
    while (top <= bottom && left <= right) {
        // Traverse the right
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i])
        }
        top++

        // Traverse the top to bottom
        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right])
        }
        right--

        // edge case: we might only one row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                ans.push(matrix[bottom][i])
            }
            bottom--
        }

        // edge case: we might have only one col
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                ans.push(matrix[i][left])
            }
            left++
        }
    }
    return ans
};