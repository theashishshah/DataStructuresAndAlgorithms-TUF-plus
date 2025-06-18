var levelOrderBottom = function (root) {
    if (!root) return []

    const queue = []
    const result = []
    queue.push(root)

    while (queue.length) {
        const len = queue.length
        const ans = []
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            ans.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push([...ans])
    }
    result.reverse()
    return result
};