function topView(root) {
    // I'll use BFS
    if (!root) return []

    const queue = []
    const columnMap = new Map()
    queue.push({
        node: root,
        col: 0
    })

    while (queue.length) {
        const { node, col } = queue.shift()

        if (!columnMap.has(col)) columnMap.set(col, [])

        columnMap.get(col).push(node.data)

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
        const arr = columnMap.get(col)
        result.push(arr[0])
    }

    return result
}