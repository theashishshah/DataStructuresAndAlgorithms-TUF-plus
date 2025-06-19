function buildParentMap(root, parent, map) {
    if (!root) return null
    map.set(root, parent)
    buildParentMap(root.left, root, map)
    buildParentMap(root.right, root, map)

}

function findNode(root, target) {
    if (!root) return null
    if (root.val === target) return root
    const left = findNode(root.left, target)
    const right = findNode(root.right, target)

    return left || right
}

var amountOfTime = function (root, start) {
    if (!root) return 0
    const map = new Map()

    buildParentMap(root, null, map)
    const targetNode = findNode(root, start)

    const queue = []
    const visited = new Set()
    let time = -1

    queue.push(targetNode)
    visited.add(targetNode)
    while (queue.length) {
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

            const parent = map.get(node)
            if (parent && !visited.has(parent)) {
                queue.push(parent)
                visited.add(parent)
            }
        }
        time++
    }
    return time
};

