/**
 * TC: O(N) + O(N) + NlogN
 * SC: O(N)
 */

let index = 0
function restoreTree(root, ans) {
    if (!root) return
    restoreTree(root.left, ans)
    root.val = ans[index]
    index++
    restoreTree(root.right, ans)
}
function getInorder(root, ans) {
    if (!root) return
    getInorder(root.left, ans)
    ans.push(root.val)
    getInorder(root.right, ans)
}
var recoverTree = function (root) {
    if (!root) return root
    index = 0
    const inorder = []
    getInorder(root, inorder)
    inorder.sort((a, b) => a - b)
    restoreTree(root, inorder)
    return root
};

// optimized solution of restore bst
var recoverTree = function (root) {
    if (!root) return root
    const head = root
    let prev = null
    let first = null
    let second = null
    while (root) {
        if (!root.left) {
            if (prev && prev.val > root.val) {
                if (!first) first = prev
                second = root
            }
            prev = root
            root = root.right
        } else {
            let pred = root.left
            while (pred.right && pred.right !== root) pred = pred.right
            if (!pred.right) {
                pred.right = root
                root = root.left
            } else {
                pred.right = null
                if (prev && prev.val > root.val) {
                    if (!first) first = prev
                    second = root
                }
                prev = root
                root = root.right
            }
        }


    }
    [first.val, second.val] = [second.val, first.val]
    return head
};