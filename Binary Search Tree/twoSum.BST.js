var findTarget = function (root, k) {
    if (!root) return false

    const inorder = []
    while (root) {
        if (!root.left) {
            inorder.push(root.val)
            root = root.right
        } else {
            let pred = root.left
            while (pred.right && pred.right !== root) pred = pred.right
            if (!pred.right) {
                pred.right = root
                root = root.left
            } else {
                pred.right = null
                inorder.push(root.val)
                root = root.right
            }
        }
    }
    let start = 0
    let end = inorder.length - 1
    while (start < end) {
        if (inorder[start] + inorder[end] === k) return true
        else if (inorder[start] + inorder[end] > k) end = end - 1
        else start = start + 1
    }
    return false
};