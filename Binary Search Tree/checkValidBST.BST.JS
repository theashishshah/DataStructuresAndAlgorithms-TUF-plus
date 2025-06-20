var isValidBST = function (root) {
    if (!root) return true

    let prev = null
    while (root) {
        if (!root.left) {
            if (prev && prev.val >= root.val) return false
            prev = root
            root = root.right
        } else {
            let predecessor = root.left
            while (predecessor.right && predecessor.right !== root) {
                predecessor = predecessor.right
            }

            if (!predecessor.right) {
                predecessor.right = root
                root = root.left
            } else {
                predecessor.right = null
                if (prev && prev.val >= root.val) return false
                prev = root
                root = root.right
            }
        }

    }
    return true
};