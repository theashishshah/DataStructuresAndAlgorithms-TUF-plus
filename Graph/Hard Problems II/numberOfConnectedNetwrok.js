class Disjoint {
    constructor(n) {
        this.rank = new Array(n).fill(0)
        this.parent = Array.from({ length: n }, (_, i) => i)
    }

    ultimateParent(node) {
        if (node === this.parent[node]) return node
        this.parent[node] = this.ultimateParent(this.parent[node])
        return this.parent[node]
    }

    findUnion(u, v) {
        const pu = this.ultimateParent(u)
        const pv = this.ultimateParent(v)
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
}

class Solution {
    solve(n, Edge) {
        const set = new Disjoint(n)
        let extraEdges = 0
        for (const [u, v] of Edge) {
            const pu = set.ultimateParent(u)
            const pv = set.ultimateParent(v)
            if (pu === pv) extraEdges++
            else set.findUnion(u, v)
        }

        let selfParent = 0
        for (let i = 0; i < n; i++) {
            // i'll ask i: who's your parent, if you're then increase
            // else nothing
            if (set.ultimateParent(i) === i) selfParent++
        }
        selfParent--
        if (extraEdges >= selfParent) return selfParent
        else return -1

    }
}



class Solution {
    solve(n, connections) {
        if (connections.length < n - 1) return -1; // Not enough cables

        const adj = Array.from({ length: n }, () => []);
        for (const [u, v] of connections) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visited = new Array(n).fill(false);
        let components = 0;

        const dfs = (node) => {
            visited[node] = true;
            for (const neighbor of adj[node]) {
                if (!visited[neighbor]) dfs(neighbor);
            }
        };

        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                components++;
                dfs(i);
            }
        }

        return components - 1;
    }
}

