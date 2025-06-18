var rightSideView = function (root) {
    if (!root) return []

    const queue = []
    const result = []
    queue.push(root)

    while (queue.length) {
        const len = queue.length
        const rightMostNode = queue[len - 1]
        result.push(rightMostNode.val)
        for (let i = 0; i < len; i++) {
            const node = queue.shift()

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return result
};