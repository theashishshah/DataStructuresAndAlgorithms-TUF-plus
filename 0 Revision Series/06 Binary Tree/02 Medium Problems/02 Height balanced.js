
class Solution {
    backtrack(root) {
        if (!root) return 0
        const left = this.backtrack(root.left)
        if (left === -1) return -1
        const right = this.backtrack(root.right)
        if (right === -1) return -1

        if (Math.abs(right - left) > 1) return -1
        return 1 + Math.max(left, right)
    }
    isBalanced(root) {
        return this.backtrack(root) === -1 ? false : true
    }
}