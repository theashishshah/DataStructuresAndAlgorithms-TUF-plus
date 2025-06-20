var kthSmallest = function (root, k) {
    if (!root) return 0
    k = k
    let count = 0
    let curr = root
    while (curr) {
        if (!curr.left) {
            // visit the current node
            count++
            if (count === k) return curr.val
            else curr = curr.right
        } else {
            let pre = curr.left
            while (pre.right && pre.right !== curr) pre = pre.right

            if (!pre.right) {
                pre.right = curr
                curr = curr.left
            } else {
                pre.right = null
                count++
                if (count === k) return curr.val
                curr = curr.right
            }

        }

    }
    return -1
};