class DisjointSet {
    constructor(n) {
        this.parent = new Array(n + 1)
        for (let i = 0; i <= n; i++) {
            this.parent[i] = i
        }
        this.rank = new Array(n + 1).fill(0)
        this.size = new Array(n + 1).fill(1)

    }

    findUltimateParent(node) {
        if (this.parent[node] === node) return node

        this.parent[node] = this.findUltimateParent(this.parent[node])
        return this.parent[node]
    }


    find(u, v) {
        // if u and v are in the same set, return true else false
        // Find ultimate parent of both, if same then true else false
        return (this.findUltimateParent(u) === this.findUltimateParent(v))
    }

    unionByRank(u, v) {
        // you've two nodes, now you've to implement union by rank
        // find the ultimate parent of both
        const pu = this.findUltimateParent(u)
        const pv = this.findUltimateParent(v)
        if (pu === pv) return

        // play with ultimate parent because they're the one whom we've to Add
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
