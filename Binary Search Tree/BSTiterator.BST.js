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