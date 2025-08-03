function backtrack(left, right) {
    if (!left || !right) return left === right
    if (left.val !== right.val) return false

    return backtrack(left.left, right.right) && backtrack(left.right, right.left)
}
var isSymmetric = function (root) {
    if (!root) return true
    return backtrack(root.left, root.right)
};