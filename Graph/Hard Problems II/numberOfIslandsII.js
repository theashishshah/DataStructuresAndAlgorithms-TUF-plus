class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i)
        this.size = new Array(n).fill(1)
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

}

class Solution {
    numOfIslands(n, m, A) {
        const directions = [[0, -1], [0, 1], [1, 0], [-1, 0]]
        const djSet = new DisjointSet(n * m)
        const visited = Array.from({ length: n }, () => Array(m).fill(false))
        let count = 0
        const ans = []
        for (const [row, col] of A) {
            if (!visited[row][col]) {
                visited[row][col] = true
                count++;
                // now traverse its neighbors
                for (const [dx, dy] of directions) {

                    const nRow = row + dx
                    const nCol = col + dy
                    if (nRow >= 0 && nRow < n &&
                        nCol >= 0 && nCol < m &&
                        visited[nRow][nCol]
                    ) {
                        const node = row * m + col
                        const nextNode = nRow * m + nCol
                        if (djSet.ultimateParent(node) !== djSet.ultimateParent(nextNode)) {
                            count--
                            djSet.unionBySize(node, nextNode)
                        }
                    }
                }

            }
            ans.push(count)

        }
        return ans
    }
}
