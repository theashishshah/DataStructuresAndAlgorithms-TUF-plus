class BSTIterator {
    constructor(root) {
        // brute force approach
        this.inorder = []
        this.index = -1
        this.inorderTraversal(root)
    }

    inorderTraversal(root) {
        if (!root) return
        this.inorderTraversal(root.left)
        this.inorder.push(root.data)
        this.inorderTraversal(root.right)
    }

    hasNext() {
        return this.index + 1 < this.inorder.length
    }

    next() {
        return this.inorder[++this.index]
    }
}


/// BST iterator optimized one
class BSTIteratorOptimized {
    constructor(root) {
        this.stack = []
        this._addAllLefts(root)
    }

    _addAllLefts(root) {
        if (!root) return
        this.stack.push(root)
        this._addAllLefts(root.left)
    }

    hasNext() {
        return this.stack.length > 0
    }

    next() {
        const temp = this.stack.pop()
        this._addAllLefts(temp.right)
        return temp.data
    }
}