/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (row) {
    // row += 1
    const ans = []
    ans.push(1)
    for (let i = 1; i <= row; i++) {
        let prev = ans[i - 1]
        let curr = (prev * (row - i + 1)) / i
        ans.push(curr)
    }
    return ans
};