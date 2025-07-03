class Solution {
    shortestPath(edges, n, M) {
        // create adj list

        const graph = Array(n).fill().map(() => [])
        for (const [from, to] of edges) {
            graph[from].push(to)
            graph[to].push(from)
        }

        const dist = Array(n).fill(Infinity)
        dist[0] = 0
        const queue = []
        queue.push([0, -1])
        while (queue.length) {
            const [current, parent] = queue.shift()
            // take the current dist and explore its neighbors
            let currentDist = dist[current]
            if (currentDist !== Infinity) {
                for (const nnode of graph[current]) {
                    if (nnode !== parent) {
                        if (currentDist + 1 < dist[nnode]) {
                            queue.push([nnode, current])
                            dist[nnode] = currentDist + 1
                        }
                    }
                }
            } else dist[current] = -1
        }
        return dist.map(d => d === Infinity ? -1 : d)
    }
}
