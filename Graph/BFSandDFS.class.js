class Solution {
    dfs(node, graph, visited, result) {
        result.push(node)
        for (const neighbour of graph[node]) {
            if (!visited[neighbour]) {
                visited[neighbour] = true
                this.dfs(neighbour, graph, visited, result)
            }
        }
    }

    dfsOfGraph(V, adj) {
        const visited = new Array(V).fill(false)
        const result = []
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                visited[i] = true
                this.dfs(i, adj, visited, result)
            }
        }
        return result
    }

    bfsOfGraph(V, adj) {
        const visited = new Array(V).fill(false)
        const result = []

        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                visited[i] = true
                this.bfs(i, adj, visited, result)
            }
        }
        return result
    }
    bfs(source, graph, visited, result) {
        const queue = []
        queue.push(source)
        while (queue.length) {
            const current = queue.shift()
            result.push(current)
            for (const neighbour of graph[current]) {
                if (!visited[neighbour]) {
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            }
        }
    }
}
