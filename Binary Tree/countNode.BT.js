function countNodes(root) {
    if (!root) return 0
    let count = 0
    const queue = []
    queue.push(root)

    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            count++
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return count
}