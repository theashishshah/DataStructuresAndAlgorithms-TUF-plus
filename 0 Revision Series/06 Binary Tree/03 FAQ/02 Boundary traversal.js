
class Solution {
    isLeaf(node) {
        return !node.left && !node.right
    }
    addLeftBoundary(node, boundary) {
        // TC: O(left boundary nodes)
        // SC: O(1)
        node = node.left
        while (node) {
            if (!this.isLeaf(node)) boundary.push(node.data)
            node = node.left ? node.left : node.right
        }
        return
    }

    addLeaves(node, boundary) {
        // TC: O(n)
        // SC: O(h)
        if (!node) return
        if (this.isLeaf(node)) {
            boundary.push(node.data)
            return
        }
        this.addLeaves(node.left, boundary)
        this.addLeaves(node.right, boundary)
        return
    }

    addRightBoundary(node, boundary) {
        node = node.right
        const current = []
        // Time: O(right boundary nodes)
        // Space: O(right boundary nodes) for temp storage

        while (node) {
            if (!this.isLeaf(node)) current.push(node.data)
            node = node.right ? node.right : node.left
        }
        while (current.length) boundary.push(current.pop()) // O(leaves)
        return
    }
    boundaryTraversal(root) {
        // TC: 
        if (!root) return []
        const result = []
        if (!this.isLeaf(root)) result.push(root.data)
        this.addLeftBoundary(root, result)
        this.addLeaves(root, result)
        this.addRightBoundary(root, result)
        return result

    }
}