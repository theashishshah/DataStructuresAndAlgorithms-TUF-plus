var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null;

    while (root) {
        if (root.val === p.val || root.val === q.val) return root;


        if (root.val < p.val && root.val < q.val) {
            root = root.right;
        }

        else if (root.val > p.val && root.val > q.val) {
            root = root.left;
        }

        else {
            return root;
        }
    }

    return null;

};