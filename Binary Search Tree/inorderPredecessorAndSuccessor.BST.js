function BSTPreSuc(root, key) {
    if (!root) return [-1, -1]
    let pre = -1
    let post = -1
    let preNode = null
    let found = false
    while (root) {
        if (!root.left) {
            if (root.data === key) {
                if (preNode) pre = preNode.data
                found = true
            } else if (found && post === -1) {
                post = root.data
            }
            preNode = root
            root = root.right
        } else {
            let pred = root.left
            while (pred.right && pred.right !== root) pred = pred.right

            if (!pred.right) {
                pred.right = root
                root = root.left
            } else {
                pred.right = null
                if (root.data === key) {
                    if (preNode) pre = preNode.data
                    found = true
                } else if (found && post === -1) {
                    post = root.data
                }
                preNode = root
                root = root.right
            }
        }
    }
    return [pre, post]
}