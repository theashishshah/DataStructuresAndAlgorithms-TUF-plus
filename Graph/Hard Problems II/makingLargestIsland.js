/**
 * @param {number[][]} grid
 * @return {number}
 */
class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i)
        this.size = new Array(n).fill(1)
        this.rank = new Array(n).fill(0)
    }

    ultimateParent(node) {
        if (this.parent[node] === node) return node
        return this.parent[node] = this.ultimateParent(this.parent[node])
    }

    unionBySize(u, v) {
        const pu = this.ultimateParent(u)
        const pv = this.ultimateParent(v)
        if (pu === pv) return
        if (this.size[pu] < this.size[pv]) {
            this.parent[pu] = pv
            this.size[pv] += this.size[pu]
        } else if (this.size[pv] < this.size[pu]) {
            this.parent[pv] = pu
            this.size[pu] += this.size[pv]
        } else {
            this.parent[pu] = pv
            this.size[pv] += this.size[pu]
        }
    }
    unionByRank(u, v) {
        const pu = this.ultimateParent(u)
        const pv = this.ultimateParent(v)
        if (pu === pv) return
        if (this.rank[pu] < this.rank[pv]) this.parent[pu] = pv
        else if (this.rank[pv] < this.rank[pu]) this.parent[pv] = pu
        else {
            this.parent[pu] = pv
            this.rank[pv]++
        }
    }

    getSize(node) {
        return this.size[this.ultimateParent(node)]
    }

}

function makeInitialComponents(grid, n, ds, directions) {
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 0) continue
            // explore all its neighbours
            for (const [dx, dy] of directions) {
                const nRow = row + dx
                const nCol = col + dy
                if (nRow >= 0 && nRow < n &&
                    nCol >= 0 && nCol < n &&
                    grid[nRow][nCol] === 1
                ) {
                    const node = row * n + col
                    const nextNode = nRow * n + nCol
                    ds.unionBySize(node, nextNode)
                }
            }
        }
    }
}

var largestIsland = function (grid) {
    // make initial components
    const n = grid.length
    const ds = new DisjointSet(n * n)
    const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
    makeInitialComponents(grid, n, ds, directions)
    let ans = 0
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] === 1) continue

            const parentSet = new Set()
            // explore the neighbours
            for (const [dx, dy] of directions) {
                const nRow = row + dx
                const nCol = col + dy
                if (nRow >= 0 && nRow < n &&
                    nCol >= 0 && nCol < n &&
                    grid[nRow][nCol] === 1
                ) {
                    const nextNode = nRow * n + nCol
                    parentSet.add(ds.ultimateParent(nextNode))
                }
            }
            let maxx = 0
            for (const parent of parentSet) {
                maxx += ds.getSize(parent)
            }
            ans = Math.max(ans, maxx + 1)
        }
    }
    for (let i = 0; i < n * n; i++) {
        ans = Math.max(ans, ds.getSize(i))
    }
    return ans
};