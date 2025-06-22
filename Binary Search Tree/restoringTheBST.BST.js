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