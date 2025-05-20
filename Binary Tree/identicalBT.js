class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.data = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    isSameTree(p, q) {
        if (!p && !q) return true;
        const q1 = [];
        const q2 = [];
        q1.push(p);
        q2.push(q);
        while (q1.length && q2.length) {
            const sizeOne = q1.length;
            const sizeTwo = q2.length;
            if (sizeOne !== sizeTwo) return false;
            for (let i = 0; i < sizeOne; i++) {
                const nodeOne = q1.shift();
                const nodeTwo = q2.shift();
                if (nodeOne.data !== nodeTwo.data) return false;

                if (
                    (nodeOne.left && !nodeTwo.left) ||
                    (!nodeOne.left && nodeTwo.left)
                )
                    return false;
                if (
                    (nodeOne.right && !nodeTwo.right) ||
                    (!nodeOne.right && nodeTwo.right)
                )
                    return false;

                q1.push(nodeOne.left);
                q2.push(nodeTwo.left);

                q1.push(nodeOne.right);
                q2.push(nodeTwo.right);
            }
        }
        return true;
    }
}

// Example usage
const solution = new Solution();

// Creating two sample trees
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(1);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(2);

// Checking if the trees are identical
const result = solution.isSameTree(tree1, tree2);
console.log('Are the trees identical? ', result); // Output: tru
