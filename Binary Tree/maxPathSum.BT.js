let pathSum = 0
function calculate(root) {
    if (!root) return 0
    let leftPath = calculate(root.left)
    leftPath = Math.max(0, leftPath)
    let rightPath = calculate(root.right)
    rightPath = Math.max(0, rightPath)
    pathSum = Math.max(pathSum, root.val + leftPath + rightPath)
    return root.val + Math.max(leftPath, rightPath)
}
var maxPathSum = function (root) {
    pathSum = -Infinity
    calculate(root)
    return pathSum
};