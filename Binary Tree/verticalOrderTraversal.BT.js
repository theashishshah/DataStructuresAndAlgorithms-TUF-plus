var verticalTraversal = function (root) {
    if (!root) return []

    const queue = []
    const columnMap = new Map()
    queue.push({
        node: root,
        col: 0,
        level: 0
    })

    while (queue.length) {
        const { node, col, level } = queue.shift()

        if (!columnMap.has(col)) columnMap.set(col, new Map())

        if (!columnMap.get(col).has(level)) columnMap.get(col).set(level, [])

        columnMap.get(col).get(level).push(node.val)

        if (node.left) queue.push({
            node: node.left,
            col: col - 1,
            level: level + 1
        })

        if (node.right) queue.push({
            node: node.right,
            col: col + 1,
            level: level + 1
        })
    }

    // get the sorted col index or keys
    const sortedColumns = Array.from(columnMap.keys()).sort((a, b) => a - b)
    const result = []

    for (const col of sortedColumns) {
        // i can get level map from here
        const levelMap = columnMap.get(col)
        // now get the sorted keys for level
        const sortedLevels = Array.from(levelMap.keys())
        const column = []
        for (const level of sortedLevels) {
            const valuesArray = levelMap.get(level).sort((a, b) => a - b)
            column.push(...valuesArray)
        }

        result.push([...column])
    }

    return result
};