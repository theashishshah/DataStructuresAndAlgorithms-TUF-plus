let maxDia = 0;

function height(root) {
    if (!root) return 0;

    const lh = height(root.left);
    const rh = height(root.right);

    maxDia = Math.max(maxDia, lh + rh);

    return 1 + Math.max(lh, rh);
}

var diameterOfBinaryTree = function (root) {
    maxDia = 0; // reset before calculation
    height(root);
    return maxDia;
};
