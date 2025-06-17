function isSymmetricHelp(left, right) {
    if (!left || !right) return left === right
    if (left.val !== right.val) return false
    return isSymmetricHelp(left.left, right.right) && isSymmetricHelp(left.right, right.left)
}
var isSymmetric = function (root) {
    return root === null || isSymmetricHelp(root.left, root.right)
};