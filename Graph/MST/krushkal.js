class DisjointSet {
    constructor(n) {
        this.parent = new Array(n).fill().map((_, i) => i)
        this.rank = new Array(n).fill(0)
        this.size = new Array(n).fill(1)
    }

    findUltimateParent(node) {
        if (this.parent[node] === node) return node
        this.parent[node] = this.findUltimateParent(this.parent[node])
        return this.parent[node]
    }

    find(u, v) {
        return this.findUltimateParent(u) === this.findUltimateParent(v)
    }

    unionByRank(u, v) {
        const pu = this.findUltimateParent(u)
        const pv = this.findUltimateParent(v)
        if (pu === pv) return

        if (this.rank[pu] < this.rank[pv]) {
            this.parent[pu] = pv
        } else if (this.rank[pv] < this.rank[pu]) {
            this.parent[pv] = pu
        } else {
            this.parent[pu] = pv
            this.rank[pv]++
        }
    }

    unionBySize(u, v) {
        const pu = this.findUltimateParent(u)
        const pv = this.findUltimateParent(v)
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
}

class Solution {
    spanningTree(n, adj) {
        const graph = []
        for (let from = 0; from < n; from++) {
            for (const [to, weight] of adj[from]) {
                graph.push([weight, from, to])
            }
        }

        graph.sort((a, b) => a[0] - b[0])
        const ds = new DisjointSet(n)
        let pathWeight = 0

        for (const [weight, from, to] of graph) {
            if (ds.findUltimateParent(from) !== ds.findUltimateParent(to)) {
                pathWeight += weight
                ds.unionByRank(from, to)
            }
        }
        return pathWeight
    }
}
