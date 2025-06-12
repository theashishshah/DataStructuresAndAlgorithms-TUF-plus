// using inorder traversal

function inorder(root, depth) {
    if (!root) return depth
    const one = this.inorder(root.left, depth + 1)
    const two = this.inorder(root.right, depth + 1)
    return one >= two ? one : two
}

function maxDepth(root) {
    // using inorder recursion
    return this.inorder(root, 0)
}