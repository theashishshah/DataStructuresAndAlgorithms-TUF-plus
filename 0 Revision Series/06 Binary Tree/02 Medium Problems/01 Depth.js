class Solution {
    height(root) {
        if (!root) return 0
        let left = this.height(root.left)
        let right = this.height(root.right)
        return 1 + Math.max(left, right)
    }
    maxDepth(root) {
        return this.height(root)
    }
}


class Solution {
    maxDepth(root) {
        if (!root) return 0
        let depth = 0
        const queue = []
        queue.push(root)
        while (queue.length) {
            const len = queue.length
            for (let i = 0; i < len; i++) {
                const curr = queue.shift()
                if (curr.left) queue.push(curr.left)
                if (curr.right) queue.push(curr.right)
            }
            depth++
        }
        return depth
    }
}