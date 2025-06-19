var deserialize = function (data) {
    const arr = JSON.parse(data)
    if (!arr.length) return null

    const rootValue = arr.shift()
    const root = new TreeNode(rootValue)
    const queue = []
    queue.push(root)

    while (queue.length) {
        const rootNode = queue.shift()
        const leftValue = arr.shift()
        if (leftValue === null) rootNode.left = null
        else {
            rootNode.left = new TreeNode(leftValue)
            queue.push(rootNode.left)
        }

        const rightValue = arr.shift()
        if (rightValue === null) rootNode.right = null
        else {
            rootNode.right = new TreeNode(rightValue)
            queue.push(rootNode.right)
        }
    }
    return root
};

var serialize = function (root) {
    const result = []
    if (!root) return JSON.stringify(result)

    const queue = []
    queue.push(root)
    result.push(root.val)

    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const node = queue.shift()
            if (node.left) {
                queue.push(node.left)
                result.push(node.left.val)
            } else result.push(null)

            if (node.right) {
                queue.push(node.right)
                result.push(node.right.val)
            } else result.push(null)
        }
    }
    return JSON.stringify(result)
};