class Solution {
    // Return a list containing the inorder traversal of the given tree
    inOrder(root) {
        if (!root) return []
        const ans = []
        while (root) {
            if (!root.left) {
                ans.push(root.key)
                root = root.right
            } else {
                // but before going to left, make threaded bt
                let pre = root.left
                while (pre.right && pre.right !== root) pre = pre.right
                if (pre.right !== root) {
                    pre.right = root
                    root = root.left
                } else {
                    pre.right = null
                    ans.push(root.key)
                    root = root.right
                }
            }
        }
        return ans
    }
}