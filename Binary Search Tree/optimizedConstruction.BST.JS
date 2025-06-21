var bstFromPreorder = function (preorder) {
    if (!preorder.length) return null
    let index = 0
    const createBST = (ub) => {
        if (index === preorder.length || ub < preorder[index]) return null
        const value = preorder[index++]
        const root = new TreeNode(value)
        root.left = createBST(value)
        root.right = createBST(ub)
        return root
    }
    return createBST(Infinity)
};