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