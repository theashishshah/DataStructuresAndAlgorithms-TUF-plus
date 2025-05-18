class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BT {
    constructor(root = null) {
        this.root = root;
        this.size = root ? 1 : 0;  // If root exists, size is 1
    }

    // Method to insert a node (basic example)
    insert(val) {
        const newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            this.size = 1;  // Size is 1 after insertion
        } else {
            this._insertRecursive(this.root, newNode);
            this.size++;  // Increase size whenever a new node is inserted
        }
    }

    // Helper function to insert a node recursively
    _insertRecursive(node, newNode) {
        if (newNode.val < node.val) {
            if (node.left === null) { 
                node.left = newNode;
            } else {
                this._insertRecursive(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertRecursive(node.right, newNode);
            }
        }
    }
}
