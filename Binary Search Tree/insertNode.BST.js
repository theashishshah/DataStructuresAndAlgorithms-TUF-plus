var insertIntoBST = function (root, val) {
    if (!root) return new TreeNode(val)
    let curr = root
    let prev = curr
    while (curr) {
        if (curr.val > val) {
            prev = curr
            curr = curr.left
        } else {
            prev = curr
            curr = curr.right
        }
    }

    if (prev.val > val) {
        prev.left = new TreeNode(val)
    } else prev.right = new TreeNode(val)

    return root
};