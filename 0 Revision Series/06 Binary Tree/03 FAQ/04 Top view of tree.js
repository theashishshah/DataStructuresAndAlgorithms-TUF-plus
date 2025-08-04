
class Solution {
    // Function to return a list of nodes visible from the top view
    // from left to right in Binary Tree.
    topView(root) {
        // code here
        if (!root) return []
        const map = new Map()
        const queue = []
        queue.push({
            node: root,
            col: 0,
            level: 0
        })

        while (queue.length) {
            const { node, col, level } = queue.shift()

            if (!map.has(col)) map.set(col, node.data)

            if (node.left) {
                queue.push({
                    node: node.left,
                    col: col - 1,
                    level: level + 1
                })
            }
            if (node.right) {
                queue.push({
                    node: node.right,
                    col: col + 1,
                    level: level + 1
                })
            }
        }
        // map: [[key, vlaue], [key, value]]
        const keys = [...map.keys()].sort((a, b) => a - b)
        const ans = []
        for (const key of keys) {
            ans.push(map.get(key))
        }
        return ans
    }
}

