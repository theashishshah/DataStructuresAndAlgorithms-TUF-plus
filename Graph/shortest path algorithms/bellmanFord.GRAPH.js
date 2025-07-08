class Solution {
    bellman_ford(n, edges, source) {
        const INF = 1e9
        const dist = new Array(n).fill(INF)
        dist[source] = 0
        for (let i = 0; i < n - 1; i++) {
            let anyChange = false
            for (const [from, to, weight] of edges) {
                if (dist[from] !== INF && dist[from] + weight < dist[to]) {
                    dist[to] = dist[from] + weight
                    anyChange = true
                }
            }

            if (!anyChange) break // if there is no anyChange
        }

        for (const [from, to, weight] of edges) {
            if (dist[from] !== INF && dist[from] + weight < dist[to]) {
                return [-1] // negative cycle detected
            }
        }

        return dist
    }
}

