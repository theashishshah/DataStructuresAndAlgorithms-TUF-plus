
class Solution {
    constructor() {
        this.max = 0
    }
    backtrack(root) {
        if (!root) return 0
        const left = this.backtrack(root.left)
        const right = this.backtrack(root.right)

        this.max = Math.max(this.max, left + right)
        return 1 + Math.max(left, right)
    }
    diameterOfBinaryTree(root) {
        this.backtrack(root)
        return this.max
    }
}