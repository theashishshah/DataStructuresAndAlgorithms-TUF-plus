var findBottomLeftValue = function (root) {
    if (!root) return []

    const queue = []
    let result = null
    queue.push(root)

    while (queue.length) {
        const len = queue.length
        const rightMostNode = queue[0]
        result = rightMostNode.val
        for (let i = 0; i < len; i++) {
            const node = queue.shift()

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return result
};