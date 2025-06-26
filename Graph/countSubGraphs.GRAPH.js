class Solution {
    dfs(node, graph, visited) {
        for (const neighbour of graph[node]) {
            if (!visited[neighbour]) {
                visited[neighbour] = true
                this.dfs(neighbour, graph, visited)
            }
        }
    }

    findNumberOfComponent(vertexCount, edges) {
        const graph = Array.from({ length: vertexCount }, () => [])
        for (const [u, v] of edges) {
            graph[u].push(v)
            graph[v].push(u)
        }

        const visited = new Array(vertexCount).fill(false)
        let count = 0
        for (let i = 0; i < vertexCount; i++) {
            if (!visited[i]) {
                count++
                visited[i]
                this.dfs(i, graph, visited)
            }
        }
        return count
    }
}