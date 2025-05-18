class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)

root.left.left = new Node(4)
console.log(root)
