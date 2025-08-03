let max = 0
function backtrack(root) {
    if (!root) return 0
    const left = Math.max(0, backtrack(root.left))
    const right = Math.max(0, backtrack(root.right))
    let localMax = root.val + left + right
    max = Math.max(max, localMax)
    return root.val + Math.max(left, right)
}

var maxPathSum = function (root) {
    max = -Infinity
    backtrack(root)
    return max
};