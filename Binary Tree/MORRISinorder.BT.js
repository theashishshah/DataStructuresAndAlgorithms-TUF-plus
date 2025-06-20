function getInorder(root) {
    if (!root) return []
    const ans = []
    while (root) {
        if (!root.left) {
            ans.push(root.data)
            root = root.right
            continue
        }

        let predecessor = root.left
        while (predecessor.right && predecessor.right !== root) predecessor = predecessor.right

        if (!predecessor.right) {
            predecessor.right = root
            root = root.left
        } else {
            predecessor.right = null
            ans.push(root.data)
            root = root.right
        }
    }
    return ans
}