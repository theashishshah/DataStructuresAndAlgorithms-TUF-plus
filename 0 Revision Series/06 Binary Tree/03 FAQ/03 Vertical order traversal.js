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
    verticalTraversal(root) {
        if (!root) return []

        let current = root
        const queue = []
        queue.push({
            node: current,
            col: 0,
            level: 0
        })
        const map = new Map()
        /** map = [
         * col1, [level1, level2, level3, level4],
         * col2: [level0, level2, level4]
         * ]
         */
        while (queue.length) {
            const { node, col, level } = queue.shift()
            // check if this col exists or not, if not create one
            if (!map.has(col)) map.set(col, new Map())
            // suppose if it has this col, then go to this col and check if level exists or not
            if (!map.get(col).has(level)) map.get(col).set(level, [])

            // now go to this col, and level and push the data
            map.get(col).get(level).push(node.data)

            if (node.left) {
                queue.push({
                    node: node.left,
                    col: col - 1,
                    level: level + 1
                })
            }
            if (node.right) {
                queue.push({
                    node: node.right,
                    col: col + 1,
                    level: level + 1
                })
            }
        }
        /** map = [
         * col1, [level1, level2, level3, level4],
         * col2: [level0, level2, level4]
         * ]
         */

        // Find the col and sort it, then iterate over each columns 
        const ans = []
        const sortedCols = [...map.keys()].sort((a, b) => a - b)
        for (const col of sortedCols) {
            // I'll go to map, and ask for the map at this cols 
            const levelMap = map.get(col)
            /** levelMap = [level, [], level: [], level: []]
             * 
             */
            const sortedLevels = [...levelMap.keys()].sort((a, b) => a - b)
            // sortedLevels: [0, 1, 2, 3, 4, 5]
            const current = []
            for (const row of sortedLevels) {
                const values = levelMap.get(row).sort((a, b) => a - b)
                current.push(...values)
            }
            ans.push([...current])
        }
        return ans
    }
}