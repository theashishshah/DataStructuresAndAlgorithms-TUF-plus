var buildTree = function (preorder, inorder) {
    const map = new Map()
    inorder.forEach((val, index) => map.set(val, index))

    const helper = (inStart, inEnd, preStart, preEnd) => {
        if (inStart > inEnd || preStart > preEnd) return null

        const rootValue = preorder[preStart]
        const index = map.get(rootValue)
        const nums = index - inStart
        const root = new TreeNode(rootValue)
        root.left = helper(inStart, index - 1, preStart + 1, preStart + nums)
        root.right = helper(index + 1, inEnd, preStart + nums + 1, preEnd)
        return root
    }

    return helper(0, preorder.length - 1, 0, preorder.length - 1)
};