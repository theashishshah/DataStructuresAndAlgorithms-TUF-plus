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

// using BFS
function maxDepth(root) {
    // use the dfs to traverse the tree
    let depth = 0
    const q = []
    q.push(root)
    while (q.length) {
        const width = q.length
        depth++
        for (let i = 0; i < width; i++) {
            const currentNode = q.shift()
            if (currentNode.left) q.push(currentNode.left)
            if (currentNode.right) q.push(currentNode.right)
        }
    }

    return depth
}