class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    inOrder(root){
        // TC: O(N) SC: O(N) + O(N)
        if(!root) return 
        this.inOrder(root.left)
        console.log(root.val)
        this.inOrder(root.right)
    }
    inOderUsingStack(root){
        // TC: O(N) SC: O(N) + O(h)
        if(!root) return []
        const result = []
        const stack = []
        let currentNode = root
        while(true){
            if(currentNode){
                stack.push(currentNode)
                currentNode = currentNode.left
            }else {
                if(!stack.length) break
                currentNode = stack.pop()
                result.push(currentNode.data)
                currentNode = currentNode.right
            }
        }
        return result
    }
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)

root.left.left = new Node(4)
console.log(root)

