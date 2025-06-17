
class Solution {
    areYouLeaf(root) {
        return !root.left && !root.right
    }

    addLeftBoundary(root, ans) {
        let curr = root.left
        while (curr) {
            if (!this.areYouLeaf(curr)) ans.push(curr.data)
            if (curr.left) curr = curr.left
            else curr = curr.right
        }
        return;
    }

    addLeaves(root, ans) {
        if (this.areYouLeaf(root)) {
            ans.push(root.data)
            return
        }
        if (root.left) this.addLeaves(root.left, ans)
        if (root.right) this.addLeaves(root.right, ans)
        return;
    }

    addRightBoundary(root, ans) {
        let curr = root.right
        const temp = []
        while (curr) {
            if (!this.areYouLeaf(curr)) temp.push(curr.data)
            if (curr.right) curr = curr.right
            else curr = curr.left
        }

        const len = temp.length
        for (let i = 0; i < len; i++) {
            ans.push(temp.pop())
        }
        return;
    }

    boundary(root) {
        if (!root) return []
        const result = []
        if (this.areYouLeaf(root)) {
            result.push(root.data)
            return result
        }
        result.push(root.data)
        this.addLeftBoundary(root, result)
        this.addLeaves(root, result)
        this.addRightBoundary(root, result)
        return result
    }
}