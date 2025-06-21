function bst(preorder) {
    if (!preorder.length) return null

    const inorder = [...preorder]
    const map = new Map()
    inorder.sort((a, b) => a - b)
    inorder.forEach((val, index) => map.set(val, index))

    const createBST = (inStart, inEnd, preStart, preEnd) => {
        if (inStart > inEnd || preStart > preEnd) return null

        const rootValue = preorder[preStart]
        const root = new TreeNode(rootValue)

        const index = map.get(rootValue)
        const jumpLength = index - inStart
        root.left = createBST(inStart, index - 1, preStart + 1, preStart + jumpLength)
        root.right = createBST(index + 1, inEnd, preStart + jumpLength + 1, preEnd)
        return root
    }
    return createBST(0, inorder.length - 1, 0, preorder.length - 1)
}