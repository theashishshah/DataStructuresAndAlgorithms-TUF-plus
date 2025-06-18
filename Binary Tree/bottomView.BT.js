function bottomView(root) {
    if (!root) return []

    const queue = []
    const columnMap = new Map()

    queue.push({
        node: root,
        col: 0
    })

    while (queue.length) {
        const { node, col } = queue.shift()

        columnMap.set(col, node.data)

        if (node.left) queue.push({
            node: node.left,
            col: col - 1
        })

        if (node.right) queue.push({
            node: node.right,
            col: col + 1
        })
    }

    const sortedColumns = Array.from(columnMap.keys()).sort((a, b) => a - b)

    const result = []
    for (const col of sortedColumns) {
        result.push(columnMap.get(col))
    }

    return result
}