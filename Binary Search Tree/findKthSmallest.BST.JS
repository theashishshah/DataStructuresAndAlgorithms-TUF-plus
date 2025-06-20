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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    // use dfs traversal
    if (!root) return 0
    const queue = []
    const result = []
    queue.push(root)
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            result.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    result.sort((a, b) => a - b)
    return result[k - 1]
};