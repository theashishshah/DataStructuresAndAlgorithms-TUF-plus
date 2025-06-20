/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
function deleteRoot(root) {
    if (!root.left && !root.right) return null
    if (!root.left) return root.right
    if (!root.right) return root.left

    const leftSubTree = root.left
    const rightSubTree = root.right
    let curr = leftSubTree
    while (curr.right) curr = curr.right
    curr.right = rightSubTree
    return leftSubTree
}
var deleteNode = function (root, key) {
    if (!root) return root
    if (root.val === key) return deleteRoot(root)
    let targetNode = root
    let preToTarget = root
    while (targetNode && targetNode.val !== key) {
        preToTarget = targetNode
        targetNode = targetNode.val > key ? targetNode.left : targetNode.right
    }

    if (!targetNode) return root

    if (preToTarget.right === targetNode) {
        preToTarget.right = deleteRoot(targetNode)
    } else preToTarget.left = deleteRoot(targetNode)

    return root
};