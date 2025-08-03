/** what is inorder, why we use it, what is TC and SC?
 *  so traversal means visiting each node(visiting I meant to get the value) and we when we want to visit nodes in specific order as the requirement, we use inorder, preorder and postorder traversal.
 * 
 */
class Solution {
    inorderHelper(root, ans) {
        if (!root) return
        this.inorderHelper(root.left, ans)
        ans.push(root.data)
        this.inorderHelper(root.right, ans)
    }
    inorder(root) {
        if (!root) return []
        const ans = []
        this.inorderHelper(root, ans)
        return ans
    }
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *      constructor(val = 0, left = null, right = null){
 *          this.data = val;
 *          this.left = null;
 *          this.right = null;
 *      }
 * }
 **/

class Solution {
    inorder(root) {
        if (!root) return []
        const result = []
        const stack = []
        let current = root
        while (true) {
            if (current) {
                stack.push(current)
                current = current.left
            } else {
                if (!stack.length) break
                current = stack.pop()
                result.push(current.data)
                current = current.right
            }
        }
        return result
    }
}