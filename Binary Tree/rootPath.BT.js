function nodePath(root, path, ans) {
    if (!root) return

    path.push(root.val)
    if (!root.left && !root.right) {
        ans.push(path.join("->"))
        path.pop()
        return
    }

    nodePath(root.left, path, ans)
    nodePath(root.right, path, ans)
    path.pop()
    return

}
var binaryTreePaths = function (root) {
    const result = []
    nodePath(root, [], result)
    return result
};