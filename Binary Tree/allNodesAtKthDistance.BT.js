function buildParentMap(root, parent, map) {
    if (!root) return
    map.set(root, parent)

    buildParentMap(root.left, root, map)
    buildParentMap(root.right, root, map)
}


var distanceK = function (root, target, k) {
    if (!root) return []

    // build parent map ds 
    const map = new Map()
    buildParentMap(root, null, map)

    // try to find that target node
    // const targetNode = this.findTargetNode(root, target)
    // console.log( target.data)
    // return []

    const visited = new Set()
    const queue = []
    queue.push(target)
    visited.add(target)

    while (queue.length) {
        if (k === 0) break
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()

            if (node.left && !visited.has(node.left)) {
                queue.push(node.left)
                visited.add(node.left)
            }

            if (node.right && !visited.has(node.right)) {
                queue.push(node.right)
                visited.add(node.right)
            }

            if (map.has(node) && map.get(node) && !visited.has(map.get(node))) {
                queue.push(map.get(node))
                visited.add(map.get(node))
            }
        }
        k--

    }

    const result = []
    const len = queue.length
    for (let i = 0; i < len; i++) {
        const tempNode = queue.pop()

        result.push(tempNode.val)
    }
    return result
};