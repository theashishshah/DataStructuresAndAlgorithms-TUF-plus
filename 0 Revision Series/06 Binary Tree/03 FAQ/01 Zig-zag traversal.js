class Solution {
    zigzagLevelOrder(root) {
        if (!root) return []
        const ans = []
        const queue = []
        queue.push(root)
        let flag = true
        while (queue.length) {
            const len = queue.length
            const currentValues = []
            for (let i = 0; i < len; i++) {
                const node = queue.shift()
                currentValues.push(node.data)
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
            if (!flag) {
                currentValues.reverse()
                ans.push([...currentValues])
            } else {
                ans.push([...currentValues])
            }
            flag = !flag
        }

        return ans
    }
}