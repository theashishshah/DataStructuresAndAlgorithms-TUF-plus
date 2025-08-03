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
    preorder(root) {
        //your code goes here
        if (!root) return []
        const ans = []
        function helper(node) {
            if (!node) return
            ans.push(node.data)
            helper(node.left)
            helper(node.right)
            return;
        }
        helper(root)
        return ans
    }
}