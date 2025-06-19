var lowestCommonAncestor = function (root, p, q) {
    // if root is null then null
    if (!root) return null


    // check if you found the first one then if second lies below that tree doesn't matter, cuz at the end this one will be your answer
    if (root === p || root === q) return root


    // go try to search left or right
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)

    // if you found both below your root then this is your answer
    if (left && right) return root

    // else anyone you found is your answer else null
    return left || right
};